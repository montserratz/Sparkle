const parteCima = document.querySelector('input[name="parte_cima"]')
const parteBaixo = document.querySelector('input[name="parte_baixo"]')
const calcado = document.querySelector('input[name="calcado"]')
const acessorio = document.querySelector('input[name="acessorio"]')

parteCima.value = localStorage.getItem('pecaCima')
parteBaixo.value = localStorage.getItem('pecaBaixo')
calcado.value = localStorage.getItem('calcado')
acessorio.value = localStorage.getItem('acessorio')
