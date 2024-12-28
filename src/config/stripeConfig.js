import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(
  'pk_test_51QRgIiHd7yXDBN2DyYlQNcNlTfqMvb6y5ECZh9s7GZdTFvo8o8DJjR8x1p8X453kuvwohYkHgGmRCpcTw3ejHLpq00T2pLvZa3',
);

export default stripePromise;
