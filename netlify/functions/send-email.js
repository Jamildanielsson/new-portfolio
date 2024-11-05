import axios from 'axios';

const SERVICEID = import.meta.env.SERVICE_ID;
const TEMPLATE = import.meta.env.TEMPLATE;
const PUBLICKEY = import.meta.env.PUBLIC_KEY


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
    // Skicka e-post via EmailJS
    const response = await axios.post(
      'https://api.emailjs.com/api/v1.0/email/send',
      {
        service_id: SERVICEID,
        template_id: TEMPLATE, 
        user_id: PUBLICKEY, 
        template_params: {
          name: name,
          email: email,
          message: message,
        },
      }
    );

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
}
