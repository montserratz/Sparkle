document.querySelectorAll('.peca').forEach((e) => {

  e.addEventListener('click', (ev) => {

    ev.target.classList.add('selected')
    // console.log(ev.target.className);
    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')


    localStorage.setItem('calcado', selectedName)
    e.classList.remove('selected')
  })
})