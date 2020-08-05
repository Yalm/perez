import { https } from 'firebase-functions';
import { createTransport } from 'nodemailer';
import * as cors from 'cors';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
const corsHandler = cors({ origin: 'https://gruasperez.com.pe' });

export const sendContact = https.onRequest(async (request, response) => {
  corsHandler(request, response, async () => {
    if (request.method !== 'POST') {
      response.status(405).send('I am not happy');
      return;
    }

    const transporter = createTransport({
      service: 'gmail',
      auth: {
        user: 'renzomanuelc@gmail.com',
        pass: 'gjoiyvaomhsegutp'
      }
    });

    const mailOptions = {
      to: 'factoriagruasperez@gmail.com',
      subject: 'Mensaje de contáctanos',
      html: `<h1>Nuevo mensaje de contáctanos</h1>
            <ul>
                <li>Nombre: ${request.body.name}</li>
                <li>Correo: ${request.body.email}</li>
                <li>Asunto: ${request.body.subject}</li>
                <li>Mensaje: ${request.body.message}</li>
            </ul>`
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (error) {
      response.status(500).send('oops');
    }
    response.status(200).send('send');
  });
});
