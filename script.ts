// document.querySelector('.guess')!.value = '21';
// document.querySelector('.highscore')!.textContent = 9999;

function generateSecreteNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}
let secretNumber = generateSecreteNumber();

let score = Number(document.querySelector('.score')!.textContent);

document.querySelector('.number')!.textContent = String(secretNumber);

const checkButton = document
  .querySelector('.check')!
  .addEventListener('click', () => {
    if (score > 1) {
      const guess = +(document.querySelector('.guess') as HTMLInputElement)
        .value;
      if (guess === secretNumber) {
        document.querySelector('.message')!.textContent = '🎉 Correct Number!';
        score = score + 10;
      }
      if (guess > secretNumber) {
        document.querySelector('.message')!.textContent = '📈 Too High!';
        score--;
      }
      if (guess < secretNumber) {
        document.querySelector('.message')!.textContent = '📉 Too Low!';
        score--;
      }
      if (!guess) {
        document.querySelector('.message')!.textContent = '🚫 No Number';
        score--;
      }
      document.querySelector('.score')!.textContent = String(score);
    } else {
      score--;
      document.querySelector('.score')!.textContent = String(score);
      document.querySelector('h1')!.textContent = '😫 Game Over';
    }
  });

const againButton = document
  .querySelector('.again')!
  .addEventListener('click', () => {
    score = 20;
    document.querySelector('.score')!.textContent = String(score);
    document.querySelector('.message')!.textContent = 'Start guessing...';
    secretNumber = generateSecreteNumber();
    document.querySelector('.number')!.textContent = String(secretNumber);
  });
