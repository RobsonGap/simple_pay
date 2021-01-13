import React from 'react';
import { useRouter } from 'next/router'

const SuccessPage: React.FC = () => {
  const { 
    query: { itemName },
   } = useRouter(); 
 
  return <h1>Thank you for buying {itemName}</h1>
}

export default SuccessPage;