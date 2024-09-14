// Initialize EmailJS with your public key
emailjs.init('your-public-key');

document
  .getElementById('contactForm')
  .addEventListener('submit', async function (e) {
    e.preventDefault(); // Prevents the form from redirecting

    const form = document.getElementById('contactForm');
    const formData = {
      username: form.username.value,
      email: form.email.value,
      message: form['user-message'].value,
    };

    try {
      // Send email using EmailJS
      const response = await emailjs.send(
        'service_8ntxuwg', // Replace with your actual service ID
        'template_0rz6r1r', // Replace with your actual template ID
        formData
      );

      // Success handling
      console.log('SUCCESS!', response.status, response.text);
      alert('Message sent successfully!');
      form.reset(); // Optionally reset the form after submission
    } catch (error) {
      // Error handling
      console.log('FAILED...', error);
      alert('Failed to send message. Please try again.');
    }
  });
