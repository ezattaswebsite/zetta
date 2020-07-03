function trocaBanner(){
	var num=Math.floor(Math.random()*3);
	var imgs=['../media/imagens/jpg/mulher-one.jpg','../media/imagens/jpg/mulher-two.jpg','../media/imagens/jpg/mulher-three.jpg'];
	document.getElementById("banner").src=imgs[num];
}
function iniciar(){
	trocaBanner()
}
window.addEventListener("load",iniciar);
var delay=1000; //1 seconds
setTimeout(function(){
        alert(“Ola mundo!”);
        //your code to be executed after 1 seconds
},delay);