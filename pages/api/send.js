const sgMail = require('@sendgrid/mail');

export default async function (req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { email, message, name } = req.body;

  const content = {
    to: 'hello@snopkowski.com',
    from: 'hello@snopkowski.com',
    subject: `Contact form - ${email}`,
    text: message,
    html: `
    <p>Name: ${name}</p>
    <p>Email: ${email}</p><br/>
    <p>Message: ${message}</p>`,
  };

  try {
    await sgMail.send(content);
    res.status(200).send('Message sent!');
  } catch (error) {
    console.log('ERROR', error);
    res.status(400).send('Message not sent.');
  }
}
