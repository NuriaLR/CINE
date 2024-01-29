//EN ESTE ARCHIVO JS ME ENCARGO DE CREAR LOS BOTONES DEL INDEX PRINCIPAL PARA QUE ME LLEVEN A LAS OTRAS VISTAS

// Espera a que el contenido del DOM esté cargado antes de ejecutar el código
document.addEventListener('DOMContentLoaded', function () {
    // Obtiene los botones por sus IDs
    let carteleraBtn = document.getElementById('carteleraBtn');
    let peliculasBtn = document.getElementById('peliculasBtn');
    let tiendaBtn = document.getElementById('tiendaBtn');
  
    // Asocia funciones a los eventos de clic de los botones
    carteleraBtn.addEventListener('click', volverCartelera);
    peliculasBtn.addEventListener('click', volverPeliculas);
    tiendaBtn.addEventListener('click', volverTienda);
  
    // Función que se ejecuta al hacer clic en el botón "CARTELERA"
    function volverCartelera() {
      // Llama a la función principal de redirección con la URL de tienda
      volver('indexCartelera.html');
    }
  
    // Función que se ejecuta al hacer clic en el botón "PELICULAS"
    function volverPeliculas() {
      // Llama a la función principal de redirección con la URL de películas
      volver('indexPeliculas.html');
    }

     // Función que se ejecuta al hacer clic en el botón "TIENDA"
     function volverTienda() {
      // Llama a la función principal de redirección con la URL de películas
      volver('indexTienda.html');
    }
  
    // Función principal de redirección que cambia la ubicación del navegador
    function volver(pagina) {
      window.location.href = pagina;
    }
  });
  
 