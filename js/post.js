var img = ['post/ultrassonico.jpg', 'post/ultrassonico-i.jpg'];
var x = 0;
function trocar2(){
    if(x == 0){
        x = 1;
        next();
    }else{
        if(x == 1){
            x = 0;
            next();
        }
    }
}
function next(){
    document.getElementById("troca").src=img[x];
}