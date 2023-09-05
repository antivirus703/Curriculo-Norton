// Selecione o botão pelo ID
const changeColorButton = document.getElementById('changeColorButton');

// Variável para controlar a cor de fundo
let isWhiteBackground = true;

// Função para alternar entre branco e preto
function toggleBackgroundColor() {
  // Se a cor de fundo for branca, mude para preto; caso contrário, mude para branca
  if (isWhiteBackground) {
    document.body.style.backgroundColor = 'black';
  } else {
    document.body.style.backgroundColor = 'white';
  }
  
  // Alterne o valor da variável
  isWhiteBackground = !isWhiteBackground;
}

// Adicione um ouvinte de eventos para o botão
changeColorButton.addEventListener('click', toggleBackgroundColor);