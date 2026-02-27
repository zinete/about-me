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
