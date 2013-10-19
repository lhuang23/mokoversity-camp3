var gameModule=(function (){
	var timeoutVar,
		counter=0,
		canvas = document.getElementById('game'),
		ctx = canvas.getContext('2d');

		canvas.width = 480;
		canvas.height = 320;

	function start(){
		var ballX=Math.floor(Math.random()*300),
			ballY=Math.floor(Math.random()*450),
			ballR=Math.floor(Math.random()*50);
			color=Math.floor(Math.random()*1000);

		ctx.fillStyle = '#'+color.toString();
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