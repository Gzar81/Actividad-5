Objetivos 

Con esta actividad vas a conseguir desarrollar en Angular un sistema para dar de alta un listado de noticias de un blog en Angular. Crearemos un sistema que nos permite publicar a través de un pequeño formulario publicaciones en un listado.

El sistema generado será una SPA, donde el formulario y la lista de elementos del propio formulario se encuentran en el mismo componente. 

Haciendo uso de un sistema de eventos y templating de angular debemos capturar los datos de cada noticia y pintarlos dentro de un listado de noticias que estarán dentro del propio componente.

De esta forma vamos a repasar conceptos de eventos, captura y pintado de datos en angular, comunicación entre plantillas y lógica de componente, uso de lógica de arrays dentro de angular.

Pautas de elaboración

Debéis crear en angular un componente blog, en dicho componente creareis dos áreas, una para el formulario y otra para la lista de noticias.

Dentro de la lógica del componente crearemos un array multidimensional de json donde cada elemento del array sea una publicación del blog y lo inicializaremos dentro de nuestro componente con dos noticias. 

Los campos que tendrá cada noticia son los siguiente:

	Título.
	Imagen (url de la foto).
	Texto o cuerpo de la noticia.
	Fecha de la publicación.

Las dos noticias que se han inicializado tenemos que pintarlas dentro de la zona del listado de noticias en nuestro componente a través de las diferentes técnicas de templating que hemos aprendido.

Cuando pintemos esas primeras noticias, nos centraremos en el formulario de publicación, dicho formulario recogerá los datos que debe tener cada noticia, a través de un evento y comunicando el HTML con el typescript de la forma correspondiente.

La función del evento que recoge los datos deberá comprobar que todos los datos están siendo rellenado y que ninguno está vacío, avisando al usuario si este no introduce ningún dato o falta alguno. Todos los datos son obligatorios.  Si el usuario no rellena todos los datos del formulario no debemos insertar la noticia y no se verá reflejada dentro de mi listado.
