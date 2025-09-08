
document.addEventListener('DOMContentLoaded', function() {
  let count = localStorage.getItem('page_view_count');

  if (count === null) {
    count = 1;
  } else {
    count = parseInt(count) + 1;
  }

  localStorage.setItem('page_view_count', count);

  const counterElement = document.getElementById('counter');
  if (counterElement) {
    counterElement.innerText = count;
  }
});
