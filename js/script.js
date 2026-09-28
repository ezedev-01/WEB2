// Obtener referencias de los elementos
const imagenes = document.querySelectorAll("main figure img");
const modal = document.getElementById("modalImagen");
const imagenExpandida = document.getElementById("imagenExpandida");
const btnCerrar = document.getElementById("btnCerrar");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");

// Índice de la imagen actual en el modal
let indiceActual = 0;

// Función para mostrar una imagen específica en el modal
function mostrarImagen(indice) {
    // Asegurar que el índice esté dentro del rango
    indiceActual = (indice + imagenes.length) % imagenes.length;
    imagenExpandida.src = imagenes[indiceActual].src;
    imagenExpandida.alt = imagenes[indiceActual].alt;
}

// Recorrer cada imagen para asignarle el evento click
imagenes.forEach((imagen, index) => {
    imagen.addEventListener('click', () => {
        mostrarImagen(index);
        modal.style.display = "flex";
    });
});

// Navegar a la imagen anterior
btnAnterior.addEventListener('click', () => {
    mostrarImagen(indiceActual - 1);
});

// Navegar a la imagen siguiente
btnSiguiente.addEventListener('click', () => {
    mostrarImagen(indiceActual + 1);
});

// Navegar con las flechas del teclado
document.addEventListener('keydown', (e) => {
    if (modal.style.display === "flex") {
        if (e.key === 'ArrowLeft') {
            mostrarImagen(indiceActual - 1);
        } else if (e.key === 'ArrowRight') {
            mostrarImagen(indiceActual + 1);
        }
    }
});

// Función para cerrar el modal
function cerrarModal() {
    modal.style.display = "none";
}

// Eventos para cerrar el modal
btnCerrar.addEventListener('click', cerrarModal);

// Cerrar al hacer clic en el fondo oscuro
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        cerrarModal();
    }
});

// Cerrar con la tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        cerrarModal();
    }
});