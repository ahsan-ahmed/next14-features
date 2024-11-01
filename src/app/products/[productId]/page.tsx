// Dynamic Routes

import React from 'react'

export default function Product({ params: { productId } }: { params: { productId: string } }) {
  return (
    <div>Product {productId}</div>
  )
}
