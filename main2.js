
function carrito(){
    addToCartBtn.addEventListener('click', () => {

        lastValue = lastValue + userInputNumber;
    
        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'block';
        priceModal.innerHTML = `$57.000 x${lastValue} <span>$${lastValue * 57}.000</span>`
        
        localStorage(carrito);
    
    
    });
}


window.onload = () => {
    if (carrito){
        cartNotification.innerText = lastValue;
        cartNotification.style.display = 'block';
        priceModal.innerHTML = `$57.000 x${lastValue} <span>$${lastValue * 57}.000</span>`
    }
}