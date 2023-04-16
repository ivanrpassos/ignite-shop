import {
  HomeContainer,
  Product,
} from '@/styles/pages/home';
import Image from 'next/image';

import { useKeenSlider } from 'keen-slider/react';

import camiseta1 from '../assets/camiseta1.png';
import camiseta2 from '../assets/camiseta2.png';
import camiseta3 from '../assets/camiseta3.png';
import camiseta4 from '../assets/camiseta4.png';
import camiseta5 from '../assets/camiseta5.png';

import 'keen-slider/keen-slider.min.css';
import { stripe } from '@/lib/stripe';
import { GetServerSideProps } from 'next';
import Stripe from 'stripe';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: number;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map((product) => {
        return (
          <Product
            key={product.id}
            className='keen-slider__slide'
          >
            <Image
              src={product.imageUrl}
              width={520}
              height={480}
              alt=''
            />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        );
      })}
    </HomeContainer>
  );
}

export const getServerSideProps: GetServerSideProps =
  async () => {
    const response = await stripe.products.list({
      expand: ['data.default_price'],
    });

    const products = response.data.map((product) => {
      const price = product.default_price as Stripe.Price;

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount! / 100,
      };
    });

    return {
      props: {
        products,
      },
    };
  };
