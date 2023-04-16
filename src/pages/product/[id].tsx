import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '@/styles/pages/product';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Product() {
  const { query } = useRouter();

  return (
    <ProductContainer>
      <ImageContainer>
        {/* <Image src="" /> */}
      </ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 70,90</span>

        <p>
          Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi fuga repellat
          doloremque deserunt quia nihil perspiciatis
          mollitia ut suscipit tempore neque quae enim porro
          facilis quibusdam officiis incidunt, quaerat est!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  );
}
