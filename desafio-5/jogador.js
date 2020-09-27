"use strict";

var Jogador = function(options) {
    for (var p in options) {
        this[p] = options[p];
    }
};

Jogador.prototype = {
    constructor: Jogador,
    x: 0,
    y: 0,
    estado: {},
    escolherMovimento : function(movimentosPossiveis) {

        // Implementar aqui o algoritmo.

        // O labirinto consiste em um tabuleiro de 20 x 20.
        // As variáveis 'x' e 'y' indicam a posição atual do jogador.
        // x -> Eixo horizontal (valor vai de 0 a 19)
        // y -> Eixo vertical (valor vai de 0 a 19)

        // Caso a solução que seu time venha a escrever precise guardar o estado do jogador entre 
        // uma jogada e outra, você poderá usar a variável 'estado'.

        // O parâmetro movimentosPossiveis retorna um array de string contendo os 
        // possíveis movimentos disponíveis a cada rodada.
        // Os valores são 'DIREITA', 'ESQUERDA', 'CIMA' e 'BAIXO'

        // O código abaixo representa um jogador randômico que a cada jogada escolhe 
        // aleatoriamente um dos possíveis movimentos.

        // Caso este método retorne uma movimentação inválida para a jogada, 
        // o jogador não sairá do lugar e uma mensagem 'Movimentação escolhida é inválida!' será 
        // escrita no console do navegador.


        // DIVIRTAM-SE!!!

        // Sorteia um número de 0 ao tamanho do array menos 1.
        var index = 0 + Math.floor((movimentosPossiveis.length - 0) * Math.random())

        // Pega o valor existente na posição sorteada.
        var movimentacao = movimentosPossiveis[index];

        // retorna a movimentação que foi sorteada.
        return movimentacao;
    } 
};