(function () {

  function Desafio() {

    var exercicios = [
      { fn: "calcularPontuacaoMaxima", type: "array" }
    ];

    var configuracao = [];

    return {
      inicializador: inicializador,
    };

    function inicializador() {
      exercicios.forEach(configurarExercicios);
    }

    function configurarExercicios(element, index, array) {
      configuracao.push({
        botao: document.getElementById("verificar-exercicio-" + (index + 1)),
        entrada: document.getElementById("entrada-exercicio-" + (index + 1)),
        saida: document.getElementById("saida-exercicio-" + (index + 1)),
      });

      configuracao[index].botao.addEventListener("click", function () {

        var input = configuracao[index].entrada.value;
        
        if(element.type == "array"){
          input = JSON.parse('['+ configuracao[index].entrada.value + ']')
        } 

        configuracao[index].saida.innerHTML = window[element.fn](input);
      });
    }
  }

  Desafio().inicializador();
})();
