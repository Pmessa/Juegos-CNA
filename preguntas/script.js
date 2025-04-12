const grupo1Preguntas = [
    {
        pregunta: "¿Cuál es la capital de Francia?",
        opciones: ["Londres", "Madrid", "París", "Berlín"],
        respuesta: 2,
    },
    {
        pregunta: "¿En qué año se descubrió América?",
        opciones: ["1492", "1620", "1776", "1812"],
        respuesta: 0,
    },
    {
        pregunta: "¿Cuál es el río más largo del mundo?",
        opciones: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"],
        respuesta: 1,
    },
    {
        pregunta: "¿Quién pintó la Mona Lisa?",
        opciones: ["Van Gogh", "Picasso", "Da Vinci", "Rembrandt"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuántos planetas hay en el sistema solar?",
        opciones: ["7", "8", "9", "10"],
        respuesta: 1,
    }
];

const grupo2Preguntas = [
    {
        pregunta: "¿Cuál es el océano más grande?",
        opciones: ["Atlántico", "Índico", "Ártico", "Pacífico"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué gas es el más abundante en la atmósfera terrestre?",
        opciones: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Argón"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién escribió 'Don Quijote de la Mancha'?",
        opciones: ["García Márquez", "Shakespeare", "Cervantes", "Dickens"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuál es el metal más abundante en la corteza terrestre?",
        opciones: ["Hierro", "Aluminio", "Cobre", "Oro"],
        respuesta: 1,
    },
    {
        pregunta: "¿En qué continente se encuentra Egipto?",
        opciones: ["Asia", "América", "África", "Europa"],
        respuesta: 2,
    }
];

const grupo3Preguntas = [
    {
        pregunta: "¿Cuál es el planeta más cercano al sol?",
        opciones: ["Venus", "Marte", "Mercurio", "Júpiter"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué elemento químico tiene el símbolo 'O'?",
        opciones: ["Oro", "Oxígeno", "Osmio", "Plomo"],
        respuesta: 1,
    },
    {
        pregunta: "¿Quién descubrió la penicilina?",
        opciones: ["Einstein", "Newton", "Fleming", "Curie"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuál es el hueso más largo del cuerpo humano?",
        opciones: ["Fémur", "Tibia", "Húmero", "Radio"],
        respuesta: 0,
    },
    {
        pregunta: "¿En qué país se encuentra la Gran Muralla China?",
        opciones: ["Japón", "Corea", "China", "Vietnam"],
        respuesta: 2,
    }
];

const grupo4Preguntas = [
    {
        pregunta: "¿Cuál es el animal terrestre más grande?",
        opciones: ["Ballena", "Jirafa", "Elefante", "Hipopótamo"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué idioma se habla en Brasil?",
        opciones: ["Español", "Inglés", "Portugués", "Francés"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién escribió 'Romeo y Julieta'?",
        opciones: ["Dickens", "Shakespeare", "Austen", "Tolstói"],
        respuesta: 1,
    },
    {
        pregunta: "¿Cuál es la capital de Canadá?",
        opciones: ["Toronto", "Montreal", "Vancouver", "Ottawa"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué planeta es conocido como el 'planeta rojo'?",
        opciones: ["Venus", "Marte", "Júpiter", "Saturno"],
        respuesta: 1,
    }
];

let preguntas = [];
let preguntaActual = 0;
let puntaje = 0;
let respuestasSeleccionadas = new Array(5).fill(null);
let intentosPorPregunta = new Array(5).fill(0);
let puntajePorPregunta = new Array(5).fill(0);
let nombreJugador = "";

document.getElementById("comenzar-btn").addEventListener("click", () => {
    nombreJugador = document.getElementById("nombre-input").value;
    document.getElementById("nombre-container").style.display = "none";
    document.getElementById("temas-container").style.display = "block";
});

document.querySelectorAll(".tema-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const tema = btn.dataset.tema;
        seleccionarPreguntasAleatorias(tema);
        document.getElementById("temas-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        mostrarPregunta();
    });
});

function seleccionarPreguntasAleatorias(tema) {
    if (tema === "grupo1") preguntas = [...grupo1Preguntas];
    else if (tema === "grupo2") preguntas = [...grupo2Preguntas];
    else if (tema === "grupo3") preguntas = [...grupo3Preguntas];
    else if (tema === "grupo4") preguntas = [...grupo4Preguntas];
}

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
        }

        opcionesDiv.appendChild(btn);
    });

    document.getElementById("resultado").textContent = "";
    actualizarBotonesNavegacion();

    anime({
        targets: '#quiz-container',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: 'easeOutExpo'
    });
}

function seleccionarRespuesta(indice) {
    intentosPorPregunta[preguntaActual]++;
    const correcta = preguntas[preguntaActual].respuesta;
    const botonesOpciones = document.querySelectorAll("#opciones .opcion");

    if (indice === correcta) {
        respuestasSeleccionadas[preguntaActual] = indice;
        let puntosGanados = Math.max(0, 20 - (intentosPorPregunta[preguntaActual] - 1) * 4);
        puntaje += puntosGanados;
        puntajePorPregunta[preguntaActual] = puntosGanados;

        botonesOpciones.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correcta) {
                btn.classList.add('correcta');
            }
        });

        lanzarConfeti();

        Swal.fire({
            title: '¡Correcto!',
            text: `¡Bien hecho, ${nombreJugador}! Ganaste ${puntosGanados} puntos.`,
            icon: 'success',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 2500,
            timerProgressBar: true,
            didClose: () => {
                if (preguntaActual < preguntas.length - 1) {
                    preguntaActual++;
                    mostrarPregunta();
                } else {
                    mostrarResultadoFinal();
                }
            }
        });
    } else {
        botonesOpciones.forEach((btn, index) => {
            btn.disabled = true;
            if (index === correcta) {
                btn.classList.add('correcta');
            }
        });

        Swal.fire({
            title: '¡Incorrecto!',
            text: `Sigue intentando, ${nombreJugador}.`,
            icon: 'error',
            showConfirmButton: false,
            allowOutsideClick: false,
            timer: 1500,
            timerProgressBar: true,
            didClose: () => {
                mostrarPregunta();
            }
        });
        botonesOpciones[indice].classList.add('incorrecta');
        botonesOpciones[correcta].classList.remove('correcta');
    }
}

function actualizarBotonesNavegacion() {
    const siguienteBtn = document.getElementById("siguiente-btn");
    siguienteBtn.style.display = "none";
}

function mostrarResultadoFinal() {
    document.getElementById("pregunta").textContent = `¡FELICITACIONES, ${nombreJugador}!`;
    document.getElementById("opciones").innerHTML = "";

    let resultadoTexto = `Tu puntaje final fue: ${puntaje} de 100<br><br>`;
    for (let i = 0; i < preguntas.length; i++) {
        resultadoTexto += `Pregunta ${i + 1}: ${puntajePorPregunta[i]} puntos<br>`;
    }

    document.getElementById("resultado").innerHTML = resultadoTexto;
    document.getElementById("reiniciar-btn").style.display = "inline-block";

    lanzarConfeti();
}

function lanzarConfeti() {
    const confettiContainer = document.getElementById("confetti-container");
    const cantidadConfeti = 100;

    for (let i = 0; i < cantidadConfeti; i++) {
        const confeti = document.createElement("div");
        confeti.className = "confeti";
        confeti.style.left = `${Math.random() * 100}vw`;
        confeti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
        confettiContainer.appendChild(confeti);

        anime({
            targets: confeti,
            translateY: "100vh",
            rotate: `${Math.random() * 360}deg`,
            scale: Math.random(),
            duration: Math.random() * 2000 + 2000,
            easing: "linear",
            complete: () => confeti.remove(),
        });
    }
}

function reiniciarJuego() {
    preguntaActual = 0;
    puntaje = 0;
    respuestasSeleccionadas = new Array(preguntas.length).fill(null);
    intentosPorPregunta = new Array(preguntas.length).fill(0);
    puntajePorPregunta = new Array(preguntas.length).fill(0);
    mostrarPregunta();
    document.getElementById("reiniciar-btn").style.display = "none";
}

document.getElementById("quiz-container").style.display = "none";
document.getElementById("reiniciar-btn").style.display = "none";