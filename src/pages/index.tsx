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

export default function Home(props: any) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  });

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      <span>{JSON.stringify(props.list)}</span>

      <Product className='keen-slider__slide'>
        <Image
          src={camiseta1}
          width={520}
          height={480}
          alt=''
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image
          src={camiseta2}
          width={520}
          height={480}
          alt=''
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image
          src={camiseta3}
          width={520}
          height={480}
          alt=''
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image
          src={camiseta4}
          width={520}
          height={480}
          alt=''
        />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  );
}

export const getServerSideProps = async () => {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  return {
    props: {
      list: [1, 2, 3],
    },
  };
};
