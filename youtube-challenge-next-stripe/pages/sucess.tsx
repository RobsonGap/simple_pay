import React from 'react';
import { useRouter } from 'next/router'

const SuccessPage: React.FC = () => {
  const { query } = useRouter(); 
 
  return <h1>Thank you for buying {query.itemName}</h1>
}