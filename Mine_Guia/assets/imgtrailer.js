var div = document.querySelector('div.trailer')
window.addEventListener('resize', function() {
    var screenWidth = window.innerWidth

    var myDiv = document.querySelector('div#trailer')
    if(myDiv = screenWidth/2){
        div.classList.add('trl-pequena')
    }
    else{
        div.classList.remove('trl-pequena')
    }
});