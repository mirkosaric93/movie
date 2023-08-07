let totalAll = 0;
function pokreniFilm(movie){
    let mainEl = movie.closest('.container');
    let lastPar = mainEl.querySelector('.text');
    let price = lastPar.querySelector('.cena b').innerText;
    price = parseInt(price);
    
    let total = document.querySelector('#totalspent');
    let racunanjeTotal = totalAll += price;
    total.innerText = racunanjeTotal + '$';

    movie.innerText = 'Watched';
    movie.setAttribute('disabled', 'true')
}
function posebanFilm(element){
    let littleMain = element.closest('.zaseban-film');
    let prePrice = littleMain.querySelector('.cena');
    let price = prePrice.querySelector('b').innerText;
    price = parseInt(price);

    let total = document.querySelector('#totalspent');
    let racunanjeTotal = totalAll += price;
    total.innerText = racunanjeTotal + '$';

    element.innerText = 'Watched';
    element.setAttribute('disabled', 'true');
}
function pokreniFreeFilm(free){
    free.innerText = 'Watched';
    free.setAttribute('disabled', 'disable')
}

// ispod ovog se radi modal window za registraciju

let modal = document.querySelector('#myModal');
let btn = document.querySelector('#login');
let span = document.querySelector('.close');

btn.addEventListener('click', function(){
    modal.style.display = 'block';
});
span.addEventListener('click', function(){
    modal.style.display = 'none';
});
window.addEventListener('click', function(event){
    if(event.target == modal){
        modal.style.display = 'none';
    }
});