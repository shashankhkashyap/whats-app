const { DiffieHellmanGroup } = require('crypto');
const request = require('request');

const API_URL = 'https://api.whatsapp.com/send';

const phone_number = '1234567890'; // replace with the phone number you want to send the message to
const message = 'Hello from the WhatsApp Business API client!'; // replace with the message you want to send

const sendWhatsAppMessage = (phone_number, message) => {
  const url = `${API_URL}?phone=${phone_number}&text=${message}`;
  request(url, (error, response, body) => {
    if (error) {
      console.log(`Error sending message: ${error}`);
    } else {
      console.log(`Message sent to ${phone_number}: ${message}`);
    }
  });
};

sendWhatsAppMessage(phone_number, message);
7829761673
hello