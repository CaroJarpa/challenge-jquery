$(document).ready( function(){

	//La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
	renderHighlightedRecipes(recipesArray);

});


/*
* Función que se encarga de pintar TODAS las recetas que tengan 
* marcado el atributo "highlighted" como TRUE
*/

/*Etapa 3:En el archivo ​ script-index.js ​ tienes disponible una variable llamada ​ recipesArray ​ ,
es un arreglo que contiene objetos que representan recetas de cocina, también
tienes declaradas 4 funciones.
En esta etapa tienes que completar la función ​ renderHighlightedRecipes ​ .
1. Dentro de esta función tienes que recorrer el arreglo ​ recipesArray ​ (que
está como parámetro).
2. Verificar en cada objeto del arreglo si tiene la propiedad ​ highlighted ​ en
true.
3. Si la condición del paso 2 se cumple, manda a llamar la
función ​ renderRecipe ​ pasándole como parámetro el objeto que cumplió
la condición.*/

function renderHighlightedRecipes(recipesArray) {
  console.log('Recipes: ', recipesArray);
  for(var i=0; recipesArray.length; i++){
    recipesArray[i];
    if (recipesArray[i]['highlighted']===true){}
      renderRecipe();
  }
}

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/
function renderRecipe(recipe) {
	console.log('Voy a pintar la receta: ', recipe);
}



/*
* Función que se encarga de pintar todas las actividades
*/
function renderActivities(activitiesArray) {
	console.log('Activities: ', activitiesArray);
}

/*
* Función que se encarga de pintar una actividad
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-activity.html"
*/
function renderActivity(recipe) {
	
}
/*Etapa 1: al cargar index.html que no este el icono de la flecha*/
	$('.js-back').remove();

/*Etapa 2:agregar texto "nuevas recetas" al parrafo*/

$(function(printNews){
  $('.callout-news p').append('Nuevas recetas');
});

/*Etapa 3:En el archivo ​ script-index.js ​ tienes disponible una variable llamada ​ recipesArray ​ ,
es un arreglo que contiene objetos que representan recetas de cocina, también
tienes declaradas 4 funciones.
En esta etapa tienes que completar la función ​ renderHighlightedRecipes ​ .
1. Dentro de esta función tienes que recorrer el arreglo ​ recipesArray ​ (que
está como parámetro).
2. Verificar en cada objeto del arreglo si tiene la propiedad ​ highlighted ​ en
true.
3. Si la condición del paso 2 se cumple, manda a llamar la
función ​ renderRecipe ​ pasándole como parámetro el objeto que cumplió
la condición.*/



