var gameModule=(function (){
	var timeoutVar,
		counter=0,
		colors = ['#ff0000', '#0000ff', 'yellow'],
        length = colors.length,

		canvas = document.getElementById('game'),
		ctx = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 480;

	function start(){
		var ballX=Math.floor(Math.random()*440)+100,
			ballY=Math.floor(Math.random()*280)+100,
			ballR=Math.floor(Math.random()*90)+10;
		//	color1=Math.floor(Math.random()*256);    //red color
		//	color2=Math.floor(Math.random()*256);    //green color
		//	color3=Math.floor(Math.random()*256);    //blue color

		//ctx.fillStyle = '#'+color1.toString(16)+color2.toString(16)+color3.toString(16);   
		ctx.fillStyle = colors[counter % length];
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if (counter<10){
			timeoutVar=setTimeout(start,1000);
			console.log("X: "+ballX+", Y: "+ballY+", R: "+ballR+
				"color1: "+color1+", color: "+ctx.fillStyle);
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