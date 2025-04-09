const preguntas = [
    {
        pregunta: "1- ME ENCUENTRO EN ZC DE LA UNIDAD II, SUENA LA ALARMA GENERAL ¿DÓNDE ME DIRIJO?",
        opciones: ["PUNTO DE REUNIÓN N°1", "PUNTO DE REUNIÓN N°2", "PUNTO DE REUNIÓN N°3", "PUNTO DE REUNIÓN N°4", "PUNTO DE REUNIÓN N°5", "PUNTO DE REUNIÓN N°6"],
        respuesta: 1,
    },
    {
        pregunta: "2- ME ENCUENTRO EN EL EDIFICIO UBA UNIDAD II, SUENA LA ALARMA GENERAL ¿DÓNDE ME DIRIJO?",
        opciones: ["PUNTO DE REUNIÓN N°1", "PUNTO DE REUNIÓN N°2", "PUNTO DE REUNIÓN N°3", "PUNTO DE REUNIÓN N°4", "PUNTO DE REUNIÓN N°5","PUNTO DE REUNIÓN N°6"],
        respuesta: 0
    },
    {
        pregunta: "3- PERSONAL CONTRATISTA ME CONSULTA DENTRO DEL DOBLE CERCO, DONDE DIRIGIRSE EN CASO DE ALARMA GENERAL ¿QUÉ LE RESPONDO?",
        opciones: ["AL PUNTO DE REUNIÓN N°1", "QUE SIGA A LAS PERSONAS AL EVACUAR", "QUE HABLE CON SU SUPERVISOR", "AL PUNTO DE REUNIÓN N°6"],
        respuesta: 3
    },
    {
        pregunta: "4- ESTOY ACOMPAÑANDO A UN PROVEEDOR DENTRO DE PLANTA, SUENA LA ALARMA GENERAL ¿QUÉ DEBO HACER?",
        opciones: ["LLEVO AL PROVEEDOR A PORTERÍA", "EL PROVEEDOR ME ACOMPAÑA LA PUNTO DE REUNIÓ N°1", "ME VOY Y LE DIGO QUE SE RETIRE SIGUIENO LA GENTE QUE ESTÁ EVACUANDO", "LO LLEVO AL PUNTO 6 CON EL PERSONAL CONTRATISTA"],
        respuesta: 1
    },
    {
        pregunta: "5- ¿RICAGNI MERECE QUINCHO? ",
        opciones: ["SÍ", "NO"],
        respuesta: 0
    }
];

let preguntaActual = 0;
let puntaje = 0;
let respuestasSeleccionadas = new Array(preguntas.length).fill(null);
let temporizadorSiguientePregunta;

function mostrarPregunta() {
    const q = preguntas[preguntaActual];
    document.getElementById("pregunta").textContent = q.pregunta;

    const opcionesDiv = document.getElementById("opciones");
    opcionesDiv.innerHTML = "";

    q.opciones.forEach((opcion, index) => {
        const btn = document.createElement("button");
        btn.textContent = opcion;
        btn.className = "opcion";
        btn.onclick = () => seleccionarRespuesta(index);

        if (respuestasSeleccionadas[preguntaActual] === index) {
            btn.classList.add("seleccionada");
            btn.disabled = true;
        } else if (respuestasSeleccionadas[preguntaActual] !== null) {
            btn.disabled = true;
        }

        opcionesDiv.appendChild(btn);
    });

    document.getElementById("resultado").textContent = "";
    actualizarBotonesNavegacion();
}

function seleccionarRespuesta(indice) {
    if (respuestasSeleccionadas[preguntaActual] === null) {
        respuestasSeleccionadas[preguntaActual] = indice;
        const correcta = preguntas[preguntaActual].respuesta;
        const botonesOpciones = document.querySelectorAll("#opciones .opcion");

        botonesOpciones.forEach((btn, index) => {
            btn.disabled = true;
            if (index === indice) {
                if (indice === correcta) {
                    document.getElementById("resultado").textContent = "✅ ¡Correcto!";
                    puntaje++;
                    btn.classList.add('correcta');
                } else {
                    document.getElementById("resultado").textContent = "❌ Incorrecto.";
                    btn.classList.add('incorrecta');
                }
            } else if (index === correcta) {
                btn.classList.add('correcta-real');
            }
        });

        // Después de la retroalimentación, pasar automáticamente a la siguiente pregunta o al resultado final
        clearTimeout(temporizadorSiguientePregunta); // Limpiar cualquier temporizador anterior
        temporizadorSiguientePregunta = setTimeout(() => {
            if (preguntaActual < preguntas.length - 1) {
                siguientePregunta();
            } else {
                mostrarResultadoFinal();
            }
        }, 2000); // Espera 2 segundos
    }
}

function siguientePregunta() {
    preguntaActual++;
    if (preguntaActual < preguntas.length) {
        mostrarPregunta();
    }
}

function actualizarBotonesNavegacion() {
    const siguienteBtn = document.getElementById("siguiente-btn");
    siguienteBtn.style.display = "none"; // Ocultar siempre el botón "Siguiente"
}

function mostrarResultadoFinal() {
    document.getElementById("pregunta").textContent = "🎉 ¡FELICITACIONES! 🎉";
    document.getElementById("opciones").innerHTML = "";
    document.getElementById("resultado").textContent = `Tu puntaje fue: ${puntaje} de ${preguntas.length}`;
    const siguienteBtn = document.getElementById("siguiente-btn");
    if (siguienteBtn) siguienteBtn.style.display = "none";
    document.getElementById("reiniciar-btn").style.display = "inline-block";
}

function reiniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    respuestasSeleccionadas.fill(null);
    mostrarPregunta();
    const siguienteBtn = document.getElementById("siguiente-btn");
    if (siguienteBtn) siguienteBtn.style.display = "none";
    document.getElementById("reiniciar-btn").style.display = "none";
    clearTimeout(temporizadorSiguientePregunta); // Limpiar el temporizador al reiniciar
}

// Iniciar juego
mostrarPregunta();
const siguienteBtnInicial = document.getElementById("siguiente-btn");
if (siguienteBtnInicial) siguienteBtnInicial.style.display = "none";
document.getElementById("reiniciar-btn").style.display = "none";