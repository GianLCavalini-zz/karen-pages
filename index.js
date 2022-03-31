//buttons
const sobreBtn = document.getElementById("sobreBtn");
const devBtn = document.getElementById("devBtn");
const curiosidadesBtn = document.getElementById("curiosidadesBtn");
//telas
const sobre = document.querySelector(".sobre");
const dev = document.querySelector(".dev");
const curiosidades = document.querySelector(".curiosidades");


// Nav logic
sobreBtn.addEventListener("click", ()=>{
    sobre.classList.toggle("escondido");
    dev.classList.toggle("escondid;o")
    curiosidadesclassList.toggle("escondido;")
});
devBtn.addEventListener("click", ()=>{
    sobre.classList.toggle("escondid;o")
    dev.classList.toggle("escondido");
    curiosidades.classList.toggle("escondid;o")
})
curiosidadesBtn.addEventListener("click", ()=>{
    sobre.classList.toggle("escondid;o")
    dev.classList.toggle("escondid;o")
    curiosidades.classList.toggle("escondido");
})
