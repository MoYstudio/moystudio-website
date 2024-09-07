//键
        document.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        document.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        document.addEventListener('selectstart', function(e) {
            e.preventDefault();
        });


        function preventDefault(event) {
            event.preventDefault();
        }
        
        window.addEventListener('keydown', preventDefault);
        window.addEventListener('keyup', preventDefault);
        window.addEventListener('keypress', preventDefault);
        

//Google浏览器开发禁用
setInterval(function () {
    check()
}, 1000);
var check = function () {
    function doCheck(a) {
        if (("" + a / a)["length"] !== 1 || a % 20 === 0) {
            (function () { }
            ["constructor"]("debugger")())
        } else {
            (function () { }
            ["constructor"]("debugger")())
        }
        doCheck(++a)
    }
    try {
        doCheck(0)
    } catch (err) { }
};
check(); 

//可视判断
var h = window.innerHeight;
var w = window.innerWidth;
window.onresize = function () {
    if (h !== window.innerHeight || w !== window.innerWidth) {
        window.location.href = "https://www.moystudio.fun/warning";
    }
};
