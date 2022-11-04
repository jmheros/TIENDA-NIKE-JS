const items = document.getElementById('zapatillas')
const templateCard = document.getElementById('cartas').content
const fragment = document.createDocumentFragment();

document.addEventListener('DOMContentLoaded', () => {
    fetchdata()
})



const fetchdata = async () => {
    try {
        const res = await fetch('data.json')
        const data = await res.json()
        drawProduct(data)
    } catch (error) {
        console.log(error)
    }
}

const drawProduct = data => {
    data.forEach(producto => {
        templateCard.querySelector('h2').textContent = producto.nombre
        templateCard.querySelector('h3').textContent = producto.genero
        templateCard.querySelector('h4').textContent = producto.color
        templateCard.querySelector('p').textContent = producto.precio
        templateCard.querySelector('img').setAttribute("src", producto.imagen)
        templateCard.querySelector('.cart-modal__Checkout').dataset.id = producto.id




        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });
    items.appendChild(fragment)
}


