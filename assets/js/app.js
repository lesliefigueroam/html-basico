// Selecciona el botón
const btnArriba = document.getElementById("btn-arriba");

// Muestra u oculta el botón según el scroll
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    btnArriba.classList.add("visible");
  } else {
    btnArriba.classList.remove("visible");
  }
});

// Función para volver al inicio suavemente
function irArriba() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}