/**
 * Função para mover os números pares para frente 
 * dado um vetor como entrada; 
 * 
 * Observação: O número 0 (ZERO) deve ser considerado um número PAR;
 * 
 * @param vetor: vetor de números;
 * @return: Vetor com os números pares na frente e os números ímpares posteriormente;
 */
function moverNumerosParesParaAFrenteDoVetor(vetor) {
  let inputValue = document.getElementById('entrada-exercicio-4').value
  
  let array = inputValue.split(",");

  return sortArray(array);
}

function sortArray(array){    
  let arrayLength = array.length;
  for(let i = 0; i < arrayLength; i++){

      for(let j = 0; j < arrayLength; j++){

          if(array[j] > array[i+1]){
              let valueTemp = array[j];
              array[j] = array[j+1];
              array[j+1] = valueTemp;
          }

      }

  }
  return array;
}
