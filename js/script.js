// Toggle icon navbar
const menuIcons = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcons.onclick = () => {
  menuIcons.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


// Scroll sections 
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 100;
    let heigth = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + heigth) {
      // active navbar links
      navLinks.forEach((links) => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
      // active sections for animation on scroll
      sec.classList.add('show-animate');
    }
    // if want to use animation that repeats on scroll use this 
    else {
      sec.classList.remove('show-animate');
    }
  })
  //sticky header
  const header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //remove toggle icon and navbar when click navbar links (scroll)
  menuIcons.classList.remove('bx-x');
  navbar.classList.remove('active');

  // animation footer on scroll
  const footer = document.querySelector('footer', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}
