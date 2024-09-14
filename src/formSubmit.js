document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault();

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  console.log('Form submitted'); // Check if the form is being submitted

  try {
    const response = await fetch('https://formspree.io/f/mgegvpqe', {
      method: 'POST',
      body: formData,
      headers: {
        Accept: 'application/json',
      },
    });

    console.log('Response status:', response.status);
    console.log('Response data:', await response.json());

    if (response.ok) {
      document.getElementById('formMessage').style.display = 'block';
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Oops! There was a problem.');
  }
});
