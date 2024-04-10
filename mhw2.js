function aggiungiBordoBianco(event){ 
    event.target.classList.add('bordo-bianco');
}
function rimuoviBordoBianco(event){
    event.target.classList.remove('bordo-bianco');
}
function aggiungiBordoArancione(){ 
    const searchAll = document.querySelector('#nav-search-all');
    searchAll.classList.add('bordo-arancione');
    const overlay = document.querySelector('#page-overlay');
    overlay.classList.remove('hidden');
}
function rimuoviBordoArancione(){
    const searchAll = document.querySelector('#nav-search-all');
    searchAll.classList.remove('bordo-arancione');
    const overlay = document.querySelector('#page-overlay');
    overlay.classList.add('hidden');
}
function aggiornaVisibilitaElementi(){
    const items = document.querySelectorAll('#nav-bottom .nav-center a');
    let larghezzaTotale = 80;
    const larghezzaView = window.innerWidth;
    let elementiDaNascondere = []; 

    for(const item of items){
        const itemWidth = item.offsetWidth; //include così anche padding e bordi
        larghezzaTotale += itemWidth;

        if(larghezzaTotale > larghezzaView){
            elementiDaNascondere.push(item);  
        }
    }
    for(const item of items){
        if(elementiDaNascondere.includes(item)){
            if(!item.classList.contains('hidden')){
                item.classList.add('hidden');
            }
        }
        else{
            if(item.classList.contains('hidden')){
                item.classList.remove('hidden');
            }
        }
    }
}
function mostraMenuTutte(event){
    event.preventDefault();
    const overlayMenu = document.querySelector('#dropdown-menu');
    overlayMenu.classList.remove('hidden');
}
function nascondiMenuTutte(){
    const overlayMenu = document.querySelector('#dropdown-menu');
    overlayMenu.classList.add('hidden');
}
function cambioDropdownHidden(event){
    event.preventDefault();
    
    const button = event.target.closest('.dropdown-button');
    const hiddenSection = button.previousElementSibling;

    const mostraMeno = button.querySelector('.mostra-meno');
    const mostraTutto = button.querySelector('.mostra-tutto');

    if(hiddenSection.classList.contains('hidden')){
        hiddenSection.classList.remove('hidden');
        mostraMeno.classList.remove('hidden');
        const img = button.querySelector('.dropdown-sprite-2');
        img.classList.add('flip-img');
        mostraTutto.classList.add('hidden');
    }else{
        hiddenSection.classList.add('hidden');
        mostraMeno.classList.add('hidden');
        const img = button.querySelector('.dropdown-sprite-2');
        img.classList.add('flip-img');
        mostraTutto.classList.remove('hidden');
    }
}

//da rivedere sotto non funzionano
function mostraHiddenPrime(){
    const hiddenLayer = document.querySelector('#prime-flyout-container');
    if(hiddenLayer.classList.contains('hidden')){
    hiddenLayer.classList.remove('hidden');
    }
    isMouseOverPrime=true;
}
function esciPrime(){
    isMouseOverPrime=false;

    setTimeout(nascondiHiddenPrime, 10);
}
function entraHiddenPrime(){
    isMouseOverHiddenPrime=true;
}
function nascondiHiddenPrime(){
    const hiddenLayer = document.querySelector('#prime-flyout-container');
    isMouseOverHiddenPrime=false;

    if(!isMouseOverHiddenPrime && !isMouseOverPrime){
        if(!hiddenLayer.classList.contains('hidden')){
            hiddenLayer.classList.add('hidden');
        }
    }
}





aggiornaVisibilitaElementi();
window.addEventListener('resize', aggiornaVisibilitaElementi);

const boxes = document.querySelectorAll('.nav-center a, .nav-left a, .nav-right a');
for(const box of boxes){
    box.addEventListener('mouseenter',aggiungiBordoBianco);
    box.addEventListener('mouseleave',rimuoviBordoBianco);
}

const searchBox = document.querySelector('#nav-search-box');
searchBox.addEventListener('focus', aggiungiBordoArancione);
searchBox.addEventListener('blur', rimuoviBordoArancione);

const tutte = document.querySelector('#nav-tutte');
tutte.addEventListener('click', mostraMenuTutte);
const esciTutte = document.querySelector('#page-overlay-menu');
esciTutte.addEventListener('click', nascondiMenuTutte);

const dropdownButtons = document.querySelectorAll('.dropdown-button');
for(const button of dropdownButtons){
    button.addEventListener('click', cambioDropdownHidden);
}


let isMouseOverPrime = false;
let isMouseOverHiddenPrime = false;
const prime = document.querySelector('#prime-hidden-layer');
prime.addEventListener('mouseenter', mostraHiddenPrime);
prime.addEventListener('mouseleave', esciPrime);
const hiddenLayer = document.querySelector('#prime-flyout-container');
primeHidden.addEventListener('mouseenter', entraHiddenPrime);
primeHidden.addEventListener('mouseleave', nascondiHiddenPrime);




