import { useContext } from 'react';
import cartContext from './cartContext';
import { State } from './types';

export const useCartState = (): State => {
  const context = useContext(cartContext);
  if (context === undefined) {
    throw new Error('useCartContext hook must be used within CartState');
  }

  return context;
};
