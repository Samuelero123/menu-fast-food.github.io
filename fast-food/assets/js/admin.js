const loginPanel = document.getElementById('login-panel');
const adminPanel = document.getElementById('admin-panel');
const loginForm = document.getElementById('login-form');
const loginMessage = document.getElementById('login-message');
const foodForm = document.getElementById('food-form');
const foodCategory = document.getElementById('food-category');
const foodImage = document.getElementById('food-image');
const adminList = document.getElementById('admin-list');
const foodCount = document.getElementById('food-count');
const formMessage = document.getElementById('form-message');
const editingIndex = document.getElementById('editing-index');
const formTitle = document.getElementById('form-title');
const cancelEdit = document.getElementById('cancel-edit');
let selectedImage = '';

async function checkAdminSession() {
  try {
    const response = await fetch('backend/admin-check.php', { method: 'GET' });
    if (!response.ok) {
      loginPanel.hidden = false;
      adminPanel.hidden = true;
      return;
    }

    loginPanel.hidden = true;
    adminPanel.hidden = false;
  } catch {
    loginPanel.hidden = false;
    adminPanel.hidden = true;
  }
}

const categories = [
  { value: 'burguer', label: "🍔 Burguer's" },
  { value: 'perros', label: "🌭 Perro's" },
  { value: 'salchipapas', label: "🍟 Salchipapa's" },
  { value: 'picadas', label: "🥩 Picada's" },
  { value: 'sandwich', label: "🥪 Sandwich's" },
  { value: 'tacos', label: "🌮 Taco's" },
  { value: 'alitas', label: "🍗 Alita's" },
  { value: 'adicionales', label: '➕ Adicionales' }
];

function saveMenu() {
  localStorage.setItem(MENU_STORAGE_KEY, JSON.stringify(menuData));
}

function populateCategories() {
  foodCategory.innerHTML = categories.map(category =>
    `<option value="${category.value}">${category.label}</option>`
  ).join('');
}

function allFoodItems() {
  return menuData.flatMap((category, categoryIndex) =>
    category.items.map((item, itemIndex) => ({ item, categoryIndex, itemIndex }))
  );
}

function renderAdminList() {
  const foods = allFoodItems();
  foodCount.textContent = `${foods.length} comidas`;
  adminList.innerHTML = foods.map(({ item, categoryIndex, itemIndex }) => `
    <article>
      ${item.image ? `<img class="food-thumb" src="${item.image}" alt="${item.name}">` : '<div class="food-thumb"></div>'}
      <div class="food-item-info">
        <h3>${item.name}</h3>
        <p>${item.price} · ${menuData[categoryIndex].categoryName}</p>
      </div>
      <div class="food-item-actions">
        <button class="secondary-button" type="button" data-edit="${categoryIndex}-${itemIndex}">Editar</button>
        <button class="secondary-button delete-button" type="button" data-delete="${categoryIndex}-${itemIndex}">Eliminar</button>
      </div>
    </article>
  `).join('');
}

function resetFoodForm() {
  foodForm.reset();
  editingIndex.value = '';
  selectedImage = '';
  formTitle.textContent = 'Agregar comida';
  cancelEdit.hidden = true;
  formMessage.textContent = '';
}

function startEditing(categoryIndex, itemIndex) {
  const item = menuData[categoryIndex].items[itemIndex];
  editingIndex.value = `${categoryIndex}-${itemIndex}`;
  document.getElementById('food-name').value = item.name;
  document.getElementById('food-price').value = item.price;
  document.getElementById('food-category').value = menuData[categoryIndex].category;
  document.getElementById('food-desc').value = item.desc;
  selectedImage = item.image || '';
  formTitle.textContent = `Editar: ${item.name}`;
  cancelEdit.hidden = false;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function deleteFood(categoryIndex, itemIndex) {
  const item = menuData[categoryIndex].items[itemIndex];
  if (!window.confirm(`¿Eliminar ${item.name}?`)) return;
  menuData[categoryIndex].items.splice(itemIndex, 1);
  saveMenu();
  renderAdminList();
  resetFoodForm();
}

loginForm.addEventListener('submit', async event => {
  event.preventDefault();
  const password = document.getElementById('admin-password').value;

  try {
    const response = await fetch('backend/login.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password })
    });

    const result = await response.json();
    if (!response.ok) {
      loginMessage.textContent = result.message || 'Contraseña incorrecta.';
      loginMessage.className = 'form-message error';
      return;
    }

    loginMessage.textContent = '';
    loginPanel.hidden = true;
    adminPanel.hidden = false;
  } catch {
    loginMessage.textContent = 'No se pudo conectar con el servidor.';
    loginMessage.className = 'form-message error';
  }
});

document.getElementById('logout-button').addEventListener('click', async () => {
  await fetch('backend/logout.php', { method: 'POST' });
  window.location.reload();
});

foodImage.addEventListener('change', () => {
  const file = foodImage.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => { selectedImage = reader.result; });
  reader.readAsDataURL(file);
});

foodForm.addEventListener('submit', event => {
  event.preventDefault();
  const category = foodCategory.value;
  const categoryData = menuData.find(menuCategory => menuCategory.category === category);
  const item = {
    name: document.getElementById('food-name').value.trim(),
    price: document.getElementById('food-price').value.trim(),
    desc: document.getElementById('food-desc').value.trim()
  };
  if (selectedImage) item.image = selectedImage;

  if (editingIndex.value) {
    const [categoryIndex, itemIndex] = editingIndex.value.split('-').map(Number);
    const oldItem = menuData[categoryIndex].items[itemIndex];
    menuData[categoryIndex].items[itemIndex] = { ...oldItem, ...item };
    if (category !== menuData[categoryIndex].category) {
      categoryData.items.push(menuData[categoryIndex].items.splice(itemIndex, 1)[0]);
    }
  } else {
    categoryData.items.push(item);
  }

  saveMenu();
  renderAdminList();
  resetFoodForm();
  formMessage.textContent = 'Menú guardado correctamente.';
  formMessage.className = 'form-message success';
});

cancelEdit.addEventListener('click', resetFoodForm);

adminList.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  const [categoryIndex, itemIndex] = button.dataset.edit?.split('-').map(Number) || button.dataset.delete?.split('-').map(Number);
  if (button.dataset.edit) startEditing(categoryIndex, itemIndex);
  if (button.dataset.delete) deleteFood(categoryIndex, itemIndex);
});

checkAdminSession();
populateCategories();
renderAdminList();
