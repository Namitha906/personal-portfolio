// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
const header = document.querySelector('header h1');
header.innerHTML = ""; 

const text = "Hi, I'm Namitha N. Reddy | CSE (AI/ML) Student | Aspiring Tech Professional";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    header.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

