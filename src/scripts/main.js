const tree = document.querySelector('.tree');

// Знаходимо всі пункти, що мають підпункти
const itemsWithChildren = tree.querySelectorAll('li:has(> ul)');

// Для кожного такого пункту:
itemsWithChildren.forEach((item) => {
  // 1. Обгортаємо текст в span
  const span = document.createElement('span');

  span.textContent = item.firstChild.textContent.trim();
  item.firstChild.replaceWith(span);

  // 2. Ховаємо підпункти
  const subList = item.querySelector('ul');

  subList.classList.add('hidden');
});

// Обробляємо кліки
tree.addEventListener('click', (e) => {
  // Перевіряємо, чи клікнули на span
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  // Знаходимо підпункти
  const subList = e.target.nextElementSibling;

  // Якщо вони є — розгортаємо/згортаємо
  if (subList) {
    subList.classList.toggle('hidden');
  }
});
