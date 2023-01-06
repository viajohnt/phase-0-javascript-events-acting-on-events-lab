// Your code here
const dodger = document.getElementById('dodger');

function moveDodgerLeft() {
  const left = parseInt(dodger.style.left, 10);
  dodger.style.left = `${left - 10}px`;
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left, 10);
  dodger.style.left = `${left + 10}px`;
}

document.addEventListener('keydown', event => {
  if (event.code === 'ArrowLeft') {
    moveDodgerLeft();
  } else if (event.code === 'ArrowRight') {
    moveDodgerRight();
  }
});