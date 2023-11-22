const parteCima = document.querySelector('input[name="parte_cima"]')
const parteBaixo = document.querySelector('input[name="parte_baixo"]')
const calcado = document.querySelector('input[name="calcado"]')
const acessorio = document.querySelector('input[name="acessorio"]')

parteCima.value = localStorage.getItem('pecaCima')
parteBaixo.value = localStorage.getItem('pecaBaixo')
calcado.value = localStorage.getItem('calcado')
acessorio.value = localStorage.getItem('acessorio')



// change imgs

let imgCima = document.getElementById("id_imgCima").value
let imgBaixo = document.getElementById("id_imgBaixo").value
let imgCalcado = document.getElementById("id_imgCalcado").value
let imgAcessorio = document.getElementById("id_imgAcessorio").value


if(imgCima){
    imageup1.src = `/img/pt-cima/${imgCima}.png`
  }

  if(imgBaixo){
    imageup2.src = `/img/pt-baixo/${imgBaixo}.png`
  }

  if(imgCalcado){
    imageup3.src = `/img/calssado/${imgCalcado}.png`
  }

  if(imgAcessorio){
    imageup4.src = `/img/acessorio/${imgAcessorio}.png`
  }
