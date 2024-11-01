// Nested Dynamic Routes
"use client"

import React from 'react'
import { notFound } from 'next/navigation'
import { use } from 'react';

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count)
}

type Props = { params: Promise<{ productId: string; reviewId: string; }> };

export default function ReviewDetails({ params: paramsPromise }: Props) {
    // Use React's `use` function to await the params promise
    const params = use(paramsPromise);

    if (getRandomInt(2) === 1) {
        throw new Error(`Error loading review`)
    }
    if (parseInt(params?.reviewId) > 100) {
        notFound();
    }
    return (
        <div>Review {params.reviewId} for Product {params.productId}</div>
    )
}
