
/*  CARRITO */

let minusBtn = document.querySelector(".input__minus");
    let plusBtn = document.querySelector(".input__plus");
    let userInput = document.querySelector(".input__number");

    let userInputNumber = 0;

    const addToCartBtn = document.querySelector('.input__button'),
        bagIconBtn = document.querySelector('.header__cart'),
        cartModal = document.querySelector('.cart-modal');
    let cartNotification = document.querySelector('.header__cart--notification');
    let lastValue = parseInt(cartNotification.innerText);
    let priceModal = document.querySelector('.cart-modal__price');

function carrito() {

    /* let minusBtn = document.querySelector(".input__minus");
    let plusBtn = document.querySelector(".input__plus");
    let userInput = document.querySelector(".input__number");

    let userInputNumber = 0;

    const addToCartBtn = document.querySelector('.input__button'),
        bagIconBtn = document.querySelector('.header__cart'),
        cartModal = document.querySelector('.cart-modal');
    let cartNotification = document.querySelector('.header__cart--notification');
    let lastValue = parseInt(cartNotification.innerText);
    let priceModal = document.querySelector('.cart-modal__price'); */

    plusBtn.addEventListener("click", () => {
        userInputNumber++;
        userInput.value = userInputNumber
    
    });
    
    minusBtn.addEventListener("click", () => {
        userInputNumber--;
        if (userInputNumber <= 0) {
            userInputNumber = 0;
        }
        userInput.value = userInputNumber
    
    });

    addToCartBtn.addEventListener('click', () => {

        lastValue = lastValue + userInputNumber;

        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'block';
        priceModal.innerHTML = `$57.000 x${lastValue} <span>$${lastValue * 57}.000</span>`

        bagIconBtn.addEventListener('click', () => {
            cartModal.classList.toggle('show');
            priceModal.innerHTML = `$57.000 x${lastValue} <span>$${lastValue * 57}.000</span>`
        });




    });
}

carrito()




/* MENU HAMBURGESA */

function menuHamburgesa() {

    let menuIcon = document.querySelector('.header__menu');
    let closeIcon = document.querySelector('.modal-navbar__close-icon');
    let modalNavbar = document.querySelector('.modal-navbar__background');

    menuIcon.addEventListener('click', () => {
        modalNavbar.style.display = 'block';
    });

    closeIcon.addEventListener('click', () => {
        modalNavbar.style.display = 'none';
    });
}

menuHamburgesa()
