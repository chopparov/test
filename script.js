// This is the "connective tissue" between frontend and backend.
// We stop the form from doing a normal page reload, and instead
// send its data to our Express server using fetch(), then read
// back whatever JSON the server responds with.

const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // stop the default full-page-reload submit

  const payload = {
    name: form.name.value,
    email: form.email.value,
    message: form.message.value,
  };

  status.textContent = 'Sending...';

  try {
    // POST = "send data to the server"
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await response.json();

    if (response.ok) {
      status.textContent = data.message; // "Thanks! We'll be in touch."
      form.reset();
    } else {
      status.textContent = data.message || 'Something went wrong.';
    }
  } catch (err) {
    status.textContent = 'Could not reach the server.';
  }
});
