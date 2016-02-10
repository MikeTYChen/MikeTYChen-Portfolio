(function() {

    var width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();
    var lastX = Math.random()*width,lastY = Math.random()*height; 

    function initHeader() {
        width = window.innerWidth;
        height = window.innerHeight;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.15; x++) {
            var c = new Circle();
            circles.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // Canvas manipulation
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();   
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = Math.random()*height;
            _this.alpha = 0.1+Math.random()*0.3;
            _this.scale = 0.1+Math.random()*0.3;
            random_num1 = Math.random();
            random_num2 = Math.random();
            random_num1 *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            random_num2 *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
            _this.xvelocity = random_num1;
            _this.yvelocity = random_num2;
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.x -= _this.xvelocity;
            _this.pos.y -= _this.yvelocity;
            newX = _this.pos.x+Math.random()*10;
            newY = _this.pos.y+Math.random()*10;
            _this.alpha -= 0.0005;
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            ctx.fillStyle = 'rgba(82,179,217,'+ _this.alpha+')';
            ctx.fill();
            ctx.lineTo(newX,newY);
        };
    }

})();