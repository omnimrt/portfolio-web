// Section title counter

document.addEventListener('DOMContentLoaded', function () {
  const sectionTitles = document.querySelectorAll('.section-title');
  const navSectionTitles = document.querySelectorAll('.nav-item');

  sectionTitles.forEach((title, index) => {
    const counter = (index + 1).toString().padStart(2, '0');
    const counterSpan = document.createElement('span');
    counterSpan.classList.add('section-counter');
    counterSpan.textContent = counter;
    title.insertBefore(counterSpan, title.firstChild);
  });

  navSectionTitles.forEach((title, index) => {
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
  const body = document.querySelector('body');
  const toggleContainer = document.querySelector('.theme-toggle-container');
  const toggle = document.querySelector('.theme-toggle');

  menuOpenBtn.addEventListener('click', function () {
    mobMenu.classList.add('visible');
    toggleContainer.style.opacity = '0';
    toggleContainer.style.pointerEvents = 'none';
    toggle.style.opacity = '0';
    toggle.style.pointerEvents = 'none';
    body.classList.add('no-scroll');
  });

  menuCloseBtn.addEventListener('click', function () {
    mobMenu.classList.remove('visible');
    setTimeout(function () {
      toggleContainer.style.opacity = '1';
      toggleContainer.style.pointerEvents = 'auto';
      toggle.style.opacity = '1';
      toggle.style.pointerEvents = 'auto';
    }, 300); // Adjust delay if needed
    body.classList.remove('no-scroll');
  });

  mobMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobMenu.classList.remove('visible');
      setTimeout(function () {
        toggleContainer.style.opacity = '1';
        toggleContainer.style.pointerEvents = 'auto';
        toggle.style.opacity = '1';
        toggle.style.pointerEvents = 'auto';
      }, 300); // Adjust delay if needed
      body.classList.remove('no-scroll');
    });
  });
});


// document.addEventListener('DOMContentLoaded', function () {
//   const menuOpenBtn = document.querySelector('.menu-open-btn');
//   const menuCloseBtn = document.querySelector('.menu-close-btn');
//   const mobMenu = document.querySelector('.mob-menu');
//   const mobMenuLinks = document.querySelectorAll('.mob-link');
//   const body = document.querySelector('body');
//   const toggleContainer = document.querySelector('.theme-toggle-container');
//   const toggle = document.querySelector('.theme-toggle');

//   menuOpenBtn.addEventListener('click', function () {
//     mobMenu.style.visibility = 'visible';
//     toggleContainer.style.opacity = '0';
//     toggleContainer.style.pointerEvents = 'none';
//     toggle.style.opacity = '0';
//     toggle.style.pointerEvents = 'none';
//     body.classList.add('no-scroll');
//   });

//   menuCloseBtn.addEventListener('click', function () {
//     mobMenu.style.visibility = 'hidden';
//     toggleContainer.style.opacity = '1';
//     toggleContainer.style.pointerEvents = 'auto';
//     toggle.style.opacity = '1';
//     toggle.style.pointerEvents = 'auto';
//     body.classList.remove('no-scroll');
//   });

//   mobMenuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       mobMenu.style.visibility = 'hidden';
//       toggleContainer.style.opacity = '1';
//       toggleContainer.style.pointerEvents = 'auto';
//       toggle.style.opacity = '1';
//       toggle.style.pointerEvents = 'auto';
//       body.classList.remove('no-scroll');
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const menuOpenBtn = document.querySelector('.menu-open-btn');
//   const menuCloseBtn = document.querySelector('.menu-close-btn');
//   const mobMenu = document.querySelector('.mob-menu');
//   const mobMenuLinks = document.querySelectorAll('.mob-link');
//   const body = document.querySelector('body');
//   const toggle = document.querySelector('.theme-toggle-container');

//   menuOpenBtn.addEventListener('click', function () {
//     mobMenu.style.visibility = 'visible';

//     if (!toggle.classList.contains('hidden')) {
//       toggle.classList.add('hidden');
//     } else {
//       toggle.classList.remove('hidden');
//     }

//     body.classList.add('no-scroll');
//   });

//   menuCloseBtn.addEventListener('click', function () {
//     mobMenu.style.visibility = 'hidden';
//     body.classList.remove('no-scroll');
//   });

//   mobMenuLinks.forEach(link => {
//     link.addEventListener('click', () => {
//       mobMenu.style.visibility = 'hidden';
//       body.classList.remove('no-scroll');
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const scrollLinks = document.querySelectorAll('.scroll-link');

//   scrollLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//       e.preventDefault();

//       const targetId = this.getAttribute('data-target');
//       const targetSection = document.querySelector(targetId);

//       if (targetSection) {
//         // Calculate the distance to scroll
//         const offsetTop = targetSection.offsetTop;
//         const scrollOptions = {
//           top: offsetTop,
//           behavior: 'smooth',
//         };

//         // Scroll to the target section
//         window.scrollTo(scrollOptions);
//       }
//     });
//   });
// });
