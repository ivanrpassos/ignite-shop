import { stripe } from '@/lib/stripe';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const priceID = 'price_1MxT9VAfKcHY8PbJCR43BZif';

  const successUrl = `${process.env.NEXT_URL}/success`;
  const cancelUrl = `${process.env.NEXT_URL}/cancel`;

  const checkoutSession =
    await stripe.checkout.sessions.create({
      success_url: successUrl,
      cancel_url: cancelUrl,
      mode: 'payment',
      line_items: [
        {
          price: priceID,
          quantity: 1,
        },
      ],
    });

  return res.status(201).json({
    checkoutUrl: checkoutSession.url,
  });
}
