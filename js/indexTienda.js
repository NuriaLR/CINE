/*EN ESTE ARCHIVO CREO UNA TABLA CON LOS PRODUCTOS DE LA TIENDA, UN DESPLEGABLE PARA ELEGIR LA CANTIDAD,
SE AÑADE A UNA TABLA INFERIOR Y APARECE EN UNA VENTANA EL TOTAL DE LA COMPRA
*/

/*Función anonima:
cuando la página termine de cargar (el html), se ejecuta el código de la función y lo muestra, gracias al DOM.
*/
document.addEventListener('DOMContentLoaded', function () {
    // objeto que contiene el array con la lista de productos y el precio.
    let productos = [
      { nombre: 'Palomitas', precio: 5.00 },
      { nombre: 'Refresco', precio: 3.50 },
      { nombre: 'Palomitas + Refresco', precio: 8 },
      { nombre: 'Chocolate', precio: 2.50 },
      { nombre: 'Patatas', precio: 4.50 },
    ];
  
    // Creo dos tablas: una para productos y otra para  el carrito
    let tablaProductos = crearTabla('Productos', 'tablaProductos');
    let tablaCarrito = crearTabla('Carrito', 'tablaCarrito');
  
    // Creo botón para calcular el total
    let botonTotal = document.createElement('button');
    botonTotal.textContent = 'TOTAL';
    botonTotal.addEventListener('click', calcularTotal);
  
    // Agrego las tablas y el botón al cuerpo del documento
    document.body.appendChild(tablaProductos);
    document.body.appendChild(tablaCarrito);
    document.body.appendChild(botonTotal);
  
    /* El foreach itera sobre cada producto y agrega una fila a la tabla de 
    productos para cada uno utilizando la funcion agregarFila (posterior)
    */
    productos.forEach(producto => agregarFila(producto, tablaProductos, agregarAlCarrito));
  
    // Función que crea la tabla
    function crearTabla(id) {
      let tabla = document.createElement('table');
      tabla.id = id;
      let cabecera = tabla.createTHead().insertRow();
  
      //utilizo el foreach para iterar sobre los encabezados de la tabla, insertando
      //una celda en la fila de los encabezados con el texto correspondiente.
      ['Producto', 'Precio', 'Cantidad', 'Acciones'].forEach(texto => cabecera.insertCell().textContent = texto);
  
      return tabla;
    }
  
    // Función que las filas de la tabla y establece el contenido con la info del producto:
    function agregarFila(producto, tabla, evento) {
      let fila = tabla.insertRow();
  
      /*
      Muestra el nombre del producto y el precio $. Con toFixed muestro los decimales(2). 
      Con el foreach, en cada iteración se ejecuta la función flecha que toma de parámetro texto(cada elemento del array),
      para insertar una nueva celda en la fila de la tabla y asignar contenido. Una vez para el nombre del producto y otra para el 
      precio.
      */
      [producto.nombre, `$${producto.precio.toFixed(2)}`].forEach(texto => fila.insertCell().textContent = texto);
  
      // Celda de cantidad con selector
      let celdaCantidad = fila.insertCell();
      let selectorCantidad = document.createElement('select');
      
      for (let i = 1; i <= 10; i++) {
        let option = document.createElement('option');
        option.value = i;
        option.text = i;
        selectorCantidad.appendChild(option);
      }
      celdaCantidad.appendChild(selectorCantidad);
  
      // Celda de acciones con botón de agregar
      let celdaAcciones = fila.insertCell();
      let botonAgregar = document.createElement('button');
      botonAgregar.textContent = 'AÑADIR';
      botonAgregar.addEventListener('click', function () {
        let cantidad = parseInt(selectorCantidad.value, 10);
        evento(producto, cantidad);
      });
      celdaAcciones.appendChild(botonAgregar);
    }
  
    // Función para agregar elementos al carrito
    function agregarAlCarrito(producto, cantidad) {
      if (cantidad > 0) {
        // Calcular el precio total
        let precioTotal = producto.precio * cantidad;
  
        // Agregar fila al carrito
        agregarFilaCarrito(producto, cantidad, precioTotal, tablaCarrito);
      } else {
        alert('La cantidad debe ser mayor que cero.');
      }
    }
  
    // Función para agregar una fila al carrito
    function agregarFilaCarrito(producto, cantidad, precioTotal, tabla) {
      let fila = tabla.insertRow();
  
      // Añadir celdas a la fila del carrito
      [producto.nombre, `$${producto.precio.toFixed(2)}`, cantidad, `$${precioTotal.toFixed(2)}`].forEach(texto => fila.insertCell().textContent = texto);
    }
  
    // Función para calcular el total de la compra
    function calcularTotal() {
      let total = 0;
      // Iterar sobre las filas del carrito
      for (let i = 1; i < tablaCarrito.rows.length; i++) {
        // Obtener el precio total de la última celda de cada fila
        let precioTotal = parseFloat(tablaCarrito.rows[i].cells[3].textContent.replace('$', ''));
        total += precioTotal;
      }
      alert(`Total de la compra: $${total.toFixed(2)}`);
    }
  });
  


/*Crear botón ATRÁS para volver a la página principal (index.html)
*/
//variable que recoge la creación del elemento boton
let botonAtras = document.createElement('button');
//establezco el texto del contenido del boton
botonAtras.textContent = 'ATRÁS';
/*función anónima: agrega un event listener al boton.
cuando hace click la función redirige al index.html.
*/
botonAtras.addEventListener('click', function() {
  window.location.href = 'index.html';
});
// Agrega el botón al html
document.body.appendChild(botonAtras);
  