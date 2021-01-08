import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths, GetStaticProps } from 'next';

import stripeConfig from '../config/stripe'
 
const Product: React.FC = ()  => {
  return <h1>Product</h1>
};

export const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey, {
    apiVersion: '2020-08-27',
  });

 const skus = await stripe.skus.list();

 console.log(skus.data);

  return {
    paths: [],
    fallback: false,
  };
};


export const getStaticProps: GetStaticProps = async () => {
  return  {
    props: {},
  };
};

export default Product;
 