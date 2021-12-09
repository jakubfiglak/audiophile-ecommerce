import React, { useReducer, ReactNode, useMemo } from 'react';
import CartContext from './cartContext';
import cartReducer from './cartReducer';
import { CartItem, State, RemoveItemArgs } from './types';

type Props = {
  children: ReactNode;
};

export const CartStateProvider = ({ children }: Props) => {
  const initialState: State = {
    items: [],
    totalPrice: 0,
    addItem: () => null,
    removeItem: () => null,
    clearCart: () => null,
  };

  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Add item to cart
  function addItem(item: CartItem) {
    dispatch({
      type: 'ADD_ITEM',
      payload: item,
    });
  }

  // Remove item from cart
  function removeItem(data: RemoveItemArgs) {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: data,
    });
  }

  // Clear cart
  function clearCart() {
    dispatch({
      type: 'CLEAR_CART',
    });
  }

  const { items, totalPrice } = state;

  const memoizedState = useMemo(
    () => ({
      items,
      totalPrice,
      addItem,
      removeItem,
      clearCart,
    }),
    [items, totalPrice]
  );

  return (
    <CartContext.Provider value={memoizedState}>
      {children}
    </CartContext.Provider>
  );
};
