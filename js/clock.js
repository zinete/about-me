window.onload = function () {
    function dual(n) {
        if(n<10){
            return "0" + n
        }else {
            return "" + n
        }
    }
    function clock() {
        var almg = $(".blockTitle > img")
        var time = new Date()
        var gettime = dual(time.getHours()) + dual(time.getMinutes()) + dual(time.getSeconds())
        for(var i = 0; i < almg.length; i++){
            almg[i].src = 'images/' + gettime[i] + '.png'
        }

    }
    clock()
    setInterval(clock,1000)
}