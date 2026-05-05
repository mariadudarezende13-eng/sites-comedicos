
const icones = document.querySelectorAll(".area-selecao .img");

const cartas = document.querySelectorAll(".area-carta");
console.log(cartas)

icones.forEach(function (icone, indice) {

   
    icone.addEventListener("click", function () {

        cartas.forEach(function (carta) {

            
            carta.classList.remove("visible")
        })

        
        cartas[indice].classList.add("visible")
    })

})

