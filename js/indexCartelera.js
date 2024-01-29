//EN ESTE ARCHIVO CREO LA CARTERA: HAGO CARDS PARA CADA PELICULA CON SU CONTENIDO E IMAGEN
/*Función anonima:
cuando la página termine de cargar (el html), se ejecuta el código de la función y lo muestra, gracias al DOM.
*/
document.addEventListener('DOMContentLoaded', function () {
  // Objeto que contiene el array con la lista de películas con duración, sala y horario
  let peliculas = [
    { titulo: 'Napoleón', duracion: '2h 19min', sala: 'Sala 1', imagen: '/img/napoleon.jpg', horarios: ['18:00', '20:30', '22:45'] },
    { titulo: 'The Marvels', duracion: '1h 45min', sala: 'Sala 4', imagen: '/img/marvels.jpg', horarios: ['18:00', '20:30', '22:45'] },
    { titulo: 'El maestro que prometió el mar', duracion: '1h 45min', sala: 'Sala 5', imagen: '/img/maestro.jpg', horarios: ['17:30', '19:45', '21:00'] },
    { titulo: 'Un amor', duracion: '2h 09min', sala: 'Sala 6', imagen: '/img/amor.jpg', horarios: ['16:15', '18:30', '20:45'] },
  ];

  // Utilizo el DOM para insertar en el HTML a través del ID
  let peliculasContainer = document.getElementById('peliculasContainer');

  // Con el foreach itero sobre el array de películas y creo una card para cada una, luego la agrego al contenedor
  peliculas.forEach(pelicula => {
    let card = crearCard(pelicula);
    peliculasContainer.appendChild(card);
  });

  /* Función que crea una card para cada película:
  - recibe un objeto con los datos de la película como parámetro.
  - voy paso a paso partiendo del contenedor (card) y continuando con con contenido.
  */
  function crearCard(pelicula) {
    // Creo un div para representar la tarjeta y añado la clase 'card'
    let card = document.createElement('div');
    card.classList.add('card');

    // Creo un elemento img para la imagen de la película y establezco un src usando la propiedad imagen del objeto de película
    let imagen = document.createElement('img');
    imagen.src = pelicula.imagen;
    card.appendChild(imagen);

    // Creo un contenedor para el título y la información de la película
    let contenido = document.createElement('div');

    // Creo un h3 para el título de la película y establezco el texto usando la propiedad titulo del objeto de película
    let titulo = document.createElement('h3');
    titulo.textContent = pelicula.titulo;
    contenido.appendChild(titulo);

    // Creo un párrafo para la duración de la película y establezco el texto utilizando la propiedad duracion del objeto de película
    let duracion = document.createElement('p');
    duracion.textContent = `Duración: ${pelicula.duracion}`;
    contenido.appendChild(duracion);

    // Creo un párrafo para la sala y establezco el texto utilizando la propiedad sala del objeto de película
    let sala = document.createElement('p');
    sala.textContent = `Sala: ${pelicula.sala}`;
    contenido.appendChild(sala);

    // Creo un párrafo para mostrar los horarios disponibles utilizando la propiedad horarios del objeto de película
    let horariosLabel = document.createElement('p');
    horariosLabel.textContent = `Horarios disponibles: ${pelicula.horarios.join(', ')}`;
    contenido.appendChild(horariosLabel);

    // Agrego el contenido al elemento de la tarjeta
    card.appendChild(contenido);

    // Devuelvo la tarjeta creada
    return card;
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
  


