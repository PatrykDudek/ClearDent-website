const nav = document.querySelector('nav ul');
const menuBtn = document.querySelector('#open-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', () => {
  nav.classList.add('active');
  menuBtn.classList.remove('active');
  closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  menuBtn.classList.add('active');
  closeBtn.classList.remove('active');
});

window.addEventListener('scroll', () => {
  nav.classList.remove('active');
  menuBtn.classList.add('active');
  closeBtn.classList.remove('active');
});