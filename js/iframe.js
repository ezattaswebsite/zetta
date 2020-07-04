var num = 0;
function trocaBanner(){
	var imgs=['png/ultrassonico.png','png/reflexivo.png'];
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