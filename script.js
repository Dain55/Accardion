let accs = document.querySelectorAll('.acc')

accs.forEach(acc => {
    acc.onclick = () => {
       acc.classList.toggle('active')
    }
})



