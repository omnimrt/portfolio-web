document.getElementById('contactForm').addEventListener('submit', async e => {
  e.preventDefault(); // Prevents the form from redirecting

  const form = document.getElementById('contactForm');
  const formData = new FormData(form);

  try {
    const response = await axios.post(
      'https://formspree.io/f/mgegvpqe',
      formData,
      {
        headers: {
          Accept: 'application/json',
        },
      }
    );

    if (response.status === 200) {
      // Show success message and reset the form
      document.getElementById('formMessage').style.display = 'block'; // Example: success message
      form.reset();
    } else {
      alert('Failed to send message. Please try again.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Oops! There was a problem.');
  }
});
