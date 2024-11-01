// Nested Dynamic Routes

import React from 'react'
import { notFound } from 'next/navigation'

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

export default function ReviewDetails({ params: { productId, reviewId } }: { params: { productId: string; reviewId: string; } }) {
    if (getRandomInt(2) === 1) {
        throw new Error(`Error loading review`)
    }
    if (parseInt(reviewId) > 100) {
        notFound();
    }
    return (
        <div>Review {reviewId} for Product {productId}</div>
    )
}
