document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  try {
    const response = await fetch('https://formspree.io/f/mgegvpqe', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    console.log('Form action URL:', 'https://formspree.io/f/mgegvpqe');
    console.log('Method:', 'POST');

    if (response.ok) {
      document.getElementById('formMessage').style.display = 'block';
      form.reset();
    }
  } catch (error) {
    alert('Oops! There was a problem.');
  }
});
