
// api de la tienda
var API_URL = "https://fakestoreapi.com";

// api de mierda con muchos errores.
var TRANSLATE_API = "https://translate.googleapis.com/translate_a/single";

// carrito que se guarda en la localstorage (cache del navegador) para que no se pierdan los productos
var cart = [];
var cartGuardado = localStorage.getItem('cyber_cart');
if (cartGuardado) {
    cart = JSON.parse(cartGuardado);
}

// guarda los productos que se muestran por si la api de mierda falla
var activeProduct = null;

// si se tradujo correctamente las guarda en cache para que no las pida de vuelta
var translationCache = {};

// si la api de mierda se cae o lo que sea no pide traducciones de mas
var traduccionSinCupo = false;


window.addEventListener('DOMContentLoaded', function () {
    
    // se reinicia el login si se apreta F5
    localStorage.removeItem('cyber_token');
    localStorage.removeItem('cyber_username');

    loadCategories();
    loadProducts('todos');
    updateCartUI();

    // al dar F5 o entrar a la web se muestra el login siempre
    openModal('loginModal');
});

async function translateText(texto) {
    // si no se encuentra el texto, no se traduce 
    if (!texto) {
        return texto;
    }

    // si la traduccion de la api de mierda falla, no se traduce
    if (traduccionSinCupo) {
        return texto;
    }

    // si se tradujo antes, se muestra la traduccion guardada en cache
    if (translationCache[texto]) {
        return translationCache[texto];
    }

    try {
        var url = TRANSLATE_API +
            "?client=gtx&sl=en&tl=es&dt=t&q=" + encodeURIComponent(texto);

        var respuesta = await fetch(url);
        var datos = await respuesta.json();

        // la api de mierda devuelve esto, [[["Hola","Hello",null,null,1]], null, "en"]
        // esto junta los pedacitos que da la api de mierda para juntarlos en texto legible
        var traducido = "";
        var pedacitos = datos[0];

        for (var i = 0; i < pedacitos.length; i++) {
            traducido += pedacitos[i][0];
        }

        if (!traducido) {
            traducido = texto; // por si algo falla, dejamos el texto original
        }

        translationCache[texto] = traducido;
        return traducido;

    } catch (error) {
        console.error("Error al traducir texto:", error);
        return texto;
    }
}



// la api de la tienda muestra las categorias
async function loadCategories() {
    try {
        var respuesta = await fetch(API_URL + "/products/categories");
        var categorias = await respuesta.json();
        var contenedor = document.getElementById('categories-box');

        // esto crea un boton en el header para cada categoria y si a la api de mierda le pinta funcionar la traduce
        for (var i = 0; i < categorias.length; i++) {
            var categoria = categorias[i];
            crearBotonDeCategoria(categoria, contenedor);
        }

    } catch (error) {
        console.error("Error al cargar categorías:", error);
    }
}

// agrega el contenedor de la categoria en el header, y si a la api de mierda le pinta lo traduce
function crearBotonDeCategoria(categoria, contenedor) {
    var boton = document.createElement('button');
    boton.className = 'category-btn';
    boton.textContent = "📁 " + categoria;

    // si se interactua con el boton, carga los productos de esa categoria
    boton.addEventListener('click', function () {
        loadProducts(categoria, boton);
    });

    contenedor.appendChild(boton);

    // si la api de mierda funciona, traduce el nombre de la categoria
    // si la api de mierda falla, deja el nombre original
    translateText(categoria).then(function (traducido) {
        boton.textContent = "📁 " + traducido;
        boton.dataset.translated = traducido;
    });
}



// esto carga productos de cada categoria

async function loadProducts(categoriaElegida, botonElegido) {
    var catalogo = document.getElementById('catalog');
    var tituloSeccion = document.getElementById('sectionTitle');

    catalogo.innerHTML = '<div class="loading">Sincronizando con FakeStoreAPI...</div>';

    // se quitan  los estilos de "active" de todos los botones de categoria
    var botones = document.querySelectorAll('.category-btn');
    for (var i = 0; i < botones.length; i++) {
        botones[i].classList.remove('active');
    }

    // le ponemos el estilo de "active" al boton de la categoria elegida, o al boton de "todos" si no hay categoria elegida
    if (botonElegido) {
        botonElegido.classList.add('active');
    } else {
        document.getElementById('btn-all').classList.add('active');
    }

    // si la categoria elegida es "todos", se cargan todos los productos, sino se cargan los productos de la categoria elegida
    var endpoint = API_URL + "/products";
    if (categoriaElegida !== 'todos') {
        endpoint = API_URL + "/products/category/" + categoriaElegida;

        var nombreParaMostrar = categoriaElegida;
        if (botonElegido && botonElegido.dataset.translated) {
            nombreParaMostrar = botonElegido.dataset.translated;
        }
        tituloSeccion.innerText = "Categoría: " + nombreParaMostrar;
    } else {
        tituloSeccion.innerText = "Todos los Productos";
    }


    try {
        var respuesta = await fetch(endpoint);
        var productos = await respuesta.json();
        renderCatalog(productos);
    } catch (error) {
        catalogo.innerHTML = '<div class="loading" style="color:var(--danger)">Error al recuperar productos de la API.</div>';
    }
}


// dibuja el catalogo de productos en la pagina

function renderCatalog(productos) {
    var catalogo = document.getElementById('catalog');
    catalogo.innerHTML = "";

    for (var i = 0; i < productos.length; i++) {
        crearTarjetaDeProducto(productos[i], catalogo);
    }
}

// Crea una tarjeta (card) para un producto y la agrega al catálogo
function crearTarjetaDeProducto(producto, catalogo) {
    var tarjeta = document.createElement('div');
    tarjeta.className = 'card';

    tarjeta.innerHTML =
        '<div class="card-img-container">' +
        '  <img src="' + producto.image + '" alt="' + producto.title + '" class="card-img">' +
        '</div>' +
        '<div class="card-info">' +
        '  <div class="card-title" title="' + producto.title + '">' + producto.title + '</div>' +
        '  <div class="card-bottom">' +
        '    <span class="price">$' + producto.price.toFixed(2) + '</span>' +
        '    <button class="buy-btn">Ver más</button>' +
        '  </div>' +
        '</div>';

    // Botón "Ver más"
    var botonVerMas = tarjeta.querySelector('.buy-btn');
    botonVerMas.addEventListener('click', function (evento) {
        evento.stopPropagation();
        openProductDetails(producto);
    });

    // Toda la tarjeta también es clickeable
    tarjeta.addEventListener('click', function () {
        openProductDetails(producto);
    });

    catalogo.appendChild(tarjeta);

    // Traducimos el título en segundo plano (la tarjeta ya se ve mientras tanto)
    translateText(producto.title).then(function (tituloTraducido) {
        producto.title = tituloTraducido;
        var elementoTitulo = tarjeta.querySelector('.card-title');
        if (elementoTitulo) {
            elementoTitulo.textContent = tituloTraducido;
            elementoTitulo.title = tituloTraducido;
        }
    });
}


// ==========================================
// MODAL DE DETALLE DE PRODUCTO
// ==========================================
function openProductDetails(producto) {
    activeProduct = producto;

    document.getElementById('modalImg').src = producto.image;
    document.getElementById('modalTitle').innerText = producto.title;
    document.getElementById('modalDesc').innerText = producto.description;
    document.getElementById('modalPrice').innerText = "$" + producto.price.toFixed(2);

    var botonAgregar = document.getElementById('addToCartBtn');
    botonAgregar.onclick = function () {
        addToCart(producto);
        closeModal('productModal');
    };

    openModal('productModal');

    // Traducimos la descripción solo la primera vez que se abre este producto
    if (!producto._descTranslated) {
        document.getElementById('modalDesc').innerText = "Traduciendo descripción...";

        translateText(producto.description).then(function (descripcionTraducida) {
            producto.description = descripcionTraducida;
            producto._descTranslated = true;

            // Solo actualizamos el texto si seguimos viendo el mismo producto
            if (activeProduct === producto) {
                document.getElementById('modalDesc').innerText = descripcionTraducida;
            }
        });
    }
}



// Usuario y contraseña obligatorios para poder entrar
var USUARIO_CORRECTO = "mor2314";
var CONTRASENA_CORRECTA = "83r5^";

function handleLogin() {
    var username = document.getElementById('usernameInput').value.trim();
    var password = document.getElementById('passwordInput').value.trim();

    if (!username || !password) {
        alert("Escribe tu usuario y contraseña.");
        return;
    }

    if (username !== USUARIO_CORRECTO || password !== CONTRASENA_CORRECTA) {
        alert("Usuario o contraseña incorrectos.");
        return;
    }

    // Guardamos el usuario en el navegador
    localStorage.setItem('cyber_token', 'demo-token');
    localStorage.setItem('cyber_username', username);

    closeModal('loginModal');
    loadUserProfile();
}

// Muestra el nombre de usuario guardado en la esquina de arriba
function loadUserProfile() {
    var username = localStorage.getItem('cyber_username');
    if (!username) {
        username = 'Usuario';
    }

    document.getElementById('authBox').innerHTML =
        '<div class="user-profile">' +
        '  <span>👾 Hola, <b>' + username + '</b></span>' +
        '  <button class="remove-item" onclick="logout()" style="font-size:12px;">[Salir]</button>' +
        '</div>';
}

function logout() {
    localStorage.removeItem('cyber_token');
    localStorage.removeItem('cyber_username');
    location.reload();
}


// ==========================================
// SISTEMA DEL CARRITO DE COMPRAS
// ==========================================
function addToCart(producto) {
    // Buscamos si el producto ya está en el carrito
    var yaEstaEnCarrito = null;
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id === producto.id) {
            yaEstaEnCarrito = cart[i];
            break;
        }
    }

    if (yaEstaEnCarrito) {
        // Si ya está, solo sumamos uno a la cantidad
        yaEstaEnCarrito.quantity = yaEstaEnCarrito.quantity + 1;
    } else {
        // Si no está, lo agregamos como nuevo con cantidad 1
        var nuevoItem = Object.assign({}, producto);
        nuevoItem.quantity = 1;
        cart.push(nuevoItem);
    }

    saveCart();
}

function removeFromCart(idProducto) {
    var nuevoCarrito = [];
    for (var i = 0; i < cart.length; i++) {
        if (cart[i].id !== idProducto) {
            nuevoCarrito.push(cart[i]);
        }
    }
    cart = nuevoCarrito;
    saveCart();
}

function saveCart() {
    localStorage.setItem('cyber_cart', JSON.stringify(cart));
    updateCartUI();
}

function updateCartUI() {
    // Contamos cuántos productos hay en total (sumando cantidades)
    var totalProductos = 0;
    for (var i = 0; i < cart.length; i++) {
        totalProductos = totalProductos + cart[i].quantity;
    }
    document.getElementById('cartCount').innerText = totalProductos;

    var contenedor = document.getElementById('cartItemsContainer');
    var elementoTotal = document.getElementById('cartTotal');

    // Si el carrito está vacío, mostramos un mensaje y terminamos
    if (cart.length === 0) {
        contenedor.innerHTML = '<p style="color:var(--text-muted); text-align:center; padding: 20px 0;">El carrito está vacío.</p>';
        elementoTotal.innerText = "$0.00";
        return;
    }

    // Armamos el HTML de cada producto del carrito y sumamos el total
    var totalPrecio = 0;
    var htmlCarrito = "";

    for (var j = 0; j < cart.length; j++) {
        var item = cart[j];
        var subtotal = item.price * item.quantity;
        totalPrecio = totalPrecio + subtotal;

        htmlCarrito +=
            '<div class="cart-item">' +
            '  <div class="cart-item-title" title="' + item.title + '">(' + item.quantity + 'x) ' + item.title + '</div>' +
            '  <div style="font-weight:bold; white-space:nowrap;">$' + subtotal.toFixed(2) + '</div>' +
            '  <button class="remove-item" onclick="removeFromCart(' + item.id + ')">❌</button>' +
            '</div>';
    }

    contenedor.innerHTML = htmlCarrito;
    elementoTotal.innerText = "$" + totalPrecio.toFixed(2);
}

function checkoutCart() {
    if (cart.length === 0) {
        alert("Añade productos antes de pagar.");
        return;
    }

    alert("¡Compra procesada con éxito a través de FakeStoreAPI!");
    cart = [];
    saveCart();
    closeModal('cartModal');
}


// ==========================================
// CONTROLADORES DE MODALES (ventanas emergentes)
// ==========================================
function openModal(id) {
    document.getElementById(id).classList.add('active');
}

function closeModal(id) {
    document.getElementById(id).classList.remove('active');
}
