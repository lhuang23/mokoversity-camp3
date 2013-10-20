var gameModule=(function (){
	var timeoutVar,
		counter=0,
		colors = ['#ff0000', '#0000ff', 'yellow'],
        length = colors.length,
        ballX, ballY, ballR, scores;

		canvas = document.getElementById('game'),
		ctx = canvas.getContext('2d');

	canvas.width = 640;
	canvas.height = 480;

	function touchEvent(evt){
		var x = evt.clientX,
			y = evt.clientY,
			tmp=(ballX-x) * (ballX-x)+(ballY-y)*(ballY-y);

		console.log("clicked: " + x + ", " + y);
		if (tmp < ballR*ballR){
			scores += 100 - ballR;
			console.log("Hit! ballR= "+ballR+". Your scores: "+scores);
		}
		
	}
	function start(){
		scores =0;
		document.getElementById("main").addEventListener("click", touchEvent, false);
		startGame();
	}

	function startGame(){
		ballX=Math.floor(Math.random()*440)+100;
		ballY=Math.floor(Math.random()*280)+100;
		ballR=Math.floor(Math.random()*90)+10;
			//color1=Math.floor(Math.random()*256);    //red color
			//color2=Math.floor(Math.random()*256);    //green color
			//color3=Math.floor(Math.random()*256);    //blue color

		//ctx.fillStyle = '#'+color1.toString(16)+color2.toString(16)+color3.toString(16);   
		ctx.fillStyle = colors[counter % length];
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if (counter<10){
			counter++;
			timeoutVar=setTimeout(startGame,1000);
			//console.log("X: "+ballX+", Y: "+ballY+", R: "+ballR+", color1: "+color1+", color: "+ctx.fillStyle);
		}else{
			gameOver();
		}
	}
	function gameOver(){
		console.log("Final: "+scores);
	}
	return {
		start: start
	}
})();

gameModule.start();