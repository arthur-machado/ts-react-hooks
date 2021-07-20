import React, { useContext } from 'react';
import CreateContext from './CreateContex';

const UseContext: React.FC = () => {
  const { products } = useContext(CreateContext);

  return <div>{products?.map((product) => product.name).join(', ')}</div>;
};

export default UseContext;
