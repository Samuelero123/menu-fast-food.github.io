const defaultMenuData = [
  {
    category: "burguer",
    categoryName: "🍔 Burguer's",
    items: [
      { name: "Clásica", price: "COP 12.000", desc: "Pan brioche, carne de res, queso, jamón, ripio de papa, cebolla grille, lechuga y tomate." },
      { name: "Sencilla + Papa", price: "COP 16.000", desc: "Pan brioche, carne de res, queso cheddar, pepinillos, tocineta, salsas de la casa, ripio y vegetales." },
      { name: "Especial", price: "COP 17.000", desc: "Pan brioche, carne de res, queso cheddar, tocineta, pollo desmechado en salsas de la casa, vegetales + papa a la francesa." },
      { name: "Big Burger", price: "COP 20.000", desc: "Pan brioche, 2 carnes de res, 2 jamones ahumados, 2 quesos mozzarella, ripio de papa, vegetales + papa a la francesa." },
      { name: "Mix Burger", price: "COP 20.000", desc: "Pan brioche, 2 carnes de res, pollo desmechado, jamón ahumado, mix de queso, vegetales + papa a la francesa." },
      { name: "Monster Burger", price: "COP 20.000", desc: "Pan brioche, carne de res, queso cheddar, chorizo, pollo desmechado en salsa tártara, madurito dulce, vegetales + papa a la francesa." },
      { name: "La Criolla", price: "Consultar", desc: "Pan brioche, carne de res, tocineta, maíz tierno, carne desmechada, chorizo caramelizado, queso, vegetales y papa a la francesa." }
    ]
  },
  {
    category: "perros",
    categoryName: "🌭 Perro's",
    items: [
      { name: "Sencillo", price: "COP 6.000", desc: "Pan brioche, salchicha, papa fosforito, queso, salsa de la casa." },
      { name: "Americano", price: "COP 10.000", desc: "Pan brioche, salchicha americana, jamón, queso, papa fosforito, salsa de la casa." },
      { name: "Choriperro", price: "COP 15.000", desc: "Pan brioche, chorizo, pollo, queso, maíz tierno, papa fosforito, salsa de la casa." },
      { name: "PerroLoco", price: "COP 16.000", desc: "Pan brioche, salchicha americana envuelta en tocineta, pollo desmechado, queso, huevo de codorniz, papa fosforito, salsa de la casa." }
    ]
  },
  {
    category: "salchipapas",
    categoryName: "🍟 Salchipapa's",
    items: [
      { name: "Sencillo", price: "COP 12.000", desc: "Salchicha, queso, salsa de la casa." },
      { name: "Especial", price: "COP 15.000", desc: "Salchicha, chorizo, pollo desmechado, maíz tierno, queso, salsa de la casa." },
      { name: "Choripapa", price: "COP 17.000", desc: "Chorizo, pollo desmechado, maíz tierno, queso, salsa de la casa." },
      { name: "Americano", price: "COP 18.000", desc: "Salchicha americana, pollo desmechado, huevo de codorniz, maíz tierno, queso, salsa de la casa." }
    ]
  },
  {
    category: "picadas",
    categoryName: "🥩 Picada's",
    items: [
      { name: "Mixta", price: "COP 20.000", desc: "Carne a la plancha, pechuga a la plancha, chorizo, salsa de la casa." },
      { name: "Especial", price: "COP 27.000", desc: "Salchicha, chorizo, pollo desmechado, maíz tierno, alita apanada, salsa de la casa." },
      { name: "La Trifásica", price: "COP 30.000", desc: "Carne a la plancha, pechuga a la plancha, chorizo, salchicha, salsa de la casa." }
    ]
  },
  {
    category: "sandwich",
    categoryName: "🥪 Sandwich's",
    items: [
      { name: "Clásico", price: "COP 10.000", desc: "Pan, jamón, queso, pollo, vegetales, salsa de la casa." },
      { name: "Especial + Papa", price: "COP 16.000", desc: "Pan finas hierbas, jamón, queso, pollo, tocineta, vegetales, salsa de la casa + papa francesa." },
      { name: "El Poporro", price: "COP 18.000", desc: "Pan finas hierbas, jamón, queso, pollo desmechado, carne desmechada, tocineta, vegetales, salsa de la casa + papa francesa." }
    ]
  },
  {
    category: "tacos",
    categoryName: "🌮 Taco's",
    items: [
      { name: "Los Desocupados (2 tacos)", price: "COP 12.000", desc: "Jamón, queso, pollo en salsa tártara, maíz tierno (picante al gusto)." },
      { name: "El Cuate Mix (2 tacos)", price: "COP 13.000", desc: "Jamón, queso, pollo, carne desmechada, maíz tierno (picante al gusto)." },
      { name: "El Cuate (2 tacos)", price: "COP 14.000", desc: "Jamón, queso, carne desmechada, maíz tierno (picante al gusto)." }
    ]
  },
  {
    category: "alitas",
    categoryName: "🍗 Alita's",
    items: [
      { name: "La Desocupada", price: "COP 8.000", desc: "2 alitas apanadas, papa francesa y salsa al gusto." },
      { name: "BBQ X 6 piezas", price: "COP 17.800", desc: "6 piezas de alitas bañadas en salsa BBQ de la casa, papa francesa." },
      { name: "Miel Mostaza x 6 piezas", price: "COP 17.800", desc: "6 piezas de alitas bañadas en salsa miel mostaza de la casa, papa francesa." }
    ]
  },
  {
    category: "adicionales",
    categoryName: "➕ Adicionales",
    items: [
      { name: "Huevo Frito", price: "COP 1.000", desc: "Porción individual." },
      { name: "Huevo de Codorniz (5)", price: "COP 2.000", desc: "5 unidades cocidas." },
      { name: "Chorizo", price: "COP 3.000", desc: "Porción de chorizo asado." },
      { name: "Porción de Papa Francesa", price: "COP 4.000", desc: "Papas a la francesa crocantes." },
      { name: "Porción de Papa Criolla", price: "COP 5.000", desc: "Papas criollas fritas tradicionales." },
      { name: "Porción de Pollo Desmechado", price: "COP 5.000", desc: "Pollo jugoso desmechado." },
      { name: "Porción de Pechuga", price: "COP 6.000", desc: "Filete de pechuga a la plancha." },
      { name: "Porción de Carne", price: "COP 6.000", desc: "Carne a la plancha sazonada." }
    ]
  }
];

const MENU_STORAGE_KEY = 'fastFoodMenu';
const CART_STORAGE_KEY = 'fastFoodCart';
const WHATSAPP_NUMBER = '573204581064';
let menuData = loadMenuData();
let cartItems = loadCart();

function loadCart() {
  try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    return savedCart ? JSON.parse(savedCart) : [];
  } catch {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
}

function itemKey(item) {
  return `${item.name}-${item.price}`;
}

function parsePrice(price) {
  const digits = String(price).replace(/[^0-9]/g, '');
  return digits ? Number(digits) : null;
}

function formatCurrency(value) {
  return `COP ${value.toLocaleString('es-CO')}`;
}

function cartQuantity() {
  return cartItems.reduce((total, item) => total + item.quantity, 0);
}

function addToCart(item) {
  const key = itemKey(item);
  const existingItem = cartItems.find(cartItem => cartItem.key === key);
  if (existingItem) existingItem.quantity += 1;
  else cartItems.push({ key, name: item.name, price: item.price, image: item.image || '', quantity: 1 });
  saveCart();
  renderCart();
}

function changeQuantity(key, change) {
  const item = cartItems.find(cartItem => cartItem.key === key);
  if (!item) return;
  item.quantity += change;
  if (item.quantity <= 0) cartItems = cartItems.filter(cartItem => cartItem.key !== key);
  saveCart();
  renderCart();
}

function removeFromCart(key) {
  cartItems = cartItems.filter(item => item.key !== key);
  saveCart();
  renderCart();
}

function renderCart() {
  const itemsContainer = document.getElementById('cart-items');
  const emptyState = document.getElementById('cart-empty');
  const count = document.getElementById('cart-count');
  const total = document.getElementById('cart-total');
  const orderButton = document.getElementById('cart-order-button');
  if (!itemsContainer || !emptyState || !count || !total || !orderButton) return;

  count.textContent = cartQuantity();
  emptyState.hidden = cartItems.length > 0;
  itemsContainer.innerHTML = cartItems.map(item => {
    const numericPrice = parsePrice(item.price);
    const itemTotal = numericPrice === null ? 'Consultar' : formatCurrency(numericPrice * item.quantity);
    return `
      <article class="cart-item">
        ${item.image ? `<img src="${item.image}" alt="${item.name}">` : '<div class="cart-item-placeholder">🍽️</div>'}
        <div class="cart-item-info">
          <h3>${item.name}</h3>
          <p>${itemTotal}</p>
          <div class="quantity-controls">
            <button type="button" data-cart-decrease="${item.key}" aria-label="Quitar una unidad">−</button>
            <span>${item.quantity}</span>
            <button type="button" data-cart-increase="${item.key}" aria-label="Agregar una unidad">+</button>
          </div>
        </div>
        <button class="cart-item-remove" type="button" data-cart-remove="${item.key}" aria-label="Eliminar ${item.name}">&times;</button>
      </article>
    `;
  }).join('');

  const knownTotal = cartItems.reduce((sum, item) => {
    const numericPrice = parsePrice(item.price);
    return numericPrice === null ? sum : sum + numericPrice * item.quantity;
  }, 0);
  total.textContent = formatCurrency(knownTotal);
  orderButton.disabled = cartItems.length === 0;
}

function openCart() {
  document.getElementById('cart-overlay').classList.add('active');
  document.getElementById('cart-overlay').setAttribute('aria-hidden', 'false');
}

function closeCart() {
  document.getElementById('cart-overlay').classList.remove('active');
  document.getElementById('cart-overlay').setAttribute('aria-hidden', 'true');
}

function loadMenuData() {
  const savedMenu = localStorage.getItem(MENU_STORAGE_KEY);
  return savedMenu ? JSON.parse(savedMenu) : defaultMenuData;
}

function renderMenu(filter = 'all') {
  const container = document.getElementById('menu-container');
  container.innerHTML = '';

  menuData.forEach(cat => {
    if (filter === 'all' || filter === cat.category) {
      const section = document.createElement('section');
      section.innerHTML = `<h2 class="section-title">${cat.categoryName}</h2>`;

      const grid = document.createElement('div');
      grid.className = 'grid';

      cat.items.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        card.onclick = () => {
          addToCart(item);
          openModal(item);
        };
        card.innerHTML = `
          ${item.image ? `<img class="card-image" src="${item.image}" alt="${item.name}">` : ''}
          <div>
            <div class="card-top">
              <div class="card-title">${item.name}</div>
              <div class="card-price">${item.price}</div>
            </div>
            <div class="card-desc">${item.desc}</div>
          </div>
          <div class="card-actions">
            <div class="card-hint">Toca para ver detalle</div>
            <button class="add-to-cart-button" type="button">Agregar al carrito</button>
          </div>
        `;
        card.querySelector('.add-to-cart-button').addEventListener('click', event => {
          event.stopPropagation();
          addToCart(item);
        });
        grid.appendChild(card);
      });

      section.appendChild(grid);
      container.appendChild(section);
    }
  });
}

function filterCategory(catKey) {
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');
  renderMenu(catKey);
}

function openModal(item) {
  const modalLogo = document.getElementById('modal-logo-img');
  const modalFoodImage = document.getElementById('modal-food-image');
  document.getElementById('modal-title').textContent = item.name;
  document.getElementById('modal-price').textContent = item.price;
  document.getElementById('modal-desc').textContent = item.desc;
  modalLogo.src = 'assets/images/logo1.png';
  modalFoodImage.src = item.image || '';
  modalFoodImage.hidden = !item.image;
  document.getElementById('modal-add-button').onclick = () => addToCart(item);
  document.getElementById('modal').classList.add('active');
}

function closeModal() {
  document.getElementById('modal').classList.remove('active');
}

document.getElementById('cart-toggle')?.addEventListener('click', openCart);
document.getElementById('cart-close')?.addEventListener('click', closeCart);
document.getElementById('cart-overlay')?.addEventListener('click', event => {
  if (event.target.id === 'cart-overlay') closeCart();
});
document.getElementById('cart-items')?.addEventListener('click', event => {
  const increaseKey = event.target.dataset.cartIncrease;
  const decreaseKey = event.target.dataset.cartDecrease;
  const removeKey = event.target.dataset.cartRemove;
  if (increaseKey) changeQuantity(increaseKey, 1);
  if (decreaseKey) changeQuantity(decreaseKey, -1);
  if (removeKey) removeFromCart(removeKey);
});
document.getElementById('cart-order-button')?.addEventListener('click', () => {
  if (!cartItems.length) return;

  const orderLines = cartItems.map(item => {
    const numericPrice = parsePrice(item.price);
    const itemTotal = numericPrice === null ? 'Consultar' : formatCurrency(numericPrice * item.quantity);
    return `- ${item.quantity} x ${item.name}: ${itemTotal}`;
  });
  const knownTotal = cartItems.reduce((sum, item) => {
    const numericPrice = parsePrice(item.price);
    return numericPrice === null ? sum : sum + numericPrice * item.quantity;
  }, 0);
  const message = [
    'Hola, quiero realizar este pedido:',
    '',
    ...orderLines,
    '',
    `Total estimado: ${formatCurrency(knownTotal)}`
  ].join('\n');
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
});

function removeImageBackgrounds() {
  document.querySelectorAll('.background-foods img').forEach(image => {
    image.onload = () => {
      image.onload = null;
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      context.drawImage(image, 0, 0);

      const pixels = context.getImageData(0, 0, canvas.width, canvas.height);
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index];
        const green = pixels.data[index + 1];
        const blue = pixels.data[index + 2];
        const whiteness = Math.min(red, green, blue);
        if (whiteness > 225) {
          pixels.data[index + 3] = Math.max(0, 255 - (whiteness - 225) * 8);
        }
      }

      context.putImageData(pixels, 0, 0);
      image.src = canvas.toDataURL('image/png');
    };
    if (image.complete) image.onload();
  });
}

if (document.getElementById('menu-container')) {
  removeImageBackgrounds();
  renderMenu();
  renderCart();
}
