var gameModule=(function (){
	var timeoutVar,
		counter=0,
		canvas = document.getElementById('game'),
		ctx = canvas.getContext('2d');

		canvas.width = 480;
		canvas.height = 320;

	function start(){
		var ballX=Math.floor(Math.random()*470)+10,
			ballY=Math.floor(Math.random()*310)+10,
			ballR=Math.floor(Math.random()*100)+10;
			color1=Math.floor(Math.random()*256);
			color2=Math.floor(Math.random()*256);
			color3=Math.floor(Math.random()*256);

		ctx.fillStyle = '#'+color1.toString(16)+color2.toString(16)+color3.toString(16);
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if (counter<10){
			timeoutVar=setTimeout(start,1000);
			console.log("X: "+ballX+", Y: "+ballY+", R: "+ballR+", color: "+ctx.fillStyle);
			counter++;
		}
	}
	function gameOver(){
		console.log("CounterB: "+counter);
	}
	return {
		start: start
	}
})();

gameModule.start();