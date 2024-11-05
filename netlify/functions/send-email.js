import axios from 'axios'; // Importera axios direkt

const service_id = import.meta.env.VITE_SERVICE_ID; // Netlify environment variables börjar med VITE_ när du använder Vite
const public_key = import.meta.env.VITE_PUBLIC_KEY;
const template = 'template_64f64kb';

export const handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ message: 'Metoden är inte tillåten' }),
    };
  }

  let responseBody;

  try {
    const { name, email, message } = JSON.parse(event.body);

    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Alla fält är obligatoriska' }),
      };
    }

    // Skicka e-post via EmailJS
    const response = await axios.post('https://api.emailjs.com/api/v1.0/email/send', {
      service_id: service_id,    // Din tjänst-ID från EmailJS
      template_id: template,     // Din mall-ID från EmailJS
      user_id: public_key,       // Din användar-ID från EmailJS
      template_params: {
        name: name,
        email: email,
        message: message,
      },
    });

    responseBody = {
      message: 'E-post skickat!',
      success: true,
      response: response.data,
    };

    return {
      statusCode: 200,
      body: JSON.stringify(responseBody),
    };
  } catch (error) {
    console.error('Fel vid e-postsändning:', error); // Logga fel på servern för felsökning

    responseBody = {
      message: 'Något gick fel vid e-postsändning',
      success: false,
      error: error.message,
    };

    return {
      statusCode: 500,
      body: JSON.stringify(responseBody),
    };
  }
};
