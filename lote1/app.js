// Imprime la fecha actual
/*
n=new Date();
y=n.getFullYear();
m=n.getMonth()+1;
d=n.getDate();
document.write(`${d}/${m}/${y} \n`);
document.write('<br />');*/

// Obten el área de un triángulo. Pidele los 3 lados al usuario
/*
alert('por favor ingresa los 3 valores de los lados de un triángulo');
var n1=Number(prompt('lado 1'));
var n2=Number(prompt('lado 2'));
var n3=Number(prompt('lado 3'));
var s= ((n1+n2+n3)/2);
var r= Math.sqrt(s*(s-n1)*(+s-n2)*(s-n3));
document.writeln('el área del triángulo es ' + r);*/

// Voltea una string dada por el usuario
/*
var cadena=prompt('escribe algo e invertiré su orden');
var voltea=cadena.split('').reverse().join('');
document.writeln(`lo que tú escribiste es ${cadena} y ya volteado es ${voltea}`);
*/

// Voltea una string dada por el usuario sin usar el método de reverse
/*
var palabra=prompt('escribe algo e invertiré su orden, de nuevo');
var arreglo=palabra.split('');
var volteado=[];
for(let i=arreglo.length; i>=0; i--){
  volteado.push(arreglo[i]);
}
document.writeln(`lo que tú escribiste es ${palabra} y ya volteado es ${volteado.join('')}`);
*/

// Convierte una temperatura dada en C o F a F o C, respectivamente
/*
var tipo=prompt('¿En que escala está la temperatura?');
var temperatura=Number(prompt('¿Qué temperatura tenemos en GLD?'));
const c=(temperatura*(9/5))+32;
const f=(temperatura-32)*(5/9);
if (tipo=='c'||tipo=='C'||tipo=='Celcius'||tipo=='celcius'){
  document.writeln(`la temperatura en Celcius es ${c}`);
}else if (tipo=='f'||tipo=='F'||tipo=='farenheit'||tipo=='Farenheit'){
  document.writeln(`la temperatura en Farenheit es ${f}`);
}*/

// Crea un objeto que tenga una propiedad cuyo nombre es definido por el usuario. Su valor debe ser verdadero
/*
var unObjeto= new Object();
unObjeto[prompt('dame el nombre de la propiedad')]=true;
console.log(unObjeto);
document.writeln(unObjeto);*/

// Realiza la suma de los valores que de el usuario hasta recibir un valor negativo

//var nn=0;function sumaSiempre(nn){  if (nn<0){    //salir  }else {    nn = nn + Number(prompt('dame un número positivo, si escribes uno negativo esto se acaba'));    sumaSiempre(nn);  }};sumaSiempre(nn);
/*var nn=0;

var suma=0;
while (nn>=0) {

    suma=suma+nn;
    console.log(suma);
    nn=Number(prompt('dame un número positivo, si escribes uno negativo esto se acaba'));

};
document.writeln(`la suma de todos los número positivos es ${suma}`);*/

// Convierte a mayúscula la primer letra de cada palabra en una cadena dada por el usuario
/*
var frase= prompt('inserta una frase');
var i=0;
var fraseArr=frase.split(' ');
console.log(fraseArr);
for (i;i<fraseArr.length;i++){
  fraseArr[i]=fraseArr[i].charAt(0).toUpperCase()+fraseArr[i].slice(1);
}
document.writeln(fraseArr.join(' '));*/

// Revisa si un número dado es múltiplo de 3 o de 7
/*
var num= Number(prompt('inserta un número y te digo si es múltiplo de 3 o de 7'));
if (num%3==0&&num%7==0) {
  document.writeln('tu número es multiplo de 3 y de 7');
}else if (num%7==0) {
  document.writeln('tu número es multiplo de 7');
}else if (num%3==0) {
  document.writeln('tu número es multiplo de 3');
}else {
  document.writeln('tu número no es multiplo de 3 o 7');
}*/

// Revisa cuantas veces se repite un caracter dado en una cadena dada
/*
var frase1= prompt('inserta una frase');
var contando=0;
var x=prompt('¿Que letra quieres saber que se repite?');
var indice = frase1.indexOf(x);
while ( indice != -1 ) {
   contando++;
   indice = frase1.indexOf(x,indice+1);
}
document.writeln(`la letra "${x}"" se repite ${contando} veces`);*/

// Revisa cuantas veces se repite un valor dado en un arreglo



// Divide un número de 3 dígitos en sus centenas, decenas y unidades
/*
var cientos= prompt('agrega un número de 3 dígitos');
var cientosArr=cientos.split('');
document.writeln(`el número tiene ${cientosArr[0]} centenas`);
document.writeln(`el número tiene ${cientosArr[1]} decenas`);
document.writeln(`el número tiene ${cientosArr[2]} unidades`);*/

// Regresa todos los caracteres que no sean letras de una cadena

/*
let noLetra=prompt('ingresa una frase con números');
let arregloNoLetra=[];
let Regetz=/[A-Za-z]/;
for (let i=0; i<noLetra.length;i++){
  if (!noLetra[i].match(Regetz)){
    arregloNoLetra.push(noLetra[i]);
  }
}document.writeln(`los carácteres ${noLetra.join(' ')} no son letras`);*/

// Haz una función que lanza un error con el mensaje dado por el usuario

/*
function myError(){
  let message=prompt('Escribe un mensaje de error');
  throw new Error(message);
}*/

// Extiende la función anterior para atrapar el error e imprimir su mensaje y stack

/*
function nuevoError(){
  try {
    myError();
  } catch (Error) {
    document.writeln('upsi');
  }
}*/

// Suma los contenidos de un arreglo de números

/*var pos=0;
function sumar(arr){
  if (pos<arr.length){
    let valor=arr[pos];
    pos++;
    return valor+sumar(arr);
  }
  else{
    pos=0;
    return 0;
  }
}
sumar([2,3,5,6,7]);*/

// Regresa un arreglo nuevo con el cuadrado de cada valor del arreglo original

function square(){
  let array = [2,3,4,5,6,7,8,9];
  let arrayArray=[];
  for (let i=0; i<array.length;i++){
    arrayArray.push(Math.pow(Number(array[i]),2));
  }
}

// Regresa que tipo de ángulo es el dado
/*
  Agudo: 0 a 90 grados
  Recto: 90 grados
  Obtuso: 90 a 180 grados
  Llano: 180 grados
*/

// Regresa un arreglo nuevo sin los valores repetidos de un arreglo original
// Quita los valores repetidos de un arreglo (sin usar otro arreglo)
// Convierte un número binario dado por el usuario a decimal
// Convierte un número decimal dado por el usuario a binario, octal y hexadecimal (bases 2, 8 y 16)

// Regresa la cantidad de valores que comparten dos arreglos diferentes

let miArray = [ 2, 4, 6, 8, 10, 12];
let mi2Array =  [6, 8, 10, 5, 7, 9];
let conteo = 0;
miArray.forEach( function(valor, indice, array) {
    mi2Array.forEach(function(valor, indice, array){
      if (miArray[indice]==mi2Array[indice]) {
        conteo+=1;
        console.log(conteo);
      }
    }
});
});













// Valida que una cadena dada no tenga espacios en blanco
// Dada una cadena, determina su valor de scrabble
/*
  1: E, A, I, O, N, R, T, L, S, U
  2: D, G
  3: B, C, M, P
  4: F, H, V, W, Y
  5: K
  8: J, X
  10: Q, Z
*/
// Determina si una cadena dada por el usuario es un acrónimo
// Implementa una lista ligada
// Implementa una lista doblemente ligada
// Obten el Máximo común divisor de dos números dados
