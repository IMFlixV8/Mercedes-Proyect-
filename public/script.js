
    document.addEventListener("DOMContentLoaded", function () {
        // Obtener la hora actual
        let hour = new Date().getHours();
        
        // Definir los rangos de día y noche (6am - 6pm es día)
        if (hour >= 6 && hour < 18) {
            document.body.classList.add("day-theme");  // Aplica la clase de día
        } else {
            document.body.classList.add("night-theme");  // Aplica la clase de noche
        }
    });

    function mostrarCategoria(categoriaSeleccionada, evento) {
        // Ocultar todas las categorías
        const categorias = document.querySelectorAll('.categoria');
        categorias.forEach(function(categoria) {
            categoria.classList.add('oculto');
        });

        // Mostrar la categoría seleccionada
        const categoriaMostrada = document.querySelector(`.${categoriaSeleccionada}`);
        if (categoriaMostrada) {
            categoriaMostrada.classList.remove('oculto');
        }

        // Actualizar las pestañas activas
        const botones = document.querySelectorAll('.tab-button');
        botones.forEach(function(boton) {
            boton.classList.remove('active');
        });
        evento.target.classList.add('active');
    }

// Selecciona los elementos una sola vez fuera de la función
const modal = document.getElementById('info-modal');
const title = document.getElementById('modal-title');
const image = document.getElementById('modal-image'); // Solo se declara una vez
const description = document.getElementById('modal-description');
const icon = document.getElementById('modal-icon');
function showInfo(auto) {
    // Cambia la información según el auto
    if (auto === 'auto1') {
        title.textContent = 'Mercedes-Benz C-Class';
        image.src = './imagenes/iconos/1.webp'; // Cambia la ruta de la imagen
        description.textContent = 'Reservar US$5,000';
    } else if (auto === 'auto2') {
        title.textContent = 'Mercedes-Benz C-Class';
        description.textContent = 'Reservar US$5,000.';
        image.src = './imagenes/iconos/2.webp'; // Ajusta la ruta según el auto
    } else if (auto === 'auto3') {
        title.textContent = 'Mercedes-Benz C-Class';
        description.textContent = 'Reservar US$5,000.';
        image.src = './imagenes/iconos/3.webp'; // Ajusta la ruta según el auto
    }

    modal.style.display = 'block'; 
}

function closeInfo() {
    const modal = document.getElementById('info-modal');
    modal.style.display = 'none';
}

document.querySelector('.img__btn').addEventListener('click', function() {
    document.querySelector('.cont').classList.toggle('s--signup');
    });
