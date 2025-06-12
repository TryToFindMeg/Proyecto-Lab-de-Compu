// Base de datos de productos
const products = {
    'van-gogh': {
        name: 'Vincent van Gogh',
        museum: 'Metropolitan Museum of Art',
        items: {
            'poster': { name: 'Póster "La Noche Estrellada"', price: 15.99, description: 'Reproducción de alta calidad de la obra maestra de Van Gogh en papel premium.' },
            'mug': { name: 'Taza "Girasoles"', price: 12.50, description: 'Taza de cerámica con el famoso diseño de los girasoles de Van Gogh.' },
            'tshirt': { name: 'Camiseta "Autorretrato"', price: 24.99, description: 'Camiseta 100% algodón con el autorretrato de Van Gogh.' },
            'notebook': { name: 'Libreta "Campo de Trigo"', price: 9.99, description: 'Libreta con tapa dura ilustrada con paisajes de Van Gogh.' },
            'magnet': { name: 'Imán "La Noche Estrellada"', price: 4.99, description: 'Imán de nevera con el icónico cielo estrellado de Van Gogh.' }
        }
    },
    'monet': {
        name: 'Claude Monet',
        museum: 'Louvre',
        items: {
            'poster': { name: 'Póster "Nenúfares"', price: 16.99, description: 'Impresión de los famosos nenúfares de Monet en papel de museo.' },
            'mug': { name: 'Taza "Catedral de Rouen"', price: 13.50, description: 'Taza elegante con la serie de la catedral de Rouen.' },
            'tshirt': { name: 'Camiseta "Impresión: Sol Naciente"', price: 26.99, description: 'Camiseta premium con la obra que dio nombre al impresionismo.' },
            'notebook': { name: 'Libreta "Jardín de Giverny"', price: 11.99, description: 'Libreta inspirada en el jardín personal de Monet.' },
            'magnet': { name: 'Imán "Nenúfares"', price: 5.99, description: 'Imán decorativo con los delicados nenúfares de Monet.' }
        }
    },
    'picasso': {
        name: 'Pablo Picasso',
        museum: 'Louvre',
        items: {
            'poster': { name: 'Póster "Las Señoritas de Avignon"', price: 18.99, description: 'Reproducción de la revolucionaria obra cubista de Picasso.' },
            'mug': { name: 'Taza "Guernica"', price: 14.99, description: 'Taza conmemorativa con el poderoso mensaje de Guernica.' },
            'tshirt': { name: 'Camiseta "Período Azul"', price: 27.99, description: 'Camiseta artística del famoso período azul de Picasso.' },
            'notebook': { name: 'Libreta "Cubismo"', price: 12.99, description: 'Libreta con diseños geométricos inspirados en el cubismo.' },
            'magnet': { name: 'Imán "Paloma de la Paz"', price: 5.49, description: 'Imán con el símbolo de paz más famoso de Picasso.' }
        }
    },
    'da-vinci': {
        name: 'Leonardo da Vinci',
        museum: 'Louvre',
        items: {
            'poster': { name: 'Póster "La Mona Lisa"', price: 19.99, description: 'La sonrisa más famosa del mundo en una reproducción de lujo.' },
            'mug': { name: 'Taza "La Última Cena"', price: 15.99, description: 'Taza con el fresco más conocido de Da Vinci.' },
            'tshirt': { name: 'Camiseta "Hombre de Vitruvio"', price: 25.99, description: 'Camiseta con el icónico dibujo de las proporciones humanas.' },
            'notebook': { name: 'Libreta "Códice Leicester"', price: 13.99, description: 'Libreta inspirada en los manuscritos científicos de Leonardo.' },
            'magnet': { name: 'Imán "Mona Lisa"', price: 6.99, description: 'La enigmática sonrisa de la Gioconda en formato imán.' }
        }
    },
    'hokusai': {
        name: 'Katsushika Hokusai',
        museum: 'British Museum',
        items: {
            'poster': { name: 'Póster "La Gran Ola"', price: 17.99, description: 'La icónica ola japonesa en una impresión de alta calidad.' },
            'mug': { name: 'Taza "36 Vistas del Monte Fuji"', price: 13.99, description: 'Taza con paisajes japoneses tradicionales de Hokusai.' },
            'tshirt': { name: 'Camiseta "Arte Ukiyo-e"', price: 24.99, description: 'Camiseta con el estilo tradicional japonés del mundo flotante.' },
            'notebook': { name: 'Libreta "Paisajes de Japón"', price: 10.99, description: 'Libreta decorada con hermosos paisajes nipones.' },
            'magnet': { name: 'Imán "La Gran Ola"', price: 4.99, description: 'La ola más famosa del arte japonés en tu nevera.' }
        }
    }
};

// Función para generar URL de imagen placeholder
function getImageUrl(artist, product) {
    const colors = ['8c5e3c', 'b3936d', 'e0dcd1'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const artistName = products[artist].name.replace(/\s+/g, '+');
    const productName = products[artist].items[product].name.replace(/\s+/g, '+');
    return `https://via.placeholder.com/400x300/${color}/ffffff?text=${artistName}+${productName}`;
}

// Variables globales
let cart = [];
let cartTotal = 0;

// Referencias a elementos DOM
const artistSelect = document.getElementById('artist-select');
const productSelect = document.getElementById('product-select');
const productImg = document.getElementById('product-img');
const placeholderImage = document.getElementById('placeholder-image');
const productName = document.getElementById('product-name');
const productDescription = document.getElementById('product-description');
const productPrice = document.getElementById('product-price');
const addToCartBtn = document.getElementById('add-to-cart');
const cartItems = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Event listeners
artistSelect.addEventListener('change', updateProductDisplay);
productSelect.addEventListener('change', updateProductDisplay);
addToCartBtn.addEventListener('click', addToCart);
checkoutBtn.addEventListener('click', checkout);

// Función para actualizar la visualización del producto
function updateProductDisplay() {
    const selectedArtist = artistSelect.value;
    const selectedProduct = productSelect.value;
    
    if (selectedArtist && selectedProduct) {
        const product = products[selectedArtist].items[selectedProduct];
        const artist = products[selectedArtist];
        
        // Mostrar imagen
        placeholderImage.style.display = 'none';
        productImg.style.display = 'block';
        productImg.src = getImageUrl(selectedArtist, selectedProduct);
        productImg.alt = product.name;
        
        // Actualizar información del producto
        productName.textContent = product.name;
        productDescription.textContent = `${product.description} (${artist.museum})`;
        productPrice.textContent = `€${product.price.toFixed(2)}`;
        
        // Habilitar botón
        addToCartBtn.disabled = false;
    } else {
        // Ocultar imagen y mostrar placeholder
        placeholderImage.style.display = 'flex';
        productImg.style.display = 'none';
        
        // Resetear información
        productName.textContent = 'Nombre del producto';
        productDescription.textContent = 'Descripción del producto aparecerá aquí';
        productPrice.textContent = '€0.00';
        
        // Deshabilitar botón
        addToCartBtn.disabled = true;
    }
}

// Función para añadir al carrito
function addToCart() {
    const selectedArtist = artistSelect.value;
    const selectedProduct = productSelect.value;
    
    if (selectedArtist && selectedProduct) {
        const product = products[selectedArtist].items[selectedProduct];
        const artist = products[selectedArtist];
        
        const cartItem = {
            id: Date.now(), // ID único
            artistId: selectedArtist,
            productId: selectedProduct,
            name: product.name,
            artist: artist.name,
            museum: artist.museum,
            price: product.price,
            image: getImageUrl(selectedArtist, selectedProduct)
        };
        
        cart.push(cartItem);
        updateCartDisplay();
        
        // Feedback visual
        addToCartBtn.textContent = '¡Añadido!';
        setTimeout(() => {
            addToCartBtn.textContent = 'Añadir al carrito';
        }, 1000);
    }
}

// Función para actualizar la visualización del carrito
function updateCartDisplay() {
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-cart">Tu carrito está vacío</p>';
        cartTotal = 0;
        checkoutBtn.disabled = true;
    } else {
        cartItems.innerHTML = '';
        cartTotal = 0;
        
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-details">por ${item.artist} - ${item.museum}</div>
                </div>
                <div class="cart-item-price">€${item.price.toFixed(2)}</div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">Eliminar</button>
            `;
            cartItems.appendChild(cartItemElement);
            cartTotal += item.price;
        });
        
        checkoutBtn.disabled = false;
    }
    
    cartTotalElement.textContent = `€${cartTotal.toFixed(2)}`;
}

// Función para eliminar del carrito
function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartDisplay();
}

// Función de checkout
function checkout() {
    if (cart.length > 0) {
        alert(`¡Gracias por tu compra! Total: €${cartTotal.toFixed(2)}\n\nProductos:\n${cart.map(item => `- ${item.name} (€${item.price.toFixed(2)})`).join('\n')}`);
        cart = [];
        updateCartDisplay();
        
        // Reset selecciones
        artistSelect.value = '';
        productSelect.value = '';
        updateProductDisplay();
    }
}

// Inicializar la aplicación
document.addEventListener('DOMContentLoaded', function() {
    updateProductDisplay();
    updateCartDisplay();
});