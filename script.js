// Efeito de digitação no cabeçalho
const text = [
  "Estudante de Ciências da Computação",
  "Desenvolvedor em formação",
  "Apaixonado por tecnologia"
];
let i = 0, j = 0, isDeleting = false;
const typingElement = document.querySelector(".typing");

function type() {
  const current = text[i];
  if (!isDeleting && j < current.length) {
    typingElement.textContent = current.substring(0, j++);
    setTimeout(type, 100);
  } else if (isDeleting && j > 0) {
    typingElement.textContent = current.substring(0, j--);
    setTimeout(type, 50);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % text.length;
    setTimeout(type, 800);
  }
}
type();

// Alternar tema claro/escuro
const themeButton = document.querySelector(".theme-toggle");
themeButton.addEventListener("click", () => {
  const isLight = document.body.getAttribute("data-theme") === "light";
  document.body.setAttribute("data-theme", isLight ? "dark" : "light");
  themeButton.textContent = isLight ? "☀️" : "🌙";
});
