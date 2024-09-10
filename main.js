let lista = document.querySelectorAll(".item")
let antes = document.querySelector(".prev")
let proximo = document.querySelector(".next")

let count = lista.lenght
let active = 0

proximo.onclick = () => {
    let anterior = document.querySelector(".show")

    if(active < 2){
        anterior.classList.remove("show")
        active = active + 1
        console.log(lista[active])
        lista[active].classList.add("show")
    }else{
        anterior.classList.remove("show")
        active = 0
        lista[active].classList.add("show")
    }
}

antes.onclick = () => {
    let anterior = document.querySelector(".show")
    
    if(active < 2){
        anterior.classList.remove("show")
        active = active + 1
        console.log(lista[active])
        lista[active].classList.add("show")
    }else{
        anterior.classList.remove("show")
        active = 0
        lista[active].classList.add("show")
    }

}