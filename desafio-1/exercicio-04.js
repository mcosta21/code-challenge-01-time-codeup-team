/**
 * Função para mover os números pares para frente 
 * dado um vetor como entrada; 
 * 
 * Observação: O número 0 (ZERO) deve ser considerado um número PAR;
 * 
 * @param vetor: vetor de números;
 * @return: Vetor com os números pares na frente e os números ímpares posteriormente;
 */

function readArray() {
  let inputValue = document.getElementById('entrada-exercicio-4').value
  let array = vetor.split(",");
  return moverNumerosParesParaAFrenteDoVetor(array);
}

function moverNumerosParesParaAFrenteDoVetor(vetor) {
  let length = vetor.length
  let evenArray = []
  let oddArray = []

  for(i = 0; i < length; i++) {
    vetor[i] % 2 === 0? evenArray.push(vetor[i]) : oddArray.push(vetor[i])
  }

  let sortedArray = evenArray.concat(oddArray)
  return sortedArray;
}
