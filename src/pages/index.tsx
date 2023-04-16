import {
  HomeContainer,
  Product,
} from '@/styles/pages/home';
import Image from 'next/image';

import camiseta1 from '../assets/camiseta1.png';
import camiseta2 from '../assets/camiseta2.png';
import camiseta3 from '../assets/camiseta3.png';
import camiseta4 from '../assets/camiseta4.png';
import camiseta5 from '../assets/camiseta5.png';

export default function Home() {
  return (
    <HomeContainer>
      <Product>
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

      <Product>
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
    </HomeContainer>
  );
}
