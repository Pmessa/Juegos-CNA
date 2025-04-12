const preguntasOriginales =[
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
        pregunta: "¿A QUE LLAMAMOS CONDICIONES METEOROLÓGICAS SEVERAS?",
        opciones: ["A VIENTOS MAYORES A 70 KM/H", "EVENTOS ATMOSFÉRICOS CAPAZ DE PRODUCIR DIRECTA O INDIRECTAMENTE DAÑOS A PERSONAS O MATERIALES (EQUIPOS Y/O EDIFICIOS)", "SE TRATA DE SUCESOS DE ORIGEN INTERNO CUYO RESULTADO REPRESENTE UN RIESGO SIGNIFICATIVO DE LIBERACIÓN DE MATERIAL RADIACTIVO O QUÍMICO PELIGROSO","FENÓMENOS CLIMÁTICOS PELIGROSOS"],
        respuesta: 1
    },
        {
          pregunta: "¿Qué es la ORE?",
          opciones: [
            "Es la organización del emplazamiento que debe dar respuesta ante Emergencia. Está conformada por el personal preparado, entrenado y calificado para cumplir un rol durante una situación de emergencia.",
            "Es la Autoridad Regulatoria Nuclear.",
            "Es el espacio físico ubicado fuera del emplazamiento a donde se trasladará el Comando de Emergencia."
          ],
          respuesta: 0
        },
        {
          pregunta: "¿Para qué tipo de Emergencias se aplica el Plan de Emergencia?",
          opciones: [
            "Nuclear.",
            "Radiológica.",
            "Convencional."
          ],
          respuesta: 1
        },
        {
          pregunta: "Los objetivos a cumplir durante una Emergencia son:",
          opciones: [
            "Proteger la salud de los trabajadores y de la comunidad.",
            "Controlar la fuente.",
            "Minimizar los daños sobre equipos e instalaciones.",
            "Todas las anteriores."
          ],
          respuesta: 1
        },
          {
          pregunta: "Cómo debe actuar frente a una Alarma General",
          opciones: [
            "Abandonar las tareas, y concurrir a los Puntos de Reunión.",
            "Abandonar rápidamente el local donde se escucha la alarma utilizando las salidas habituales o de emergencia, hasta otro local donde no se escucha la alarma.",
            "Abandonar normalmente el local donde se escucha la alarma utilizando las salidas habituales hasta otro local donde no se escucha. Hacer el cambio de ropas si sale de ZRC."
          ],
          respuesta: 1
        },
        {
          pregunta: "Cómo debe actuar frente a una Alarma de Fuga",
          opciones: [
            "Abandonar las tareas, y concurrir a los Puntos de Reunión.",
            "Abandonar rápidamente el local donde se escucha la alarma utilizando las salidas habituales o de emergencia, hasta otro local donde no se escucha la alarma.",
            "Abandonar normalmente el local donde se escucha la alarma utilizando las salidas habituales hasta otro local donde no se escucha. Hacer el cambio de ropas si sale de ZRC."
          ]
        },
        {
          pregunta: "Cómo debe actuar frente a una alarma de Incendio:",
          opciones: [
            "Abandonar las tareas, y concurrir a los Puntos de Reunión.",
            "Abandonar rápidamente el local donde se escucha la alarma utilizando las salidas habituales o de emergencia, hasta otro local donde no se escucha la alarma.",
            "Alejarse del incendio. El personal de la Brigada de Emergencia debe acudir al lugar del evento de acuerdo al procedimiento PS-E-16."
          ]
        },
        {
          pregunta: "La Alarma General se emite cuando:",
          opciones: [
            "Hay probabilidad de emisión de material radioactivo al ambiente, lo que implica encontrarse en estado de Alerta Verde.",
            "Hay probabilidad de emisión de material radioactivo al ambiente, lo que implica encontrarse en estado de Alarma Roja.",
            "La emisión de material radioactivo al ambiente se está produciendo, lo que implica un estado de Alerta Verde.",
             "La emisión de material radioactivo al ambiente se está produciendo, lo que implica un estado de Alerta Roja.",
             "Se emite cuando es necesario concentrar al personal en los puntos de reunión."
          ]
        },
          {
          pregunta: "¿En una situación de emergencia la Alarma General es emitida en la etapa de pre-emisión radiactiva, por lo tanto, en dicha circunstancia se requiere del personal:",
          opciones: [
            "Dejar lo que está haciendo, y correr hacia los puntos de reunión.",
            "Serenidad, dirigirse al punto de reunión correspondiente y acatar las órdenes del coordinador."
          ]
        },
          {
          pregunta: "¿Cuándo se puede retirar el personal del Punto de Reunión?",
          opciones: [
            "Cuando el coordinador lo determine y de la orden de abandonar el punto de reunión.",
            "En cualquier momento, luego de haber firmado la evidencia objetiva de la capacitación."
          ]
        },
        {
          pregunta: "¿A qué Punto de Reunión debe concurrir el personal que se encuentra en la zona convencional de CNAI, que no pertenece a la ORE, al momento de declararse la Emergencia?",
          opciones: [
            "Punto de Reunión Nº 1 “Punto de Reunión Externo”.",
            "Punto de Reunión Nº 2: “Sala de visita Relaciones Públicas”.",
            "Punto de Reunión Nº 5: “CICE”."
          ]
        },
        {
          pregunta: "¿A qué Punto de Reunión debe concurrir el personal que se encuentra en la zona convencional de CNAII, que no pertenece a la ORE, al momento de declararse la Emergencia?",
          opciones: [
            "Punto de Reunión Nº 1 “Punto de Reunión Externo”.",
            "Punto de Reunión Nº 4: “Oficina de Personal de Turno de la Unidad II” UMA.",
            "Punto de Reunión Nº 6: “Edificio de Comedor”."
          ]
        },
        {
          pregunta: "¿Hacia dónde se deben dirigir contratistas, si se emite la Alarma General con la planta en Operación Normal o parada programada? ",
          opciones: [
            "Punto de Reunión Nº 2: “Sala de visita Relaciones Públicas”.",
            "Punto de Reunión Nº 6: “Edificio de Comedor”.",
            "Punto de Reunión Nº 4: “Oficina de Personal de Turno de la Unidad II” UMA."
          ]
        },
        {
          pregunta: "Ud. como miembro de la ORE estando disponible y ante la emisión de la Alarma General en la CNA I-II o al ser convocado por el Comando de Emergencia se debe dirigir a",
          opciones: [
            "Punto de Reunión Nº 2: “Sala de visita Relaciones Públicas”.",
            "Punto de Reunión Nº 5: “CICE”.",
            "Punto de Reunión Nº 1 “Punto de reunión Externo”."
          ]
        },
        {
          pregunta: "Ud. como miembro de la ORE no estando disponible y ante la emisión de la Alarma General en la CNA I-II se debe dirigir a:",
          opciones: [
            "Punto de Reunión Nº 2: “Sala de visita Relaciones Públicas”.",
            "Punto de Reunión Nº 5: “CICE”.",
            "Punto de Reunión Nº 1: “Punto de Reunión Externo”."
          ]
        },
        {
          pregunta: "Ud. como miembro de la ORE estando disponible y estando dentro de la Zona Radiológicamente Controlada, ante la emisión de la Alarma General en la CNA I-II o al ser convocado por el Comando de Emergencia se debe dirigir a",
          opciones: [
            "Punto de Reunión Nº 2: “Sala de visita Relaciones Públicas”.",
            "Punto de Reunión Nº 5: “CICE”.",
            "Punto de Reunión Nº 1 “Punto de reunión Externo”."
          ]
        },
        {
          pregunta: "En caso de ser convocado, ud. como miembro de la ORE debe presentarse en la CNA I-II en un plazo máximo de: ",
          opciones: [
            "60 min.",
            "120 min.",
            "180 min."
          ]
        },
        {
          pregunta: "Frente a la ocurrencia de un evento anormal significativo para la seguridad en un espacio/Instalación común, o no claramente definida el Jefe de la Emergencia en los primeros instantes será el:",
          opciones: [
            "Jefe Turno Unidad II.",
            "Gerente.",
            "Jefe Turno Unidad I."
          ]
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