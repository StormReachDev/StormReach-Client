// Imports:
import { config } from '@/config/EnvironmentVariables';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// This component provides the Stripe context to the application.
const stripePromise = loadStripe(config.STRIPE_PUBLIC_KEY);

export default function PaymentProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        appearance: {
          theme: 'stripe',
        },
      }}
    >
      {children}
    </Elements>
  );
}
