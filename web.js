document.addEventListener('DOMContentLoaded', function() {
  const showBoxBtn = document.getElementById('table-of-contents');
  const myBox = document.getElementById('myBox');

  showBoxBtn.addEventListener('click', function() {
    myBox.classList.toggle('visible-box'); // Toggles the class
  });
});