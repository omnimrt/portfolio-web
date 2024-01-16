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
    link.addEventListener('click', () => {
      mobMenu.style.visibility = 'hidden';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const scrollLinks = document.querySelectorAll('.scroll-link');

  scrollLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('data-target');
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        // Calculate the distance to scroll
        const offsetTop = targetSection.offsetTop;
        const scrollOptions = {
          top: offsetTop,
          behavior: 'smooth', // Use smooth scrolling
        };

        // Scroll to the target section
        window.scrollTo(scrollOptions);
      }
    });
  });
});
