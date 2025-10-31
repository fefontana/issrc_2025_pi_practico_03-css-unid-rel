const modal = document.getElementById("menuModal");
const btn = document.getElementById("openModalBtn");
const span = document.getElementsByClassName("close-btn")[0];

// Abrir el modal
btn.onclick = function() {
  modal.style.display = "block";
}

// Cerrar el modal cuando el usuario haga clic en el <span> (X)
span.onclick = function() {
  modal.style.display = "none";
}

// Cerrar el modal si el usuario hace clic fuera de él
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
