// Dynamic Routes

import { Metadata } from 'next';
import React from 'react'

type Props = { params: { productId: string } }

export const generateMetadata = async ({ params: { productId } }: Props): Promise<Metadata> => {
  const title = await new Promise<string>((resolve) => {
    setTimeout(() => resolve(productId), 100);
  });

  return {
    title: `Product ${title}`,
  }
};

export default function Product({ params: { productId } }: Props) {
  return (
    <div>Product {productId}</div>
  )
}
