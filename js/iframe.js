var num = 0;
function trocaBanner(){
	var imgs=['svg/ultrassonico.svg','svg/reflexivo.svg'];
	document.getElementById("banner").src=imgs[num];
	if(num >=1){
		num--;
	}else{
		num++;
	}
	delay();
}
function delay(){
	setTimeout(function () {
		trocaBanner();
	}, 4000); 	
}
window.addEventListener("load", delay);