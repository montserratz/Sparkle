// Peça de cima
document.querySelectorAll('.peca-cima').forEach((e) => {

  e.addEventListener('click', (ev) => {
    const parteCima = document.querySelector('input[name="parte_cima"]')
    ev.target.classList.add('selected')
    console.log(ev.target.className);
    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')
    console.log("🚀 ~ file: update.js:9 ~ e.addEventListener ~ selectedName:", selectedName)


    localStorage.setItem('pecaCima', selectedName)
    parteCima.value = localStorage.getItem('pecaCima')
    e.classList.remove('selected')
  })
})

// Peça de baixo
document.querySelectorAll('.peca-baixo').forEach((e) => {
  const parteBaixo = document.querySelector('input[name="parte_baixo"]')
  e.addEventListener('click', (ev) => {

    ev.target.classList.add('selected')

    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')
    console.log(selectedName)

    localStorage.setItem('pecaBaixo', selectedName)
    parteBaixo.value = localStorage.getItem('pecaBaixo')
    e.classList.remove('selected')
  })
})
// Calçado
document.querySelectorAll('.calssado').forEach((e) => {

  e.addEventListener('click', (ev) => {
    const calcado = document.querySelector('input[name="calcado"]')

    ev.target.classList.add('selected')

    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')
    console.log("🚀 ~ file: selectCalcado.js:8 ~ e.addEventListener ~ selectedName:", selectedName)

    localStorage.setItem('calcado', selectedName)
    calcado.value = localStorage.getItem('calcado')
    e.classList.remove('selected')
  })
})

// Acessório
document.querySelectorAll('.acessorio').forEach((e) => {
  const acessorio = document.querySelector('input[name="acessorio"]')

  e.addEventListener('click', (ev) => {

    ev.target.classList.add('selected')

    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')
    console.log("🚀 ~ file: update.js:60 ~ e.addEventListener ~ selectedName:", selectedName)

    localStorage.setItem('acessorio', selectedName)
    acessorio.value = localStorage.getItem('acessorio')
    e.classList.remove('selected')
  })
})