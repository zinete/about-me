# Zheng Hui's Resume

我的个人简历项目

面试题记录

1.SPA 原理
SPA 就是单页应用，整个网站只有一个 HTML 页面。页面切换的时候，不会刷新整个页面，而是前端通过路由动态切换组件。
原理上，第一次加载时浏览器请求 index.html，然后 JS 框架（React 或 Vue）挂载根组件并初始化路由。之后用户操作改变 URL，前端路由捕获到变化，根据路由加载对应组件，同时通过异步请求拿到数据。数据更新后，框架的响应式系统会自动更新视图，虚拟 DOM 只渲染实际变化的部分。
SPA 的好处是体验流畅、切换快，缺点是首屏加载大、SEO 需要额外处理。一般我们会用路由懒加载、资源压缩和缓存等方式优化。

2.React 中 state 和 props 的区别？
props 是父组件传给子组件的数据，它是只读的，子组件不能修改；state 是组件自身维护的状态，可以通过 setState（类组件）或 useState（函数组件）更新。
简单来说，props 用来传递数据，state 用来管理组件内部可变数据。数据变化时，React 会重新渲染组件，更新视图。

3.什么是虚拟 DOM？
虚拟 DOM 是 React 内部维护的一棵 JavaScript 树，用来描述页面结构。当状态变化时，React 会先在虚拟 DOM 做差异比对（diff），然后只更新实际变化的 DOM，提高性能

4.React Hooks 为什么出现？
Hooks 让函数组件也能使用 state 和生命周期，解决了类组件中 this、生命周期分散、逻辑复用困难的问题。常用的有 useState、useEffect、useMemo、useCallback。

5.Vue 响应式原理
Vue 2 用 Object.defineProperty 劫持对象属性，通过 getter 收集依赖，setter 触发视图更新；Vue 3 用 Proxy 代理对象，能自动响应新增或删除属性。核心就是数据变化 → 视图自动更新。

vue2流程概览：

1.初始化时遍历 data 对象的每个属性.

2.Watcher：负责视图更新。模板中使用了某个属性，Watcher 会收集到这个属性对应的 Dep.

3.依赖更新：属性变化时，通过 dep.notify() 通知所有 Watcher 执行更新。

注意：

数组问题：Vue 2 无法检测数组索引和 length 变化，需要通过 Vue 提供的方法（push、splice 等）替代原生操作。

```js
function defineReactive(obj, key, val) {
  const dep = new Dep(); // 用于存储依赖
  Object.defineProperty(obj, key, {
    get() {
      dep.depend(); // 收集依赖
      return val;
    },
    set(newVal) {
      if (newVal !== val) {
        val = newVal;
        dep.notify(); // 通知依赖更新
      }
    },
  });
}
```

vue3流程概览：

1.无需递归遍历 → 性能更好

2.支持新增属性响应式 → 不需要 Vue.set

3.数组 / Map / Set 等类型可响应

```js
const reactive = (target) => {
  return new Proxy(target, {
    get(obj, key, receiver) {
      const res = Reflect.get(obj, key, receiver);
      track(obj, key); // 收集依赖
      return typeof res === "object" ? reactive(res) : res;
    },
    set(obj, key, value, receiver) {
      const result = Reflect.set(obj, key, value, receiver);
      trigger(obj, key); // 触发依赖更新
      return result;
    },
  });
};
```

6. v-if 和 v-show 的区别
   v-if 是条件渲染，控制 DOM 的销毁和创建；v-show 是控制元素的 display 显示或隐藏，DOM 不会被销毁。v-if 开销大，但适合不频繁切换；v-show 切换快，但初始渲染都存在 DOM。

---

# 一、表单 JSON 结构是怎么设计的？

如果是做 **动态表单 / 低代码表单 / SaaS表单系统**，通常会把表单抽象成 **JSON Schema + UI Schema**。

## 1. 基本设计思路

核心是 **配置驱动表单**：

- JSON 描述字段
- 前端根据 JSON 渲染组件
- 提交时统一收集数据

结构通常包含：

- 字段配置
- UI配置
- 校验规则
- 默认值

---

## 2. 一个典型 JSON 结构

```json
{
  "formId": "employeeForm",
  "fields": [
    {
      "type": "input",
      "label": "姓名",
      "name": "name",
      "placeholder": "请输入姓名",
      "required": true
    },
    {
      "type": "select",
      "label": "部门",
      "name": "department",
      "options": [
        { "label": "技术部", "value": "tech" },
        { "label": "产品部", "value": "product" }
      ]
    },
    {
      "type": "date",
      "label": "入职时间",
      "name": "joinDate"
    }
  ]
}
```

前端渲染逻辑：

```ts
fields.map(field => {
  switch(field.type){
    case "input":
      return <Input {...field}/>
    case "select":
      return <Select options={field.options}/>
  }
})
```

---

## 3. 实际项目会增加的能力

### ① 校验规则

```json
{
  "name": "phone",
  "type": "input",
  "rules": [
    { "required": true, "message": "手机号必填" },
    { "pattern": "^1[0-9]{10}$", "message": "手机号格式错误" }
  ]
}
```

---

### ② 联动逻辑

比如：

**选择国家 → 显示省份**

```json
{
  "name": "province",
  "visibleWhen": {
    "field": "country",
    "value": "china"
  }
}
```

---

### ③ 布局信息

```json
{
  "layout": {
    "span": 12
  }
}
```

对应 Antd Grid：

```
<Row>
  <Col span={12}/>
</Row>
```

---

## 4. 面试加分点（关键）

可以补一句：

> 为了提高扩展性，我们把字段渲染做成 **组件注册机制**，新增组件只需要注册即可。

例如：

```ts
const componentMap = {
  input: Input,
  select: Select,
  date: DatePicker,
};
```

这样：

```
JSON → 组件映射 → 渲染
```

---

# 二、直播卡顿怎么定位和优化？

面试官问这个，本质是考：

**性能分析能力 + 实战经验**

回答最好分 **3步**：

```
定位问题
分析原因
优化方案
```

---

# 1 先定位卡顿在哪一层

直播卡顿一般可能在：

| 层级     | 可能问题        |
| -------- | --------------- |
| 网络     | 弱网 / 丢包     |
| 解码     | 视频解码慢      |
| 渲染     | DOM频繁更新     |
| JS       | 主线程阻塞      |
| 状态更新 | React频繁render |

我一般会先用：

**Chrome Performance**

看：

```
FPS
Long Task
JS占用
```

如果 FPS < 30
说明渲染压力大。

---

# 2 常见卡顿原因

### ① 高频状态更新

直播聊天室 / 点赞 / 礼物：

```
1秒几十次更新
```

React 每次都会 render。

---

### ② DOM过多

聊天室：

```
几千条消息
```

导致：

```
重排 + 重绘
```

---

### ③ 主线程被阻塞

比如：

```
JSON解析
弹幕计算
动画计算
```

---

# 3 优化方案（重点）

### ① 批量更新状态

不要每条消息 setState

错误：

```js
setMessages((prev) => [...prev, msg]);
```

优化：

```
消息缓冲队列
100ms 批量更新
```

```js
buffer.push(msg);

setTimeout(() => {
  setMessages((prev) => [...prev, ...buffer]);
  buffer = [];
}, 100);
```

---

### ② 虚拟列表

聊天室：

```
react-window
react-virtualized
```

只渲染可见区域。

DOM 从：

```
3000 → 30
```

---

### ③ 减少 React render

使用：

```
memo
useMemo
useCallback
```

避免不必要更新。

---

### ④ 弱网优化

直播常见：

```
断流
卡顿
```

解决：

- 自动重连
- 降码率
- 切换清晰度

---

### ⑤ WebWorker

把计算移到 worker：

比如：

```
弹幕轨道计算
礼物动画队列
```

避免阻塞 UI。

> 在直播模块中，我们主要通过 Chrome Performance 工具定位卡顿问题。最开始发现 FPS 明显下降，并且 JS 主线程存在较多 Long Task。进一步分析发现主要是聊天室消息和礼物动画导致的高频状态更新。
>
> 优化上主要做了几件事：
> 第一，对消息更新做了批量处理，通过消息缓冲队列每 100ms 批量更新 React state，减少 render 次数。
> 第二，引入虚拟列表，只渲染可视区域，减少 DOM 数量。
> 第三，通过 memo 和 useMemo 避免不必要的组件更新。
> 第四，对于复杂计算，比如弹幕轨道分配，放到 WebWorker 中执行，避免阻塞主线程。
>
> 最终 FPS 从大约 25 提升到了接近 55，直播流畅度明显提升。

---
