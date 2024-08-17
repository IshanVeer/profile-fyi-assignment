'use client';
import React, { createContext, useReducer } from 'react';

interface CartItem {
  id: number | string;
  quantity: number;
  title: string;
  image: string;
  price: number;
}
interface CartState {
  items: CartItem[];
}

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: CartItem['id']) => void;
}
type CartAction =
  | { type: 'ADD_ITEM'; item: Omit<CartItem, 'quantity'> }
  | { type: 'REMOVE_ITEM'; id: CartItem['id'] };

const CartContext = createContext<CartContextType>({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
});

const cartReducer = (state: CartState, action: CartAction) => {
  if (action.type === 'ADD_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.item.id
    );

    const updatedItems = [...state.items];

    if (existingCartItemIndex > -1) {
      const existingItem = state.items[existingCartItemIndex];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: updatedItems };
  }
  if (action.type === 'REMOVE_ITEM') {
    const existingCartItemIndex = state.items.findIndex(
      (item: any) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = [...state.items];

    if (existingCartItem.quantity === 1) {
      updatedItems.splice(existingCartItemIndex, 1);
    } else {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity - 1,
      };
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return { ...state, items: updatedItems };
  }

  return state;
};

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    dispatchCartAction({ type: 'ADD_ITEM', item });
  };
  const removeItem = (id: CartItem['id']) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', id });
  };
  const cartContext = {
    items: cart.items,
    addItem,
    removeItem,
  };
  console.log(cartContext, 'cartContext');

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartContext;
