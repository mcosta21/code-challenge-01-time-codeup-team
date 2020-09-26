/**
 * Função para calcular a pontuação máxima
 * dado um array de inteiros como entrada; 
 * 
 * @param alvos: array com os valores dos alvos;
 * @return: pontuação máxima.
 */
function calcularPontuacaoMaxima(alvos) {
  let arrayAlvos = [2, 1, 5];
  let arrayMarcados = [2]; 
  let marcado;
  let arrayTemp = [];
  // 2 * 1 * 5
  // 1 * 2 * 5
  // 1 * 5 * 1

  let value = 0;
  //arrayMarcados = arrayMarcados.sort();
  //console.log(arrayMarcados)
  //let min = Math.min.apply(Math, arrayAlvos);
  //let max = Math.max.apply(Math, arrayAlvos);
  //console.log(min, max);

  for(let i = 0; i < arrayMarcados.length; i++){

    for(let j = 0; j < arrayAlvos.length; j++){
     
      if(arrayMarcados[i] === arrayAlvos[j]){
        marcado = arrayAlvos[j];
        let backPosition = arrayAlvos[j-1] === undefined ? 1 : arrayAlvos[j-1];
        let nextPosition = arrayAlvos[j+1] === undefined ? 1 : arrayAlvos[j+1];
        let teste = backPosition * arrayAlvos[j] * nextPosition;
        console.log(backPosition, 'Total: ' + teste, nextPosition)
        value += teste;
        
      }

      if(arrayAlvos[j] !== marcado){
        arrayTemp.push(arrayAlvos[j]);
      }
      
    } 
   
  }

  return 'Não Implementado';
}
