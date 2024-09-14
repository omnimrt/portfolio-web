document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault(); // Prevents the form from redirecting

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

    if (response.ok) {
      // Show success message and reset the form
      document.getElementById('formMessage').style.display = 'block'; // Example: success message
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    alert('Oops! There was a problem.');
  }
});
