// Section title counter

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

// Mobile menu button functionality

document.addEventListener('DOMContentLoaded', function () {
  const menuOpenBtn = document.querySelector('.menu-open-btn');
  const menuCloseBtn = document.querySelector('.menu-close-btn');
  const mobMenu = document.querySelector('.mob-menu');
  const mobMenuLinks = document.querySelectorAll('.mob-link');

  menuOpenBtn.addEventListener('click', function () {
    mobMenu.style.visibility = 'visible';
  });

  menuCloseBtn.addEventListener('click', function () {
    mobMenu.style.visibility = 'hidden';
  });

  mobMenuLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default link behavior
      const targetId = link.getAttribute('href').substring(1); // Extract target section ID
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: 'smooth', // Use smooth scrolling
          block: 'start', // Align the top of the section with the top of the viewport
        });

        mobMenu.style.visibility = 'hidden';
      }
    });
  });
});
