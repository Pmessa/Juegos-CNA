document.addEventListener('DOMContentLoaded', () => {
    const nombreInput = document.getElementById('nombre');
    const guardarNombreBtn = document.getElementById('guardarNombre');
    const irAlSorteoBtn = document.getElementById('ir-al-sorteo');

    // Función para obtener los participantes del localStorage
    function obtenerParticipantes() {
        const participantesJSON = localStorage.getItem('participantes');
        return participantesJSON ? JSON.parse(participantesJSON) : [];
    }

    // Función para guardar los participantes en localStorage
    function guardarParticipantes(participantes) {
        localStorage.setItem('participantes', JSON.stringify(participantes));
    }

    guardarNombreBtn.addEventListener('click', () => {
        const nombre = nombreInput.value.trim();
        if (nombre) {
            const participantes = obtenerParticipantes();
            if (participantes.includes(nombre)) {
                Swal.fire({
                    icon: 'warning',
                    title: '¡Atención!',
                    text: `${nombre} ya está registrado para el sorteo.`,
                    confirmButtonText: 'Entendido'
                });
                nombreInput.value = ''; // Limpiar el input
                return; // Detener el proceso de registro
            }

            participantes.push(nombre);
            guardarParticipantes(participantes);

            Swal.fire({
                icon: 'success',
                title: '¡Participante registrado!',
                text: `${nombre}, usted ya está participando.`,
                confirmButtonText: 'Entendido'
            }).then(() => {
                nombreInput.value = ''; // Limpiar el input después de registrar
            });

            // Siempre mostrar el botón de ir al sorteo si hay al menos un participante
            if (participantes.length > 0) {
                irAlSorteoBtn.classList.remove('oculto');
            }
        } else {
            Swal.fire({
                icon: 'error',
                title: '¡Error!',
                text: 'Por favor, ingresa tu nombre.',
            });
        }
    });

    // Mostrar el botón de ir al sorteo si ya hay participantes guardados al cargar la página
    if (obtenerParticipantes().length > 0) {
        irAlSorteoBtn.classList.remove('oculto');
    }

    irAlSorteoBtn.addEventListener('click', () => {
        window.location.href = 'sorteo.html';
    });
});