document.addEventListener('DOMContentLoaded', () => {
    const nombresContainer = document.getElementById('nombres-container');
    const sortearBtn = document.getElementById('sortear');
    const resultadoDiv = document.getElementById('resultado');
    const volverBtn = document.getElementById('volver');
    let nombres = [];
    let ganadorActualElement = null;
    const siguienteSorteoBtn = document.createElement('button');
    siguienteSorteoBtn.textContent = 'Siguiente Sorteo';
    siguienteSorteoBtn.classList.add('oculto');
    siguienteSorteoBtn.addEventListener('click', iniciarNuevoSorteo);

    document.querySelector('.container').appendChild(siguienteSorteoBtn);

    // Función para obtener los participantes del localStorage
    function obtenerParticipantes() {
        const participantesJSON = localStorage.getItem('participantes');
        return participantesJSON ? JSON.parse(participantesJSON) : [];
    }

    // Función para guardar los participantes en localStorage
    function guardarParticipantes(participantes) {
        localStorage.setItem('participantes', JSON.stringify(participantes));
    }

    // Función para actualizar la visualización de los nombres
    function actualizarNombresVisualizacion(listaNombres) {
        nombresContainer.innerHTML = ''; // Limpiar el contenedor
        listaNombres.forEach(nombre => {
            const nombreDiv = document.createElement('div');
            nombreDiv.classList.add('nombre-participante');
            nombreDiv.textContent = nombre;
            nombresContainer.appendChild(nombreDiv);
            posicionarNombreAleatorio(nombreDiv);
            animarNombre(nombreDiv);
        });
        ganadorActualElement = null; // Resetear el elemento ganador al actualizar la lista
    }

    // Cargar los participantes iniciales
    let participantes = obtenerParticipantes();
    if (participantes && participantes.length > 0) {
        nombres = [...participantes];
        actualizarNombresVisualizacion(nombres);
    } else {
        Swal.fire({
            icon: 'warning',
            title: '¡Atención!',
            text: 'No hay participantes registrados para el sorteo.',
            confirmButtonText: 'Volver al inicio'
        }).then(() => {
            window.location.href = 'index.html';
        });
    }

    function posicionarNombreAleatorio(elemento) {
        const containerWidth = nombresContainer.offsetWidth;
        const containerHeight = nombresContainer.offsetHeight;
        const elementWidth = elemento.offsetWidth;
        const elementHeight = elemento.offsetHeight;

        const x = Math.random() * (containerWidth - elementWidth);
        const y = Math.random() * (containerHeight - elementHeight);

        elemento.style.left = `${x}px`;
        elemento.style.top = `${y}px`;
    }

    function animarNombre(elemento) {
        const duration = (Math.random() * 2000) + 1000; // Duración aleatoria
        const containerWidth = nombresContainer.offsetWidth;
        const containerHeight = nombresContainer.offsetHeight;
        const elementWidth = elemento.offsetWidth;
        const elementHeight = elemento.offsetHeight;

        const newX = Math.random() * (containerWidth - elementWidth);
        const newY = Math.random() * (containerHeight - elementHeight);

        Velocity(elemento, { left: newX, top: newY }, {
            duration: duration,
            easing: 'easeInOutSine',
            complete: () => animarNombre(elemento) // Repetir la animación
        });
    }

    sortearBtn.addEventListener('click', () => {
        if (nombres.length > 0) {
            Velocity(nombresContainer.children, { opacity: 0.3, scale: 0.8 }, { duration: 50 }); // Reducir la opacidad y escala de los otros nombres
            Velocity(nombresContainer.children, {
                translateX: [ function() { return (Math.random() - 0.5) * 200 + 'px'; }, 0 ],
                translateY: [ function() { return (Math.random() - 0.5) * 200 + 'px'; }, 0 ]
            }, {
                duration: 750,
                easing: 'easeOutExpo',
                complete: () => {
                    const ganadorIndex = Math.floor(Math.random() * nombres.length);
                    const ganador = nombres[ganadorIndex];
                    resultadoDiv.textContent = `¡El ganador es: ${ganador}!`;
                    resultadoDiv.classList.remove('oculto');
                    sortearBtn.classList.add('oculto');
                    siguienteSorteoBtn.classList.remove('oculto');
                    volverBtn.classList.remove('oculto');
                    // Detener la animación de los nombres
                    Velocity(nombresContainer.children, 'stop');
                    // Encontrar el elemento del ganador
                    ganadorActualElement = nombresContainer.children[ganadorIndex];
                    // Aplicar estilos directamente con Velocity para asegurar la animación y el z-index
                    Velocity(ganadorActualElement, {
                        backgroundColor: '#28a745',
                        color: '#fff',
                        scale: 1.5,
                        opacity: 1,
                        zIndex: 10 // Asegurar que esté al frente
                    }, { duration: 500 });
                }
            });
        } else {
            Swal.fire({
                icon: 'info',
                title: '¡Sorteo finalizado!',
                text: 'Todos los participantes han sido sorteados.',
                confirmButtonText: 'Volver al inicio'
            }).then(() => {
                window.location.href = 'index.html';
            });
        }
    });

    function iniciarNuevoSorteo() {
        if (ganadorActualElement) {
            // Revertir los estilos del ganador
            Velocity(ganadorActualElement, {
                backgroundColor: '#e9ecef',
                color: '#000',
                scale: 1,
                opacity: 1,
                zIndex: 1 // Volver al z-index normal
            }, { duration: 300, complete: () => {
                const ganador = ganadorActualElement.textContent;
                const ganadorIndex = nombres.indexOf(ganador);
                if (ganadorIndex > -1) {
                    nombres.splice(ganadorIndex, 1);
                    guardarParticipantes(nombres);
                }
                ganadorActualElement = null;
                resultadoDiv.classList.add('oculto');
                siguienteSorteoBtn.classList.add('oculto');
                sortearBtn.classList.remove('oculto');
                actualizarNombresVisualizacion(nombres);
                if (nombres.length === 0) {
                    sortearBtn.disabled = true;
                    sortearBtn.textContent = 'No hay más participantes';
                } else {
                    sortearBtn.disabled = false;
                    sortearBtn.textContent = 'Sortear';
                }
            }});
        }
    }

    volverBtn.addEventListener('click', () => {
        window.location.href = 'index.html';
    });
});