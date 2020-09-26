/**
 * Função para mover as letras maiúsculas para frente 
 * dado um texto como entrada; 
 * 
 * @param texto: texto a ser avaliado;
 * @return: texto com as letras maiúsculas na frente e posteriormente as letras minúsculas;
 */
function moverLetrasMaiusculasParaAFrente() {
  let inputValue = document.getElementById('entrada-exercicio-3').value
  inputValue = [...inputValue];
  const sorted1 = inputValue.sort(letter =>  /[A-Z]/.test(letter) ? -1 : 0).join('');


  return sorted1;
}