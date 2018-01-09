$(document).ready( function(){

  //La variable "recipesArray" esta declarada en el archivo "data/recipes.js"
  renderHighlightedRecipes(recipesArray);

});

/*Etapa 1: al cargar index.html que no este el icono de la flecha*/
  $('.js-back').remove();

/*Etapa 2:agregar texto "nuevas recetas" al parrafo*/

$(function(printNews){
  $('.callout-news p').append('Nuevas recetas');
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
  console.log('Recipes:',recipesArray);
  
  for(var i=0; i<= recipesArray.length; i++){
    recipesArray[i];
    if (recipesArray[i]['highlighted'] === true){
      renderRecipe(recipesArray[i]);
    }
  }
};

/*
* Función que se encarga de pintar UNA recetas que tenga 
* marcado el atributo "highlighted" como TRUE
* Aqui se tiene que crear el HTML que esta en el 
* archivo "templates/templates-recipe.html"
*/

/*Etapa 4: En esta etapa tienes que pintar cada receta que llega a la función ​ renderRecipe ​ .
1. Tienes que crear con JS el HTML que está en
archivo ​ templates/template-recipe.html ​ (este archivo es sólo
el de instrucciones, no tienes que usarlo). Dentro de este archivo está escrito
con MAYÚSCULAS la información que tienes que sacar del objeto y como
se llama la propiedad (atributo).
OPCIONAL: Si resuelves este paso usando jQuery tendrás un bonus de 10 puntos.
2. Con el HTML que creaste en el paso anterior tienes que pintarlo en la
pantalla, haciendo que este HTML sea hijo de un DIV que tiene como
clase ​ list-recipes ​ (dentro de este DIV hay un comentario, donde indica
donde se tienen que pintar cada una de Estas recetas).*/
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







