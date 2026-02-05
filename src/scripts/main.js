'use strict';

const tree = document.querySelector('.tree');

// li, які мають вкладений ul
const liItems = tree.querySelectorAll('li:has(> ul)');

liItems.forEach((li) => {
  const span = document.createElement('span');

  span.textContent = li.firstChild.textContent.trim();
  li.firstChild.replaceWith(span);

  // 🔥 ВАЖЛИВО: ховаємо ul одразу
  const childUl = li.querySelector(':scope > ul');

  childUl.classList.add('hidden');
});

// Делегування кліку
tree.addEventListener('click', (e) => {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const li = e.target.closest('li');
  const childUl = li.querySelector(':scope > ul');

  if (!childUl) {
    return;
  }

  childUl.classList.toggle('hidden');
});
