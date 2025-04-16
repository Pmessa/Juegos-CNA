const nombreInput = document.getElementById('nombre');
const participarBtn = document.getElementById('participar');
const sortearBtn = document.getElementById('sortear');
const reiniciarBtn = document.getElementById('reiniciar');
const participantsArea = document.getElementById('participants-area');

let participantes = [];
let sorteoRealizado = false;
let ganadorActual = null;

participarBtn.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        nombreInput.value = '';
        agregarParticipante(nombre);
    } else if (participantes.includes(nombre)) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El participante ya existe.'
        });
    }
});

sortearBtn.addEventListener('click', () => {
    if (!sorteoRealizado && participantes.length > 0) {
        realizarSorteo();
    } else if (sorteoRealizado) {
        Swal.fire({
            icon: 'info',
            title: 'Info',
            text: 'El sorteo ya se ha realizado. Reinicia para sortear de nuevo.'
        });
    }
});

reiniciarBtn.addEventListener('click', () => {
    reiniciarSorteo();
});

function realizarSorteo() {
    const ganador = participantes[Math.floor(Math.random() * participantes.length)];
    mostrarGanador(ganador);
    eliminarParticipante(ganador);
    ganadorActual = ganador;
    sorteoRealizado = true;
    sortearBtn.style.display = 'none';
    reiniciarBtn.style.display = 'block';
}

function reiniciarSorteo() {
    const ganadorMostrado = document.querySelector('.ganador-mostrado');
    if (ganadorMostrado) {
        ganadorMostrado.remove();
    }
    const ganadorDiv = document.querySelector(`.participant[data-nombre="${ganadorActual}"]`);
    if (ganadorDiv) {
        ganadorDiv.remove();
    }
    ganadorActual = null;
    sorteoRealizado = false;
    sortearBtn.style.display = 'block';
    reiniciarBtn.style.display = 'none';
}

function agregarParticipante(nombre) {
    const participante = document.createElement('div');
    participante.classList.add('participant');
    participante.textContent = nombre;
    participante.setAttribute('data-nombre', nombre);
    participantsArea.appendChild(participante);
    moverParticipante(participante);
}

function moverParticipante(participante) {
    const maxWidth = participantsArea.clientWidth - participante.clientWidth;
    const maxHeight = participantsArea.clientHeight - participante.clientHeight;

    let x = Math.random() * maxWidth;
    let y = Math.random() * maxHeight;
    let dx = (Math.random() - 0.5) * 2;
    let dy = (Math.random() - 0.5) * 2;
    let rotation = 0;
    let dRotation = (Math.random() - 0.5) * 0.5;

    function animate() {
        x += dx;
        y += dy;
        rotation += dRotation;

        if (x < 0 || x > maxWidth) dx = -dx;
        if (y < 0 || y > maxHeight) dy = -dy;

        participante.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
        requestAnimationFrame(animate);
    }

    animate();
}

function mostrarGanador(ganador) {
    const ganadorDiv = document.createElement('div');
    ganadorDiv.textContent = ganador;
    ganadorDiv.classList.add('ganador-mostrado');
    participantsArea.appendChild(ganadorDiv);
}

function eliminarParticipante(nombre) {
    const participanteDiv = document.querySelector(`.participant[data-nombre="${nombre}"]`);
    if (participanteDiv) {
        participanteDiv.remove();
    }
    const index = participantes.indexOf(nombre);
    if (index > -1) {
        participantes.splice(index, 1);
    }
}

reiniciarBtn.style.display = 'none';