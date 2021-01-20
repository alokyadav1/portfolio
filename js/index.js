$(document).ready(function(){
    $("#menu").click(function(){
        $(".navigation").toggle(500);
    })
})

window.onload = () =>{
    var text = "Welcome to my portfolio"
    var intro = document.getElementsByClassName('intro')[0]
    var i=0
    var set = setInterval(function(){
        intro.innerHTML += text[i]
        i++;
        if(i>=text.length){
            clear()
        }
    },150)
    function clear(){
        clearInterval(set)
    }
}