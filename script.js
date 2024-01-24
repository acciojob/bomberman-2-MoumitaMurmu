// script.js
function reset() {
  for (let i = 1; i <= 9; i++) {
    const block = document.getElementById(`${i}`);
    block.textContent = '';
  }
}

document.getElementById('reset_button').addEventListener('click', reset);

document.getElementById('change_button').addEventListener('click', () => {
  reset();
  const blockId = document.getElementById("block_id").value;
  const block = document.getElementById(`${blockId}`);
  const bombCount = calculateBombCount(parseInt(blockId));
  block.textContent = bombCount;
});

function calculateBombCount(blockId) {
  // You can implement the logic to calculate the number of bombs in the surrounding area
  // For simplicity, returning a random number between 0 and 9 in this example
  return Math.floor(Math.random() * 10);
}
