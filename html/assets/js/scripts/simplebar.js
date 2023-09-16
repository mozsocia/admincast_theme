


function simpleBarFn(argument) {
  const container = document.querySelector('.my-scrollable-container');
  container.style.maxHeight = (window.innerHeight - 65) + 'px';

  // Initialize SimpleBar
  simpleBarInstance = new SimpleBar(container);
}

window.addEventListener('DOMContentLoaded', function () {
  simpleBarFn()
});

// Adjust container height on window resize
window.addEventListener('resize', function () {
  simpleBarFn()
});