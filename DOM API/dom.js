/* Para todos los ejercicios, si no se especifica que se espera que haga un listener,
asuman que debe imprimir algo */
window.onload = () => {
  // Agrega contenido a div1 (ejemplo: 'I am a div!')
  const element1 = document.querySelector('#div1');
  element1.innerHTML = 'I am a div!';
  // Agrega contenido al span de div2 (ejemplo: 'I am a span!')
  const element2 = document.querySelector('#div2 .a-span');
  element2.innerHTML = 'I am a span!';
  /* Agrega un listener de click al boton de div3, el listener debe imprimir algo
  (ejemplo: 'I was clicked') */
  const element3 = document.querySelector('#div3 .a-button');
  element3.addEventListener('click', () => { console.log('I was clicked'); });
  /* Agrega un listener de click al boton de div4, no dejes que haga el submit e imprime
  'Default prevented' */
  const element4 = document.querySelector('#div4 .a-button');
  element4.addEventListener('click', (event) => { event.preventDefault(); });
  // Agrega un listener de click a div5, imprime el target del evento
  const element5 = document.querySelector('#div5');
  element5.addEventListener('click', (event) => { console.log(event.target); });
  /* Agrega un listener de click al span de div6 y a la div6, imprime el target
  del evento en ambos y si es el listener de div o de span */
  const element6 = document.querySelectorAll('#div6');
  element6.forEach((element) => element.addEventListener('click', (event) => { console.log(event.target) }) );
  /* const element6 = document.querySelector('#div6');
  element6.addEventListener('click', (event) => { console.log(event.target); });
  const element61 = document.querySelector('#div6 .a-span');
  element61.addEventListener('click', (event) => { console.log(event.target); });*/
  /* Agrega un listener de click al span de div7 y a la div7, imprime
    el target del evento en ambos y si es el listener de div o de span,
    evita que el click del span se propague */
  const element7 = document.querySelectorAll('#div7');
  element7.forEach((element) => element.addEventListener('click', (event) => { console.log(event.target) }) );
  // Selecciona los spans de div8, agrega el numero que son como contenido a cada una (1-6)
  const element8 = document.querySelectorAll('#div8 .a-span');
  element8.forEach((valor,indice) =>
    element8[indice].innerHTML = `Este es el span ${indice}`);
  // Agrega un listener de click al primer y ultimo span de div9
  // Agrega un listener de click a los spans impares de div10 (1, 3, 5)
  // Agrega otro span a div11, con 'not-a-span' como clase y 'Not a span!' como contenido
  // Cambia el src de la imagen de div12 a dogge.jpg (adjunto)
  // Pon 'THE-span' como id del span de div13
  /**
   * Agrega listeners a los 3 inputs de div14.
   * change para changeInput
   * blur para blurInput
   * ambos para bothInput
   *
   * Los listeners deben imprimir el nombre del target del evento
   */
  /**
   * Agrega un listener al span de div15 que, cuando el mouse pase por encima,
   * cambie el texto a 'I am being hovered'.
   * Debe volver al texto original cuando el mouse deje de estar encima.
   */
  /**
   * Agrega un listener de scroll a la div16.
   * Debe imprimir algo ('I was scrolled') cada vez que se hace scroll de ella.
   * Se recomienda NO usar alert para este ejercicio.
   */ };
