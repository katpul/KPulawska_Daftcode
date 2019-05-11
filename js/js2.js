document.getElementById('button-modal').addEventListener('click', function() {
  document.getElementById('overlay').classList.add('visible');
  document.getElementById('modal').classList.add('visible');
});

document.getElementById('close-button').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('modal').classList.remove('visible');
});
document.getElementById('overlay').addEventListener('click', function() {
  document.getElementById('overlay').classList.remove('visible');
  document.getElementById('modal').classList.remove('visible');
});




