//Meu primeiro JS
//Fazer uma função para aparecer as armaduras
function colocarMark1(){
    //criar váriavel
    let mostruario = document.getElementById("armaduras")
    //mostruario.style.backgroundColor = "purple"
    mostruario.style.backgroundImage = "url(https://files.idyllic.app/files/static/199758?width=1080&optimizer=image)"
    mostruario.style.backgroundSize = "cover"
    document.body.style.backgroundColor = "gray"
    mostruario.style.transform = "translateX(500px)"

    setTimeout(() => {
        mostruario.style.transform = "translateX(0px)" 
    }, 3000);

    let h1 = document.querySelector('h1')
    h1.style.color = "lightgrey"

}

function hulkbuster(){
    let mostruario = document.getElementById("armaduras")
    mostruario.style.backgroundImage = "url(https://pm1.aminoapps.com/6456/b28a3203b4ad4ec505213dbe46483d67f2a6833c_hq.jpg)"
    mostruario.style.backgroundSize = "cover"
    document.body.style.backgroundColor = "black"

    let h1 = document.querySelector('h1')
    h1.style.color = "darkred"

    mostruario.style.transform = "translateX(500px)"

    setTimeout(() => {
        mostruario.style.transform = "translateX(0px)" 
    }, 3000);
}

function mark34(){
    let mostruario = document.getElementById("armaduras")
    mostruario.style.backgroundImage = "url(https://img.joomcdn.net/20fc110ded01df3d7c331d0cb76c40aba83c710c_original.jpeg)"
    mostruario.style.backgroundSize = "cover"
    document.body.style.backgroundColor = "black" 
    
    let h1 = document.querySelector('h1')
    h1.style.color = "white"

    mostruario.style.transform = "translateX(500px)"

    setTimeout(() => {
        mostruario.style.transform = "translateX(0px)" 
    }, 3000);
}