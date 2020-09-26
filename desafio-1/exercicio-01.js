/**
 * Função para calcular a quatidade de vogais existentes 
 * dado um texto como entrada; 
 * 
 * @param texto: texto a ser avaliado;
 * @return: número de vogais existentes;
 */
function calcularAQuantidadeDeVogais(texto) {
  let inputValue = document.getElementById('entrada-exercicio-1').value.toLowerCase().normalize("NFD");
  let length = 0;

  for(let i = 0; i < inputValue.length; i++){
    let letter = inputValue[i];
    if(letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
      length++

  }

  console.log(inputValue, length);
  //TODO: Implemente sua lógica aqui
  
  return length;
}