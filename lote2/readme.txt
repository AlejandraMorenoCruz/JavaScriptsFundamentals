// Explica cual es la salida de las siguientes funciones y porqué:
/*
var a = 12;
(function() {
  alert(a);
})();
*/
      Alert que llama a la variable 'a' que tiene un valor de 12

/*
var a = 5;
(function() {
  var a = 12;
  alert(a);
})();
*/
      Alert muestra a, que fue vuelta a declarar dentro del bloque de la funcion
      y le fue asignado en número 12 dentro de ésta, ignora la primer asignaión
      por el scope

/*
var a = 10;
var x = (function() {
  var a = 12;
  return (function() {
    alert(a);
  });
})();
x();
*/
      Alert muestra la 'a' dentro de la función a la que le fue asignado
      el numero 12, por el alcance


/*
var a = 10;
var x = (function() {
  var y = function() {
    var a = 12;
  };
  return function() {
    alert(a);
  }
})();
x();
*/
      Alert muestra 10, porque el alcance de la a que vale 12 muere
      en la función que está asignada a y

/*
var a = 10;
var x = (function() {
  (function() {
    a = 12;
  })();
  return (function() {
    alert(a);
  });
})();
x();
*/
      Alert regresa la función dónde a 'a' se le asigna el valor 12
      como aquí llamamos a la función el alcance está dentro.

/*
var a = 10;
(function() {
  var a = 15;
  window.x = function() {
    alert(a);
  }
})();
x();
*/
      

/*
function leFunction() {
  console.log(a);
  console.log(foo());

  var a = 1;
  function foo() {
     return 2;
  }
}
leFunction();
*/

/*
var a = 1;
function someFunction(number) {
  function otherFunction(input) {
    return a;
  }
  a = 5;
  return otherFunction;
}

var firstResult = someFunction(9);
var result = firstResult(2);
*/

/*
var fullname = 'A Name';
var obj = {
  fullname: 'Full Name',
  prop: {
    fullname: 'Le Name',
    getFullname: function() {
      return this.fullname;
    }
  }
};
console.log(obj.prop.getFullname());
var aCall = obj.prop.getFullname;
console.log(aCall());
console.log(obj.fullname);
*/

/*
var a = 1;
function b() {
  a = 10;
  return;
  function a() {}
}
b();
console.log(a);
*/

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
Contraer
