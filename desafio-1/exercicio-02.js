/**
 * Função para calcular a quatidade de consoantes existentes 
 * dado um texto como entrada; 
 * 
 * @param texto: texto a ser avaliado;
 * @return: número de consoantes existentes;
 */
function calcularAQuantidadeDeConsoantes(texto) {
  let inputValue = document.getElementById('entrada-exercicio-2').value
    .toLowerCase()
    .normalize("NFD")
    .replaceAll(/\s/g, "")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(/[0-9]/g, "");
  let length = 0;
  for(let i = 0; i < inputValue.length; i++){
    let letter = inputValue[i];
    if(letter != 'a' && letter != 'e' && letter != 'i' && letter != 'o' && letter != 'u')
      length++;

  }
  return length;
}