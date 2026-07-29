var filtroActual = 'todas';


// boton pa agregar img
document.getElementById('btn-agregar').addEventListener('click', function(e) {
  e.preventDefault();

  var titulo = document.getElementById('titulo').value.trim();
  var url = document.getElementById('url').value.trim();

  if (titulo === '' || url === '') {
    document.getElementById('error').style.display = 'block';
    return;
  }

  document.getElementById('error').style.display = 'none';

  var tarjeta = document.createElement('div');
  tarjeta.classList.add('tarjeta');
  tarjeta.innerHTML = `
    <img src="${url}" alt="${titulo}">
    <p>${titulo}</p>
    <div class="acciones">
      <button class="btn-eliminar">Eliminar</button>
      <button class="btn-favorito">Favorito</button>
    </div>
  `;

  tarjeta.querySelector('.btn-eliminar').addEventListener('click', function() {
    tarjeta.remove();
    actualizarStats();
    actualizarVacio();
  });

  tarjeta.querySelector('.btn-favorito').addEventListener('click', function() {
    tarjeta.classList.toggle('favorito');
    actualizarStats();
    aplicarFiltro(filtroActual);
  });

  document.getElementById('galeria').appendChild(tarjeta);
  document.getElementById('titulo').value = '';
  document.getElementById('url').value = '';

  actualizarStats();
  actualizarVacio();
  aplicarFiltro(filtroActual);
});

document.getElementById('btn-borrar').addEventListener('click', function() {
  document.querySelectorAll('.tarjeta').forEach(function(t) { t.remove(); });
  actualizarStats();
  actualizarVacio();
});

document.querySelectorAll('.filtro').forEach(function(btn) {
  btn.addEventListener('click', function() {
    filtroActual = btn.dataset.filtro;
    aplicarFiltro(filtroActual);
  });
});

function actualizarStats() {
  var todas = document.querySelectorAll('.tarjeta').length;
  var favs = document.querySelectorAll('.tarjeta.favorito').length;
  document.getElementById('stat-total').textContent = todas;
  document.getElementById('stat-favs').textContent = favs;
  document.getElementById('stat-nofavs').textContent = todas - favs;
}

function actualizarVacio() {
  var hayTarjetas = document.querySelectorAll('.tarjeta').length > 0;
  document.getElementById('vacio').style.display = hayTarjetas ? 'none' : 'block';
}

function aplicarFiltro(filtro) {
  document.querySelectorAll('.tarjeta').forEach(function(t) {
    t.classList.remove('oculta');
    if (filtro === 'favoritas' && !t.classList.contains('favorito')) t.classList.add('oculta');
    if (filtro === 'no-favoritas' && t.classList.contains('favorito')) t.classList.add('oculta');
  });
}
