const grupo1Preguntas = [
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
        pregunta: "¿Quién debe comunicar el inicio y fin de trabajos que liberan humos y pueden activar detectores de incendio?",
        opciones: ["Jefe de Turno", "Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Responsable de la tarea"],
        respuesta: 3,
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
        pregunta: "¿En qué tipo de alarma se pueden usar las salidas de emergencia?",
        opciones: ["Evacuación", "Fuga", "Incendio", "General"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué se debe hacer si se abandona ZRC por puertas de emergencia durante una fuga?",
        opciones: ["Regresar inmediatamente", "Permanecer fuera de ZRC y esperar instrucciones", "Dirigirse a los Puntos de Reunión", "Buscar refugio en otro edificio"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué alarma la necesidad de concentrarse en los Puntos de Reunión?",
        opciones: ["Alarma General", "Alarma de Fuga", "Alarma de Evacuación", "Alarma de Intrusión"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué debe hacer el personal al escuchar la alarma de Intrusión?",
        opciones: ["Abandonar el edificio", "Dirigirse a los Puntos de Reunión", "Permanecer en su lugar de trabajo o buscar refugio", "Ayudar a la Brigada de Emergencia"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién convoca a la Brigada de Emergencia ante un incendio?",
        opciones: ["Jefe de Turno CNA I o CNA II", "Operador del Sistema Primario"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué se debe hacer si se activa un detector de incendio por trabajos con polvo?",
        opciones: ["Evacuar inmediatamente", "Ignorar la alarma", "Comunicar al Jefe de Turno para verificar la falsa alarma", "Dirigirse a los Puntos de Reunión"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué debe hacer sala de control si se recibe un aviso falso de incendio?",
        opciones: ["Ignorar la alarma", "Evacuar inmediatamente", "Comunicar la causa por altavoces", "Dirigirse a los Puntos de Reunión"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuál es el propósito principal de los Puntos de Reunión en la CNA?",
        opciones: ["Contabilizar vehículos", "Distribuir Iodo", "Separar personal contaminado y no contaminado", "Medir radiación"],
        respuesta: 2,
    },
    {
        pregunta: "¿Cuántos Puntos de Reunión se mencionan en el documento?",
        opciones: ["3", "8", "10", "6"],
        respuesta: 3,
    },
    {
        pregunta: "¿Dónde se encuentra ubicado el Punto de Reunión Nº 1?",
        opciones: ["Comedor de Planta", "Sala de Visitas", "Predio del Edificio del Simulador", "Sala de Control CNA II"],
        respuesta: 0,
    },
    {
        pregunta: "¿Qué edificio se utiliza como Punto de Reunión Nº 2?",
        opciones: ["Edificio UBA", "CICE", "Simulador", "Sala de Visitas Relaciones Públicas"],
        respuesta: 1,
    },
    {
        pregunta: "¿Dónde se encuentra el Punto de Reunión Nº 5?",
        opciones: ["Edificio Simulador", "Comedor Planta", "Sala de Visitas", "Primer piso edificio portería principal (1UYE)"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué edificio se utiliza como Punto de Reunión Nº 6?",
        opciones: ["Simulador", "CICE", "Sala de Visitas", "Edificio del Comedor de Planta"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué tipo de alarma requiere que el personal se dirija a los Puntos de Reunión?",
        opciones: ["Alarma de Incendio", "Alarma de Intrusión", "Alarma de Fuga", "Alarma General"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué actitudes se esperan del personal durante una Alarma General?",
        opciones: ["Pánico y confusión", "Desorden y caos", "Serenidad y orden", "Ignorar la alarma"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quiénes deben acatar las indicaciones en los Puntos de Reunión?",
        opciones: ["Solo visitas", "Solo personal de seguridad", "Solo coordinadores", "Todo el personal"],
        respuesta: 3,
    },
    {
        pregunta: "¿Cuándo se puede abandonar un Punto de Reunión?",
        opciones: ["Cuando lo decida el personal", "Después de 5 minutos", "Durante la alarma roja", "Cuando el Coordinador lo determine"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué responsabilidad tiene el personal del Sitio CNA con respecto a las visitas durante una Alarma General?",
        opciones: ["Ignorarlas", "Dejarlas en la entrada", "Llevarlas al Punto de Reunión Nº 1", "Enviarlas a casa"],
        respuesta: 2,
    },
    {
        pregunta: "¿A qué Punto de Reunión deben llevarse las visitas?",
        opciones: ["Nº 2", "Nº 3", "Nº 6", "Nº 1"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué tareas pueden asignar los coordinadores a los asistentes?",
        opciones: ["Ignorar la alarma", "Abandonar el punto", "Comunicación VHF y registro de personal"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué sistemas se utilizan para registrar al personal en los Puntos de Reunión?",
        opciones: ["Solo VHF", "Solo planillas de vehículos", "Ninguno", "Formulario de Asistencia"],
        respuesta: 3,
    },
    {
        pregunta: "¿Cómo se establece la comunicación con el CICE desde los Puntos de Reunión?",
        opciones: ["Por radio personal", "Por señales de humo", "Por mensajería", "Comunicación telefónica o VHF"],
        respuesta: 3,
    },
    {
        pregunta: "¿Cuándo se distribuyen los comprimidos de Ioduro de Potasio?",
        opciones: ["Al llegar al punto", "Durante alarma de incendio", "Siempre", "Al declararse Alerta Verde"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué información se debe comunicar al CICE después de finalizar el registro de personas?",
        opciones: ["Solo número de vehículos", "Solo número de plazas", "Nada", "Número de vehículos y plazas disponibles"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué alarma indica la necesidad de concentrarse en los Puntos de Reunión?",
        opciones: ["Alarma General", "Alarma de Fuga", "Alarma de Evacuación", "Alarma de Intrusión"],
        respuesta: 0,
    },
]

const grupo2Preguntas = [
    {
        pregunta: "¿Qué debe hacer el personal al escuchar la alarma de Intrusión?",
        opciones: ["Abandonar el edificio", "Dirigirse a los Puntos de Reunión", "Permanecer en su lugar de trabajo o buscar refugio", "Ayudar a la Brigada de Emergencia"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué se debe hacer si se activa un detector de incendio por trabajos con polvo?",
        opciones: ["Evacuar inmediatamente", "Ignorar la alarma", "Comunicar al Jefe de Turno para verificar la falsa alarma", "Dirigirse a los Puntos de Reunión"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quién debe comunicar el inicio y fin de trabajos que liberan humos y pueden activar detectores de incendio?",
        opciones: ["Jefe de Turno", "Oficial de Radioprotección", "Técnico de Seguridad Industrial", "Responsable de la tarea"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué significa la alarma 'General'?",
        opciones: ["Acción Urgente", "Acción Preventiva", "Concentración en los Puntos de Reunión", "Emergencia Convencional"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué se debe hacer si se abandona ZRC por puertas de emergencia durante una fuga?",
        opciones: ["Regresar inmediatamente", "Permanecer fuera de ZRC y esperar instrucciones", "Dirigirse a los Puntos de Reunión", "Buscar refugio en otro edificio"],
        respuesta: 1,
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
        pregunta: "¿En qué tipo de alarma se pueden usar las salidas de emergencia?",
        opciones: ["Evacuación", "Fuga", "Incendio", "General"],
        respuesta: 1,
    },
    {
        pregunta: "¿Qué alarma indica la necesidad de concentrarse en los Puntos de Reunión?",
        opciones: ["Alarma General", "Alarma de Fuga", "Alarma de Evacuación", "Alarma de Intrusión"],
        respuesta: 0,
    },
    {
        pregunta: "¿Dónde se encuentra ubicado el Punto de Reunión Nº 1?",
        opciones: ["Comedor de Planta", "Sala de Visitas", "Predio del Edificio del Simulador", "Sala de Control CNA II"],
        respuesta: 2,
    },
    {
        pregunta: "¿Qué edificio se utiliza como Punto de Reunión Nº 2?",
        opciones: ["Edificio UBA", "CICE", "Simulador", "Sala de Visitas Relaciones Públicas"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué edificio se utiliza como Punto de Reunión Nº 6 de contratistas?",
        opciones: ["Sala de Control", "CICE", "Sala de Visitas", "Edificio del Comedor de Planta"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué tipo de alarma requiere que el personal se dirija a los Puntos de Reunión?",
        opciones: ["Alarma de Incendio", "Alarma de Intrusión", "Alarma de Fuga", "Alarma General"],
        respuesta: 3,
    },
    {
        pregunta: "¿Qué actitudes se esperan del personal durante una Alarma General?",
        opciones: ["Pánico y confusión", "Desorden y caos", "Serenidad y orden", "Ignorar la alarma"],
        respuesta: 2,
    },
    {
        pregunta: "¿Quiénes deben acatar las indicaciones en los Puntos de Reunión?",
        opciones: ["Solo visitas", "Solo personal de seguridad", "Solo coordinadores", "Todo el personal"],
        respuesta: 3,
    },
    {
        pregunta: "¿Cuándo se puede abandonar un Punto de Reunión?",
        opciones: ["Cuando lo decida el personal", "Después de 5 minutos", "Durante la alarma roja", "Cuando el Coordinador lo determine"],
        respuesta: 3,
    },
]

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
    document.getElementById("seleccion-tipo-container").style.display = "block";
});

document.querySelectorAll(".tipo-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const tipo = btn.dataset.tipo;
        if (tipo === "cna") {
            seleccionarPreguntasAleatorias(grupo1Preguntas);
        } else if (tipo === "contratista") {
            seleccionarPreguntasAleatorias(grupo2Preguntas);
        }
        document.getElementById("seleccion-tipo-container").style.display = "none";
        document.getElementById("quiz-container").style.display = "block";
        mostrarPregunta();
    });
});

function seleccionarPreguntasAleatorias(preguntasDisponibles) {
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
    document.getElementById("nombre-container").style.display = "flex";

    // Limpiar el campo de nombre para un nuevo jugador
    document.getElementById("nombre-input").value = "";
}

document.getElementById("quiz-container").style.display = "none";
document.getElementById("reiniciar-btn").style.display = "none";
document.getElementById("seleccion-tipo-container").style.display = "none";