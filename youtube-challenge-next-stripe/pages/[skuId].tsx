import Link from 'next/link';
import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';
import CheckoutButton from 'next/link';

import stripeConfig from '../config/stripe';

interface Props {
  sku: Stripe.Sku;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

const skus = await stripe.skus.list();

const paths = skus.data.map((sku) => ({
  params: {
    skuId: sku.id,
  },
}));

return {
  paths,
  fallback: false,
};

}
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

const { skuId } = params;  
 
const sku = await stripe.skus.retrieve(params.skuId as string);

  return {
    props: {
      sku,
    },
  };
};

const Product: React.FC<Props> = ({ sku }) => {
  return (
    <div>
      <h1>{sku.attributes.name}</h1>

      {sku.image && ( 
      <img 
        src={sku.image}
        style={{
          width: '100px',
        }}
      />
      )}


      <h2>
        {Number(sku.price/ 100).toFixed} {sku.currency.toUpperCase()}
      </h2>

      <CheckoutButton skuId={sku.id} itemName={sku.attributes.name} />

      <br />
      <br />

     <link href="/">Go back</link>   
    </div>
  );
};

export default Product;