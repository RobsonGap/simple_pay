import React from 'react';
import Stripe from 'stripe';
import { GetStaticPaths } from 'next';

import stripeConfig from '../config/stripe'
 
const Product: React.FC = ()  => {
  return <h1>Simple Stripe Store</h1>
};

const getStaticPaths: GetStaticPaths = async () => {
  const stripe = new Stripe(stripeConfig.secretKey {
    apiVersion: '2020-08-27'
  })

 

  return {
    paths: [],
    fallback: false
  }
}

export default Product;
 