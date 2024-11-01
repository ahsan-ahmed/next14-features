// Nested Dynamic Routes

import React from 'react'
import { notFound } from 'next/navigation'

export default function ReviewDetails({ params: { productId, reviewId } }: { params: { productId: string; reviewId: string; } }) {
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <div>Review {reviewId} for Product {productId}</div>
    )
}
