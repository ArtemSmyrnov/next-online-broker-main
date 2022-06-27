import data from '../../utils/data';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { Store } from '../../utils/Store';

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  const addToCartHandler = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;
    dispatch({ type: 'CART_ADD_ITEM', payload: { ...product, quantity: 1 } });
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Go back</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-20">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={440}
            height={440}
            layout="responsive"
          ></Image>
        </div>
        <div>
          <ul>
            <li>
              <h1 className="text-2xl text-center">{product.name}</h1>
            </li>
            <br></br>
            <li>Category: {product.category}</li>
            <br></br>
            Description:
            <li className="italic">{product.description}</li>
          </ul>
        </div>
        <div>
          <div className="card p-5">
            <div className="mb-2 flex justify-between">
              <div>Price: </div>
              <div> ${product.price}</div>
            </div>
            <div className="mb-2 flex justify-between">
              <div>Status: </div>
              <div> Available</div>
            </div>
            <button
              className="primary-button w-full"
              onClick={addToCartHandler}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
