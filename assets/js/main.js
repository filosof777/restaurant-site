// change website theme


let elChangeTheme = document.querySelector('.change-theme');

elChangeTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark-theme')
  elChangeTheme.classList.toggle('bx-sun')
});

document.querySelector('.bx-menu').addEventListener('click', () => {
  let elMenu = document.querySelector('.nav__menu');
  elMenu.classList.toggle('show-menu')
});



const links = document.querySelectorAll('.nav__link');
const sections = document.querySelectorAll('section');

function changeLinkState() {
  let index = sections.length;

  while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
  links.forEach((link) => link.classList.remove('active-link'));
  links[index].classList.add('active-link');
}

changeLinkState();
window.addEventListener('scroll', changeLinkState);