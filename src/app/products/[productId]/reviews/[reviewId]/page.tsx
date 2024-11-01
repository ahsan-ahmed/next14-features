// Nested Dynamic Routes

import React from 'react'

export default function ReviewDetails({ params: { productId, reviewId } }: { params: { productId: string; reviewId: string; } }) {
    return (
        <div>Review {reviewId} for Product {productId}</div>
    )
}
