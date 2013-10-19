var gameModule=(function (){
	var timeoutVar,
		counter=0;
	function start(){
		var canvas = document.getElementById('game'),
			ctx = canvas.getContext('2d'),
			ballX=Math.floor(Math.random()*300),
			ballY=Math.floor(Math.random()*450),
			ballR=Math.floor(Math.random()*100);

		canvas.width = 480;
		canvas.height = 320;

		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if (counter<10){
			timeoutVar=setTimeout(start,1000);
			console.log("CounterA: "+counter);
			counter++;
		}
	}
	function gameOver(){
		console.log("CounterB: "+counter);
	}
	return {
		start: start,
		gameOver: gameOver
	}
})();

gameModule.start();
gameModule.gameOver();