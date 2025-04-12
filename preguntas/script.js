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
        pregunta: "¿Quién es responsable de emitir las alarmas acústicas desde la Sala de Control?",
        opciones: ["Departamento de Protección Física", "Departamento de Radioprotección", "Departamentos Operaciones CNA I y CNA II", "Departamento de Seguridad Industrial"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién emite las sirenas externas del Sistema de Alerta Pública?",
        opciones: ["Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Oficial Protección Física o Auxiliar Protección Física", "Jefe de Turno"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué departamento coloca y retira la señalización en accesos de ZRC durante una alarma de Evacuación?",
        opciones: ["Departamento de Protección Física", "Departamento de Radioprotección", "Departamento de Seguridad Industrial", "Departamentos Operaciones CNA I y CNA II"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué departamento coloca y retira la señalización en accesos de Zona Convencional durante una alarma de Evacuación?",
        opciones: ["Departamento de Protección Física", "Departamento de Radioprotección", "Departamento de Seguridad Industrial", "Departamentos Operaciones CNA I y CNA II"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién debe comunicar el inicio y fin de trabajos que liberan humos y pueden activar detectores de incendio?",
        opciones: ["Jefe de Turno", "Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Responsable de la tarea"],
        respuesta: 3,
    },
    {
        pregunta: "¿Cuántas alarmas acústicas se disponen en la CNA II?",
        opciones: ["3", "4", "5", "6"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué significa la alarma 'General'?",
        opciones: ["Acción Urgente", "Acción Preventiva", "Concentración en los Puntos de Reunión", "Emergencia Convencional"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué acción se debe tomar ante una alarma de 'Fuga'?",
        opciones: ["Abandonar normalmente el local", "Concentrarse en los Puntos de Reunión", "Abandonar rápidamente el local", "Acudir al lugar del evento"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué acción se debe tomar ante una alarma de 'Evacuación'?",
        opciones: ["Abandonar rápidamente el local", "Abandonar normalmente el local", "Concentrarse en los Puntos de Reunión", "Acudir al lugar del evento"],
        respuesta: 1,
    },
    {
        pregunta: "¿Quién debe acudir al lugar del evento ante una acústica de 'Incendio'?",
        opciones: ["Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Personal de la Brigada de Emergencia", "Departamentos Operaciones CNA I y CNA II"],
        respuesta: 2,
    },
        {
        pregunta: "¿En qué tipo de alarma se deben usar las salidas de emergencia?",
        opciones: ["Evacuación", "Fuga", "Incendio", "General"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué se debe hacer si se abandona ZRC por puertas de emergencia durante una fuga?",
        opciones: ["Regresar inmediatamente", "Permanecer fuera de ZRC y esperar instrucciones", "Dirigirse a los Puntos de Reunión", "Buscar refugio en otro edificio"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué señal indica la necesidad de concentrarse en los Puntos de Reunión?",
        opciones: ["Alarma General", "Alarma de Fuga", "Alarma de Evacuación", "Alarma de Intrusión"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué acción realiza el Oficial de Radioprotección durante una alarma de Evacuación en Locales de Servicio del Reactor?",
        opciones: ["Emite la alarma acústica", "Verifica la no permanencia de personal en la esfera de contención", "Dirige la Brigada de Emergencia", "Emite sirenas externas"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué sistema se utiliza para anunciar la inhabilitación de un recinto?",
        opciones: ["Sistema de Alerta Pública", "Sistema de Buscapersonas", "Sistemas de Comunicación (MD o CYC)", "Sistema SDA"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué debe hacer el personal al escuchar la alarma de Intrusión?",
        opciones: ["Abandonar el edificio", "Dirigirse a los Puntos de Reunión", "Permanecer en su lugar de trabajo o buscar refugio", "Ayudar a la Brigada de Emergencia"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién convoca a la Brigada de Emergencia ante un incendio?",
        opciones: ["Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Jefe de Turno CNA I o CNA II", "Operador del Sistema Primario"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué se debe hacer si se activa un detector de incendio por trabajos con humos?",
        opciones: ["Evacuar inmediatamente", "Ignorar la alarma", "Comunicar al Jefe de Turno para verificar la falsa alarma", "Dirigirse a los Puntos de Reunión"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién verifica el cierre de puertas de emergencia durante una alarma de Fuga?",
        opciones: ["Personal de la Sección Radioprotección", "Personal de la Brigada de Emergencia", "Personal del Departamento de Protección Física", "Personal de Sala de Control"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué debe hacer sala de control si se recibe un aviso falso de incendio?",
        opciones: ["Ignorar la alarma", "Evacuar inmediatamente", "Comunicar la causa por altavoces", "Dirigirse a los Puntos de Reunión"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué se debe hacer si se activa un detector de incendio por trabajos con humos?",
        opciones: ["Evacuar inmediatamente", "Ignorar la alarma", "Comunicar al Jefe de Turno para verificar la falsa alarma", "Dirigirse a los Puntos de Reunión"],
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
    let preguntasDisponibles = [];

    if (tema === "grupo1") preguntasDisponibles = [...grupo1Preguntas];
    else if (tema === "grupo2") preguntasDisponibles = [...grupo2Preguntas];
    else if (tema === "grupo3") preguntasDisponibles = [...grupo3Preguntas];

    preguntas = [];
    for (let i = 0; i < 5; i++) {
        const indiceAleatorio = Math.floor(Math.random() * preguntasDisponibles.length);
        preguntas.push(preguntasDisponibles.splice(indiceAleatorio, 1)[0]);
    }
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
    document.getElementById("reiniciar-btn").style.display = "none";
    
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
        resultadoTexto += `<p>Pregunta ${i + 1}: ${puntajePorPregunta[i]} puntos</p>`;
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

    // Ocultar el quiz y mostrar la pantalla de nombre
    document.getElementById("quiz-container").style.display = "none";
    document.getElementById("nombre-container").style.display = "block";

    // Limpiar el campo de nombre para un nuevo jugador
    document.getElementById("nombre-input").value = "";
}

document.getElementById("quiz-container").style.display = "none";
document.getElementById("reiniciar-btn").style.display = "none";