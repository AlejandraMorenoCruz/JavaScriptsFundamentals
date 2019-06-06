// Escribe una función llamada calculateDogAge que reciba un número (la edad humana del perro)
//y calcule su edad en años de perro (edad x 7)
function calculateDogAge(humA){
  let dogA=humA*7;
  return dogA;
  console.log(dogA);
} calculateDogAge(5);

// Escribe una función llamada getCandySupply que reciba dos números (edad, cantidad por día)
//y calcule cuantos dulces consumirías por el resto de tu vida.
function getCandySupply(age,candies){
  //Tomando en cuenta que la esperanza de vida es de 77 años
  let days=(365*(77-age))+Math.round((77-age)/4);
  let allCandies=candies*days;
  return allCandies;
  console.log(allCandies);
} getCandySupply(30,2);

// Crea una función que permita encadenar llamadas
// a().a().a() ... etc

// Crea una función que recibe un tipo (formal/casual) y dos funciones,
//una para un saludo casual (hola!) y otra para un saludo formal (buenos dias)
/*
let x = () => 1
x() // 1
*/
function saludos(tipo,formal,casula){
   if (tipo=='buenos días'||tipo=='buenas tardes'||tipo=='buenas noches') {
     return formal();
   }
   else {
     return casual();
   }
 }
function formal(){
  console.log('Buenas');
}
function casual(){
  console.log('quiubo');
}

 saludos('hi',formal,casual);

// Conviertan cualquier ciclo for que use un arreglo de la parte 1 para que use forEach o map
// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario

var miArray = [ 2, 4, 6, 8, 10 ];
miArray.forEach( function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});

var frase= prompt('inserta una frase');
var fraseArr=frase.split(' ');

fraseArr.forEach(function(valor, indice, array){
  fraseArr[indice]=fraseArr[indice].charAt(0).toUpperCase()+fraseArr[indice].slice(1);
})
console.log(fraseArr.join(' '))

/*
  Crea una clase persona que recibe un nombre, apellido y edad
  Agrega métodos para cambiar y obtener cada una de las propiedades
  Agrega un método (describe) que regrese una cadena como esta:
  {Nombre} {Apellido}, {edad} años.
*/

/*
  Crea una clase Product que recibe un nombre y un valor
  tiene un método (value) que regresa su valor con iva (x1.16)

  Crea otra clase Cart que recibe un arreglo de Product
  tiene un método (add) que recibe un Product y lo agrega a su lista
  tiene un método (total) que regresa el total de todos los Product(con iva)

  Crea otra clase Food que hereda de product
  su método value regresa el valor sin iva
  Esta clase debería poder usarse en Cart
*/










//
