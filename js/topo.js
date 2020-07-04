/*
var y = document.getElementById("hand");
while(true){
	$(document).scroll(function() { 
   if($(window).scrollTop() === 0) {
	y.style.display = "block";
   }
});
}
*/
function topoScroll(){
	const topoPagina = window.pageYOffset; //obtem o topo da página
	if(topoPagina <= 30){
		var y = document.getElementById("hand");
		y.style.display = "block";
	}
}
window.addEventListener('scroll', function(){
	topoScroll();
})