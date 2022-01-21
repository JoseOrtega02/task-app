const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const span = document.getElementById('span');

const input = document.getElementById('name');
const btn = document.getElementById('btnPlus')
const container = document.getElementById('container')
const navbarUl = document.getElementById('navbarUl')
// functions
function hide(e){
    navbar.toggleAttribute('hidden'); 
    
}
function rotation(){
    if(span.style.transform === 'rotate(180deg)'){
        span.style.transform = "rotate(0deg)"
        hamburger.style.color = "#aefeff"
        span.style.animationName = "unrotate"
        
        return;
    }else{
        span.style.animationName = "rotate"
        hamburger.style.color = "#072227"
        span.style.transform = "rotate(180deg)"
        
    }
}

function plusBox(){
    let nameVal = input.value
    let box = `
    <div class="container__box" id="box">
                <img src="">
                <div class="container__box--animation">
                    <h3 class="container__box__title">${nameVal}</h3>
                </div>
            </div>
    `
    container.innerHTML += box
}

function showtasks(){
    // buscar todas las tareas
    let boxes = document.getElementsByClassName("container__box__title")
    console.log(boxes)
    // mostrarlas 
    
    for (var i = boxes.length - 1; i >= 0; i--) {
        let boxVal = boxes[i].innerText
        let items = `<li><a href="#">${boxVal}</a></li>`
        navbarUl.innerHTML += items
    };
}

// event listeners for hamburger
btn.addEventListener("click",()=>{
    plusBox()
    showtasks()
})

hamburger.addEventListener('click',()=>{
   hide()
   rotation()
})