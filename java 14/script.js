const API_URL_IMAGENES = "https://api.thecatapi.com/v1/images/search";

let imagenActualId = null;
let votosPositivos = 0;
let votosNegativos = 0;

async function traerGato() {
  limpiarMensaje();

  try {
    const respuesta = await fetch(API_URL_IMAGENES);
    const datos = await respuesta.json();
    const gato = datos[0];

    imagenActualId = gato.id;

    const img = document.getElementById("imagen-gato");
    img.src = gato.url;
    img.style.display = "block";

    document.getElementById("placeholder").style.display = "none";
    document.getElementById("votacion").style.display = "flex";

  } catch (error) {
    mostrarError("No se pudo obtener la imagen. Revisá tu conexión.");
    console.error(error);
  }
}

function votar(valor) {
  if (!imagenActualId) {
    mostrarError("Primero traé una imagen.");
    return;
  }

   // Votos
  if (valor === 1) {
    votosPositivos++;
    document.getElementById("positivos").textContent = votosPositivos;
    mostrarOk("👍 ¡Voto positivo registrado!");
  } else {
    votosNegativos++;
    document.getElementById("negativos").textContent = votosNegativos;
    mostrarOk("👎 Voto negativo registrado.");
  }

  // nueva imagen despues de votar
  traerGato();
}

function mostrarError(texto) {
  const msg = document.getElementById("mensaje");
  msg.textContent = texto;
  msg.className = "error";
}

function mostrarOk(texto) {
  const msg = document.getElementById("mensaje");
  msg.textContent = texto;
  msg.className = "ok";
}

function limpiarMensaje() {
  const msg = document.getElementById("mensaje");
  msg.textContent = "";
  msg.className = "";
}