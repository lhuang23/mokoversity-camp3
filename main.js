/*jslint browser: true, devel: true, closure: true */

var gameModule = (function (document) {

    "use strict";

    var counter = 0,
        ballX,
        ballY,
        ballR,
        scores,
        canvas = document.getElementById('game'),
        ctx = canvas.getContext('2d');
/* colors = ['#ff0000', '#0000ff', 'yellow'], 
   length = colors.length, */

    canvas.width = 640;
    canvas.height = 480;

    function touchEvent(evt) {
        var x = evt.clientX,
            y = evt.clientY,
            tmp = (ballX - x) * (ballX - x) + (ballY - y) * (ballY - y);

        console.log("clicked: " + x + ", " + y);
        if (tmp < ballR * ballR) {
            scores = scores + 100 - ballR;
            console.log("Hit! Your scores: " + scores);
        }
    }

    function gameOver() {
        console.log("Final: " + scores);
        document.getElementById("main").removeEventListener("click", touchEvent);
    }

    function startGame() {
        var color1 = Math.floor(Math.random() * 256),    //red color
            color2 = Math.floor(Math.random() * 256),    //green color
            color3 = Math.floor(Math.random() * 256);    //blue color

        ballX = Math.floor(Math.random() * 440) + 100;
        ballY = Math.floor(Math.random() * 280) + 100;
        ballR = Math.floor(Math.random() * 90) + 10;

        ctx.fillStyle = '#' + color1.toString(16) + color2.toString(16) + color3.toString(16);
/*      ctx.fillStyle = colors[counter % length]; */
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2, true);
        ctx.fill();

        counter = counter + 1;
        console.log("counter: " + counter + ", X: " + ballX + ", Y: " + ballY + ", R: " + ballR + ", color: " + ctx.fillStyle);

        if (counter < 10) {
            setTimeout(startGame, 1000);
        } else {
            gameOver();
        }
    }

    function start() {
        scores = 0;
        document.getElementById("main").addEventListener("click", touchEvent, false);
        startGame();
    }

    return {
        start: start
    };
}(document));

gameModule.start();