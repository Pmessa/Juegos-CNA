const preguntasOriginales = [
    {
        pregunta: "SOY PERSONAL DE TURNO, ME ENCUENTRO EN ZC DE LA UNIDAD II, SUENA LA ALARMA GENERAL ¿DÓNDE ME DIRIJO?",
        opciones: ["PUNTO DE REUNIÓN N°1", "PUNTO DE REUNIÓN N°2", "PUNTO DE REUNIÓN N°3", "PUNTO DE REUNIÓN N°4", "PUNTO DE REUNIÓN N°5", "PUNTO DE REUNIÓN N°6"],
        respuesta: 3,
    },
    {
        pregunta: "NO SOY PERSONAL DE TURNO, ME ENCUENTRO EN ZC DE LA UNIDAD II, SUENA LA ALARMA GENERAL ¿DÓNDE ME DIRIJO?",
        opciones: ["PUNTO DE REUNIÓN N°1", "PUNTO DE REUNIÓN N°2", "PUNTO DE REUNIÓN N°3", "PUNTO DE REUNIÓN N°4", "PUNTO DE REUNIÓN N°5", "PUNTO DE REUNIÓN N°6"],
        respuesta: 1,
    },
    {
        pregunta: "ME ENCUENTRO EN EL EDIFICIO UBA UNIDAD II, SUENA LA ALARMA GENERAL ¿DÓNDE ME DIRIJO?",
        opciones: ["PUNTO DE REUNIÓN N°1", "PUNTO DE REUNIÓN N°2", "PUNTO DE REUNIÓN N°3", "PUNTO DE REUNIÓN N°4", "PUNTO DE REUNIÓN N°5","PUNTO DE REUNIÓN N°6"],
        respuesta: 0
    },
    {
        pregunta: "PERSONAL CONTRATISTA ME CONSULTA DENTRO DEL DOBLE CERCO, DONDE DIRIGIRSE EN CASO DE ALARMA GENERAL ¿QUÉ LE RESPONDO?",
        opciones: ["AL PUNTO DE REUNIÓN N°1", "QUE SIGA A LAS PERSONAS AL EVACUAR", "QUE HABLE CON SU SUPERVISOR", "AL PUNTO DE REUNIÓN N°6"],
        respuesta: 3
    },
    {
        pregunta: "ESTOY ACOMPAÑANDO A UN PROVEEDOR DENTRO DE PLANTA, SUENA LA ALARMA GENERAL ¿QUÉ DEBO HACER?",
        opciones: ["LLEVO AL PROVEEDOR A PORTERÍA", "EL PROVEEDOR ME ACOMPAÑA LA PUNTO DE REUNIÓ N°1", "ME VOY Y LE DIGO QUE SE RETIRE SIGUIENO LA GENTE QUE ESTÁ EVACUANDO", "LO LLEVO AL PUNTO 6 CON EL PERSONAL CONTRATISTA"],
        respuesta: 1
    },
    {
        pregunta: "ESTOY EN 20MTS EDIFICIO DE MANIOBRAS, SUENA LA ALARMA DE EVACUACIÓN ¿QUÉ DEBO HACER?",
        opciones: ["SALIR RAPIDAMENTE POR LAS PUERTAS DE EMERGENCIA", "TOMO EL ASCENSOR PARA EVACUAR CON MAYOR RAPIDEZ", "DEJO EL LUGAR EN CONDICION SEGURA Y EVACÚO POR LAS ESCALERAS", "LLAMO AL JEFE DE TURNO PARA VERIFICAR LA VERACIDAD DE LA EMISIÓN DE LA ALARMA"],
        respuesta: 2 
    },
    {
        pregunta: "ESTOY EN LA UNIDAD 2 Y DETECTO QUE SALE HUMO DEL INTERIOR DE UN CONTENEDOR, ¿A QUÉ NÚMERO LLAMO?",
        opciones: ["911", "40333", "40222","47222","101", "40666"],
        respuesta: 3 
    },
    {
        pregunta: "ESTOY EN LA UNIDAD 1 Y DETECTO QUE SALE HUMO DEL INTERIOR DE UN CONTENEDOR, ¿A QUÉ NÚMERO LLAMO?",
        opciones: ["911", "40333", "40222","47222","101", "40666"],
        respuesta: 2 
    },
    {
        pregunta: "¿QUÉ ES EL PLAN DE EMERGENCIA?",
        opciones: ["ES LA MEDIDA REALIZADA EN FORMA AUTOMÁTICA UNA VEZ DECLARADA EL ALERTA VERDE", "CONJUNTO DE ACCIONES PREVISTAS Y PLANIFICADAS PARA MITIGAR LAS CONSECUENCIAS DE UN EVENTUAL ACCIDENTE", "SE TRATA DE SUCESOS DE ORIGEN INTERNO O EXTERNO CUYO RESULTADO REPRESENTE UN RIESGO SIGNIFICATIVO", "PROTOCOLO DE ACTUACIÓN ANTE UNA CRISIS"],
        respuesta: 1
    },
    {
        pregunta: "¿QUIÉN ES EL RESPONSABLE DE DISTRIBUIR LA DOSIS DE IODO ESTABLE EN CADA PUNTO DE REUNIÓN?",
        opciones: ["EL JEFE DE LA EMERGENCIA", "PERSONAL DE LA ORE", "EL COORDINADOR DEL PUNTO DE REUNIÓN","EL JEFE DE TURNO"],
        respuesta: 1
    },
    {
        pregunta: "1.	¿A QUE LLAMAMOS CONDICIONES METEOROLÓGICAS SEVERAS?",
        opciones: ["A VIENTOS MAYORES A 70 KM/H", "EVENTOS ATMOSFÉRICOS CAPAZ DE PRODUCIR DIRECTA O INDIRECTAMENTE DAÑOS A PERSONAS O MATERIALES (EQUIPOS Y/O EDIFICIOS)", "SE TRATA DE SUCESOS DE ORIGEN INTERNO CUYO RESULTADO REPRESENTE UN RIESGO SIGNIFICATIVO DE LIBERACIÓN DE MATERIAL RADIACTIVO O QUÍMICO PELIGROSO","FENÓMENOS CLIMÁTICOS PELIGROSOS"],
        respuesta: 1
    }
];

let preguntas = [];
let preguntaActual = 0;
let puntaje = 0;
let respuestasSeleccionadas = new Array(5).fill(null);
let temporizadorSiguientePregunta;

function seleccionarPreguntasAleatorias() {
    const numPreguntasMostrar = 5;
    if (preguntasOriginales.length <= numPreguntasMostrar) {
        preguntas = [...preguntasOriginales];
    } else {
        preguntas = [];
        const indicesSeleccionados = new Set();
        while (indicesSeleccionados.size < numPreguntasMostrar) {
            const indiceAleatorio = Math.floor(Math.random() * preguntasOriginales.length);
            indicesSeleccionados.add(indiceAleatorio);
        }
        indicesSeleccionados.forEach(indice => {
            preguntas.push(preguntasOriginales[indice]);
        });
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
                    btn.classList.add('correcta');
                } else {
                    btn.classList.add('incorrecta');
                }
            } else if (index === correcta) {
                btn.classList.add('correcta-real');
            }
        });

        clearTimeout(temporizadorSiguientePregunta);

        Swal.fire({
            title: (indice === correcta) ? '¡Correcto!' : '¡Incorrecto!',
            text: (indice === correcta) ? '¡Bien hecho!' : `La respuesta correcta era: ${preguntas[preguntaActual].opciones[correcta]}`,
            icon: (indice === correcta) ? 'success' : 'error',
            // confirmButtonText: 'Siguiente', // Removemos el botón
            showConfirmButton: false, // Aseguramos que no se muestre el botón de confirmación
            allowOutsideClick: false,
            timer: 2500, // El timer sigue funcionando para cerrar automáticamente
            timerProgressBar: true,
            didClose: () => {
                if (preguntaActual < preguntas.length - 1) {
                    siguientePregunta();
                } else {
                    mostrarResultadoFinal();
                }
            }
        });

        if (indice === correcta) {
            puntaje++;
        }
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
    siguienteBtn.style.display = "none";
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
    seleccionarPreguntasAleatorias();
    preguntaActual = 0;
    puntaje = 0;
    respuestasSeleccionadas = new Array(preguntas.length).fill(null);
    mostrarPregunta();
    const siguienteBtn = document.getElementById("siguiente-btn");
    if (siguienteBtn) siguienteBtn.style.display = "none";
    document.getElementById("reiniciar-btn").style.display = "none";
    clearTimeout(temporizadorSiguientePregunta);
}

// Iniciar juego
reiniciarJuego();
const siguienteBtnInicial = document.getElementById("siguiente-btn");
if (siguienteBtnInicial) siguienteBtnInicial.style.display = "none";
document.getElementById("reiniciar-btn").style.display = "none";