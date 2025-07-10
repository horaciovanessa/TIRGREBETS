const slots = document.querySelectorAll('.slot');
const spinBtn = document.getElementById('spin-btn');
const resultText = document.getElementById('result');
const coinsText = document.querySelector('#coins span');

let coins = 100;
const symbols = ['🍒', '🍋', '🍉', '🍊', '🍇', '⭐', '🔔'];
const winCombinations = [
  ['🍒', '🍒', '🍒'],
  ['🍋', '🍋', '🍋'],
  ['🍉', '🍉', '🍉'],
  ['🍊', '🍊', '🍊'],
  ['🍇', '🍇', '🍇'],
  ['⭐', '⭐', '⭐'],
  ['🔔', '🔔', '🔔']
];

function spin() {
  if(coins <= 0) {
    resultText.textContent = "Você não tem moedas suficientes para girar.";
    return;
  }

  coins -= 10;
  coinsText.textContent = coins;

  // Escolher aleatoriamente símbolos para os slots
  let results = [];
  slots.forEach(slot => {
    const symbol = symbols[Math.floor(Math.random() * symbols.length)];
    slot.textContent = symbol;
    results.push(symbol);
  });

  // Verificar se ganhou
  const won = winCombinations.some(combo => combo.every((s, i) => s === results[i]));

  if(won) {
    const ganho = 50;
    coins += ganho;
    coinsText.textContent = coins;
    resultText.textContent = `Parabéns! Você ganhou ${ganho} moedas!`;
  } else {
    resultText.textContent = "Tente novamente!";
  }
}

spinBtn.addEventListener('click', spin);

function startGame() {
  alert("Bem-vindo ao Tigre da Sorte! Você começa com 100 moedas. Cada giro custa 10 moedas. Boa sorte!");
}