import { IImage } from '../../../graphql/types';

export type CartItem = {
  id: string;
  name: string;
  image: IImage;
  price: number;
  quantity: number;
};

export type RemoveItemArgs = {
  id: string;
  quantity: number;
};

export type State = {
  items: CartItem[];
  totalPrice: number;
  addItem: (item: CartItem) => void;
  removeItem: (data: RemoveItemArgs) => void;
  clearCart: () => void;
};

export type Action =
  | { type: 'ADD_ITEM'; payload: CartItem }
  | { type: 'REMOVE_ITEM'; payload: { id: string; quantity: number } }
  | {
      type: 'CLEAR_CART';
    };
