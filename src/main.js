document.addEventListener('DOMContentLoaded', function () {
  const sectionTitles = document.querySelectorAll('.section-title');

  sectionTitles.forEach((title, index) => {
    const counter = (index + 1).toString().padStart(2, '0');
    const counterSpan = document.createElement('span');
    counterSpan.classList.add('section-counter');
    counterSpan.textContent = counter;

    title.insertBefore(counterSpan, title.firstChild);
  });
});
