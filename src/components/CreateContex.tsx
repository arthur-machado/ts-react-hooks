import { createContext } from 'react';

/* Cria um contexto onde temos um carrinho
de compras e seus produtos
*/

interface Product {
  id: number;
  name: string;
  price: number;
}

interface Cart {
  products?: Product[];
  shippingValue?: number;
}

const CartContext = createContext<Cart>({
  /* Cria um produto que poderá 
  ser lido pelos filhos */
  products: [
    { id: 1, name: 'Produto1', price: 0 },
    { id: 2, name: 'Produto2', price: 0 },
  ],
  shippingValue: 0,
});

export default CartContext;
