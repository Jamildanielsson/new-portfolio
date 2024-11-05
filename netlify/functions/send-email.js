import axios from 'axios';

const service_id = import.meta.env.SERVICE_ID;
const public_key = import.meta.env.VITE_PUBLIC_KEY;
const template = 'template_64f64kb';

export async function handler(event, context) {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Metoden är inte tillåten' }),
    };
  }

  const { name, email, message } = JSON.parse(event.body);

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Alla fält är obligatoriska' }),
    };
  }

  try {
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: service_id,
      template_id: template,
      user_id: public_key,
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'E-post skickat!' }),
    };
  } catch (error) {
    console.error('Fel vid e-postsändning:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Något gick fel vid e-postsändning' }),
    };
  }
};
