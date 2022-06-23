/* eslint-disable react/jsx-no-undef */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

export default function ProductItem({ product }) {
  return (
    <div className="card ">
      <Link href={`/product/${product.slug}`}>
        <a className="flex flex-col items-center ">
          <img src={product.image} alt={product.name} />
        </a>
      </Link>

      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p>${product.price}</p>
        <button className="primary-button">Add item</button>
      </div>
    </div>
  );
}
