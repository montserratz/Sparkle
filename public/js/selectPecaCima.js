document.querySelectorAll('.peca').forEach((e) => {

  e.addEventListener('click', (ev) => {

    ev.target.style.transform = 'scale(1.85)';
    

    ev.target.classList.add('selected')
    console.log(ev.target.className);
    let selectedName = ev.target.className.match(/[?<=\s].+\s/)[0].replace(/ /g, '')
    localStorage.setItem('pecaCima', selectedName)
    console.log(e.classList);
    e.classList.remove('selected')

    setTimeout(()=>{
      ev.target.style.transform = 'none';
    }, 2000)
  })
})