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
  products: [],
  shippingValue: 0,
});

export default CartContext;
