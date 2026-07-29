
// boton dde cambiar el titulo
document.getElementById('btnTitulo').addEventListener('click', function () {
  document.getElementById('titulo').textContent = prompt('Nuevo título:');
});

// boton de cambiar el parrafo
document.getElementById('btnParrafo').addEventListener('click', function () {
  document.getElementById('parrafo').innerHTML = prompt('Nuevo párrafo:');
});

// url de la imagen
document.getElementById('btnImagen').addEventListener('click', function () {
  document.getElementById('imagen').src = prompt('URL de la imagen:');
});

// poner un mensaje 
document.getElementById('btnMostrar').addEventListener('click', function () {
  document.getElementById('salidaMensaje').textContent = prompt('Tu mensaje:');
});

// meterle resalto en amarillo 
document.getElementById('btnAgregar').addEventListener('click', function () {
  document.getElementById('parrafoClase').classList.add('resaltado');
});

// quitar el resalto en amarillo
document.getElementById('btnQuitar').addEventListener('click', function () {
  document.getElementById('parrafoClase').classList.remove('resaltado');
});

// agregar cosas a la lista 
document.getElementById('btnItem').addEventListener('click', function () {
  const li = document.createElement('li');
  li.textContent = prompt('Nuevo elemento:');
  document.getElementById('lista').appendChild(li);
});

// boton de modo oscuro/blanco
document.getElementById('btnDark').addEventListener('click', function () {
  document.body.classList.toggle('dark');
});

// mensaje con el boton de enviar
document.getElementById('btnEnviar').addEventListener('click', function () {
  const nombre  = document.getElementById('fNombre').value.trim();
  const color   = document.getElementById('fColor').value.trim();
  const mensaje = document.getElementById('fMensaje').value.trim();

  document.getElementById('errNombre').textContent  = nombre  ? '' : 'Completá el nombre.';
  document.getElementById('errColor').textContent   = color   ? '' : 'Completá el color.';
  document.getElementById('errMensaje').textContent = mensaje ? '' : 'Completá el mensaje.';

  if (!nombre || !color || !mensaje) return;

  const card = document.createElement('div');
  card.classList.add('card', 'mb-3', 'p-3');
  card.style.borderLeft = '4px solid ' + color;
  card.innerHTML = `<strong>${nombre}</strong> — <small style="color:${color}">${color}</small><p class="mb-0 mt-1">${mensaje}</p>`;
  document.getElementById('tarjetas').appendChild(card);

  document.getElementById('fNombre').value  = '';
  document.getElementById('fColor').value   = '';
  document.getElementById('fMensaje').value = '';
});
