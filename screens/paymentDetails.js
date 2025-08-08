const paymentDetails = [
  {
    id: 'card_success',
    cardNumber: '4242 4242 4242 4242',
    expiry: '12/26',
    cvv: '123',
    outcome: 'success',
    message: 'Payment successful!',
  },
  {
    id: 'card_invalid',
    cardNumber: '4000 0000 0000 0002',
    expiry: '11/25',
    cvv: '456',
    outcome: 'invalid',
    message: 'Invalid card credentials.',
  },
  {
    id: 'card_insufficient',
    cardNumber: '4000 0000 0000 9995',
    expiry: '10/27',
    cvv: '789',
    outcome: 'insufficient',
    message: 'Insufficient balance.',
  },
];

export default paymentDetails;