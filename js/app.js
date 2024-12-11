
const anadir_compra = document.querySelectorAll('.comprarjuego');
const contador_carrito = document.getElementById('contador-carrito');
const modalTienda = document.getElementById('carrito-modal');
const cerrarModal = document.getElementById('cerrarcarrito');
const carrito_lista = document.getElementById('lista-carrito');
const comprar_producto = document.getElementById('comprar_producto');
const verCarrito = document.getElementById('vercarrito');

let carrito = [];


let totalCarrito = document.querySelector('.total-footer');

function actualizarCarrito() {
  contador_carrito.textContent = 'CANTIDAD DE ARTICULOS EN TU CARRITO: ' + carrito.length;
}

function agregarAlCarrito(producto) {
  carrito.push(producto);
  actualizarCarrito();
  mostrarModalCarrito(); 
}

function eliminarDelCarrito(index) {
  carrito = carrito.filter((producto, i) => i !== index);
  actualizarCarrito();
  mostrarModalCarrito(); 
}

function mostrarModalCarrito() {
  carrito_lista.innerHTML = '';

  carrito.forEach((producto, i) => {
    const li = document.createElement('li');
    li.textContent = producto.nombre;

    const botonEliminar = document.createElement('button');
    botonEliminar.textContent = 'Eliminar';
    botonEliminar.addEventListener('click', () => eliminarDelCarrito(i));

    li.appendChild(botonEliminar);
    carrito_lista.appendChild(li);
  });

  const totalCompra = carrito.reduce((acc, el) => acc + el.precio, 0);

  if (totalCarrito) {
    totalCarrito.textContent = `DEBES PAGAR UN TOTAL DE: $${totalCompra.toFixed(2)}`;
  } else {
    totalCarrito = document.createElement('div');
    totalCarrito.className = 'total-footer';
    totalCarrito.textContent = `NO DEBES PAGAR, NO HAS COMPRADO NADA: $${totalCompra.toFixed(2)}`;
    modalTienda.appendChild(totalCarrito);
  }

  modalTienda.style.display = 'flex';
}

function cerrarCarrito() {
  modalTienda.style.display = 'none';
}


function realizarCompra() {
  if (carrito.length === 0) {
    alert('El carrito se encuentra vacío. Debes agregar productos para comprar.');
    return;
  }

  alert('Se realizó la compra correctamente');
  carrito = []; 
  actualizarCarrito(); 
  modalTienda.style.display = 'none'; 
}

anadir_compra.forEach(boton => {
  boton.addEventListener('click', () => {
    const contenedorProducto = boton.parentNode; 
    const nombreProducto = contenedorProducto.querySelector('h2').textContent; 
    const precioProducto = parseFloat(contenedorProducto.querySelector('.precio').textContent.replace('$', '')); 

    agregarAlCarrito({ nombre: nombreProducto, precio: precioProducto });
  });
});

verCarrito.addEventListener('click', mostrarModalCarrito);

cerrarModal.addEventListener('click', cerrarCarrito);

comprar_producto.addEventListener('click', realizarCompra);




var footer = document.querySelector('#footer');
console.log(footer);

var h1 = document.createElement("h1");
console.log(h1);

var tituloh1 = document.createTextNode('CONTACTOS');
footer.appendChild(h1);
h1.appendChild(tituloh1);

var section3 = document.createElement('section');
console.log(section3);
footer.appendChild(section3);

var article7 = document.createElement('article');
section3.appendChild(article7);

var article8 = document.createElement('article');
section3.appendChild(article8);


var texto = document.createElement('span');
texto.textContent = 'lamejortiendavirtualdevideojuegos@gmail.com';
article7.appendChild(texto);

var texto2 = document.createElement('span');
texto2.textContent = '32155230852';
article8.appendChild(texto2);


footer.style.display = 'flex'; 
footer.style.backgroundColor='rgba(173, 216, 230, 0.9)'
footer.style.justifyContent = 'center';
footer.style.alignItems = 'center';
footer.style.flexDirection = 'column';
footer.style.borderRadius ='1px' 

h1.style.color = 'white';
h1.style.textAlign = 'center';

section3.style.display = 'flex';
section3.style.justifyContent = 'center';
section3.style.margin = '10px'; 

article7.style.border = '1px solid white';
article7.style.borderRadius='5px'
article7.style.textAlign = 'center';
article7.style.margin = '5px'; 

article8.style.border = '1px solid white';
article8.style.borderRadius='5px'
article8.style.textAlign = 'center';
article8.style.margin = '5px'; 

texto.style.color = 'white';
texto.style.fontWeight = 'bold';

texto2.style.color = 'white';
texto2.style.fontWeight = 'bold';