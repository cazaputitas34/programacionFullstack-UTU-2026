let coleccion = [];
let filtroActivo = 'Todos';

function agregar(e) {
  e.preventDefault();

  const nombre = document.querySelector('#nombre').value.trim();
  const desc   = document.querySelector('#desc').value.trim();
  const tipo   = document.querySelector('#tipo').value;
  const estado = document.querySelector('#estado').value;
  const cal    = parseInt(document.querySelector('#cal').value);
  const img    = document.querySelector('#img').value.trim();
  const error  = document.querySelector('#error');

  // Validación
  if (!nombre || isNaN(cal) || cal < 1 || cal > 5) {
    error.style.display = 'block';
    return;
  }
  error.style.display = 'none';

  const item = { id: Date.now(), nombre, desc, tipo, estado, cal, img };
  coleccion.push(item);

  crearTarjeta(item);
  actualizarContador();

  // Limpiar formulario
  document.querySelector('#nombre').value = '';
  document.querySelector('#desc').value   = '';
  document.querySelector('#cal').value    = '';
  document.querySelector('#img').value    = '';
}

function crearTarjeta(item) {
  const grid = document.querySelector('#tarjetas');

  const card = document.createElement('div');
  card.classList.add('tarjeta');
  card.setAttribute('data-id', item.id);
  card.dataset.tipo   = item.tipo;
  card.dataset.estado = item.estado;

  const emojis = { Videojuego: '🎮', Película: '🎬', Serie: '📺', Otro: '✨' };

  const imgHTML = item.img ? `<img src="${item.img}" alt="${item.nombre}">` : '';

  const claseEstado = {
    'Pendiente':   'badge-pendiente',
    'En progreso': 'badge-progreso',
    'Terminado':   'badge-terminado'
  }[item.estado] || 'badge-pendiente';

  const estrellas = '★'.repeat(item.cal) + '☆'.repeat(5 - item.cal);

  card.innerHTML = `
    ${imgHTML}
    <div class="nombre" onclick="this.classList.toggle('resaltado')">${item.nombre}</div>
    <div class="desc">${item.desc || 'Sin descripción'}</div>
    <span class="badge badge-tipo">${emojis[item.tipo]} ${item.tipo}</span>
    <span class="badge ${claseEstado}" data-badge-estado>${item.estado}</span>
    <div class="estrellas">${estrellas}</div>
    <div class="acciones">
      <button class="btn-eliminar" onclick="eliminar(${item.id})">🗑 Eliminar</button>
      <button class="btn-estado"   onclick="cambiarEstado(${item.id})">🔄 Estado</button>
    </div>
  `;

  grid.appendChild(card);
  actualizarVista();
}

function eliminar(id) {
  coleccion = coleccion.filter(i => i.id !== id);
  const card = document.querySelector(`[data-id="${id}"]`);
  card.remove();
  actualizarContador();
  actualizarVista();
}

function cambiarEstado(id) {
  const item = coleccion.find(i => i.id === id);
  const ciclo = {
    'Pendiente':   'En progreso',
    'En progreso': 'Terminado',
    'Terminado':   'Pendiente'
  };
  item.estado = ciclo[item.estado];

  const card = document.querySelector(`[data-id="${id}"]`);
  card.dataset.estado = item.estado;

  const clases = {
    'Pendiente':   'badge-pendiente',
    'En progreso': 'badge-progreso',
    'Terminado':   'badge-terminado'
  };
  const badge = card.querySelector('[data-badge-estado]');
  badge.className = `badge ${clases[item.estado]}`;
  badge.textContent = item.estado;

  actualizarVista();
}

function filtrar(btn) {
  document.querySelectorAll('.filtros button').forEach(b => b.classList.remove('activo'));
  btn.classList.add('activo');
  filtroActivo = btn.dataset.f;
  actualizarVista();
}

function actualizarVista() {
  const tipos   = ['Videojuego', 'Película', 'Serie', 'Otro'];
  const estados = ['Pendiente', 'En progreso', 'Terminado'];
  let visibles  = 0;

  document.querySelectorAll('.tarjeta').forEach(card => {
    const mostrar =
      filtroActivo === 'Todos' ||
      (tipos.includes(filtroActivo)   && card.dataset.tipo   === filtroActivo) ||
      (estados.includes(filtroActivo) && card.dataset.estado === filtroActivo);

    card.style.display = mostrar ? '' : 'none';
    if (mostrar) visibles++;
  });

  document.querySelector('#vacio').style.display = visibles === 0 ? 'block' : 'none';
}

function actualizarContador() {
  document.querySelector('#contador').textContent = `Elementos agregados: ${coleccion.length}`;
}

function toggleModo() {
  document.body.classList.toggle('claro');
  const btn = document.querySelector('#btn-modo');
  btn.textContent = document.body.classList.contains('claro') ? ' Modo oscuro' : ' Modo claro';
}
