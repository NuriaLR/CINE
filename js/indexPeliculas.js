/*EN ESTE ARCHIVO CREO UNA TABLA CON LAS PELÍCULAS, UN DESPLEGABLE PARA ELEGIR EL HORARIO DE LA PELÍCULA,
PARA DESPUÉS MOSTRAR DEBAJO LO ELEGIDO
*/

/*Función anonima:
cuando la página termine de cargar (el html), se ejecuta el código de la función y lo muestra, gracias al DOM.
*/
document.addEventListener('DOMContentLoaded', function () {
    // objeto que contiene el array con la lista de películas con duración, sala y horario
    let peliculas = [
        { titulo: 'Napoleón', duracion: '2h 19min', sala: 'Sala 1', horarios: ['18:00', '20:30', '22:45'] },
        { titulo: 'The Marvels', duracion: '1h 45min', sala: 'Sala 4', horarios: ['18:00', '20:30', '22:45'] },
        { titulo: 'El Maestro que prometió el mar', duracion: '1h 45min', sala: 'Sala 5', horarios: ['17:30', '19:45', '21:00'] },
        { titulo: 'Un amor', duracion: '2h 09min', sala: 'Sala 6', horarios: ['16:15', '18:30', '20:45'] },
    
    ];
  
     // establezco la variable para crear la tabla para las películas
    let tablaPeliculas = crearTabla('Cartelera', 'tablaPeliculas');

    // creo el contenedor para el resumen de la compra
    let resumenContainer = document.createElement('div');
    resumenContainer.id = 'resumenContainer';
  
    //agrego los elementos a la tabla de las peliculas y esta tabla al final del HTML
    document.body.appendChild(tablaPeliculas);
    document.body.appendChild(resumenContainer);

    //foreach para agregar filas a la tabla de películas: recorro el array y voy agregando filas a la tabla con la información del array.
    peliculas.forEach(pelicula => agregarFilaPelicula(pelicula, tablaPeliculas));
  


    /* Función para crear una tabla: crea la tabla en el HTML con el encabezado
    recibe como parámetro el ID
    */
    function crearTabla(id) {
      //creo un nuevo elemento en la tabla
      let tabla = document.createElement('table');
      //asigno el ID proporcionado como parámetro a la propiedad 'id' del elemento de la tabla.
      tabla.id = id;
      //creo la tabla de la cabecera y e inserto los datos.
      let cabecera = tabla.createTHead().insertRow();
  
      // Añado los elementos a los encabezados a la tabla: recorro con foreach e inserto
      ['Título', 'Duración', 'Sala', 'Horario', 'Acciones'].forEach(texto => cabecera.insertCell().textContent = texto);
      
      // retorno el valor de la tabla
      return tabla;
    }
  
    /*Función para agregar una fila a la tabla de películas:
    recibe dos argumentos: los datos que se van a insertar (objeto pelicula) y la tabla donde se va a insertar
    contenido de la filas y creación de menú desplegable para los horarios
    celda con acciones para agregar lo seleccionado al resumen
    */
    function agregarFilaPelicula(pelicula, tabla) {
      //establezco fila
      let fila = tabla.insertRow();
  
      // Añado celdas a la fila: a través del foreach recorro y cuando encuentre las inserto
      [pelicula.titulo, pelicula.duracion, pelicula.sala].forEach(texto => fila.insertCell().textContent = texto);
  
      // Celda de horarios con menú desplegable

      // variable que crea la celda en la tabla
      let celdaHorarios = fila.insertCell();
      // creo el menu desplegable de los horarios de las peliculas
      let selectorHorarios = document.createElement('select');
      /* recorro el array de horarios: creo una nuevo elementos por cada horario.
      configuro el valor y el texto con el valor del horario
      añado el option al select
      */
      pelicula.horarios.forEach(horario => {
        let option = document.createElement('option');
        option.value = horario;
        option.text = horario;
        selectorHorarios.appendChild(option);
      });
      celdaHorarios.appendChild(selectorHorarios);
  
      // Celda de acciones con botón de agregar
      let celdaAcciones = fila.insertCell();
      let botonAgregar = document.createElement('button');
      botonAgregar.textContent = 'Agregar';
      botonAgregar.addEventListener('click', function () {
        let horarioSeleccionado = selectorHorarios.value;
        agregarResumen(pelicula, horarioSeleccionado);
      });
      celdaAcciones.appendChild(botonAgregar);
    }
  
    /* Función para agregar el resumen
    recibe como parámetro la película y el horario que se va a mostrar en el resumen.

    */
    function agregarResumen(pelicula, horario) {
      //creo variable resumen que recoje el mensaje que se muestre.
      let resumen = `Has elegido: ${pelicula.titulo}, Duración: ${pelicula.duracion}, Sala: ${pelicula.sala}, Horario: ${horario}`;
      //almaceno el resumen en una etiqueta <p>
      let resumenElement = document.createElement('p');
      //establezco el contenido del texto en resumen y después lo agrego al contenedor del resumen.
      resumenElement.textContent = resumen;
      resumenContainer.appendChild(resumenElement);
    }
  });
  
/*Botón ATRÁS para volver a la página principal (index.html)
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
  


