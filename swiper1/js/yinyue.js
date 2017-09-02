var music=document.getElementsByClassName("music")[0];
var off=music.getElementsByClassName("off")[0];
var gif=music.getElementsByClassName("gif")[0];
var aud=music.getElementsByClassName("aud")[0];

var sta=1
music.onclick=function(){
	if(sta==1){
		
		gif.style.display="none";
		off.style.animation="none";
		aud.pause();
		sta=2
	}else if(sta=2){
		
		gif.style.display="block";
		off.style.animation="name 2s linear infinite";
		aud.play();
		sta=1
	}
}
