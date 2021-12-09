import { State, Action } from './types';

export default (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIdx !== -1) {
        const newItems = [...state.items];
        newItems[existingItemIdx].quantity += action.payload.quantity;

        return {
          ...state,
          items: newItems,
          totalPrice:
            state.totalPrice + action.payload.price * action.payload.quantity,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice:
          state.totalPrice + action.payload.price * action.payload.quantity,
      };
    }

    case 'REMOVE_ITEM': {
      const existingItemIdx = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingItemIdx !== -1) {
        const newItems = [...state.items];
        newItems[existingItemIdx].quantity -= action.payload.quantity;

        return {
          ...state,
          items: newItems,
          totalPrice:
            state.totalPrice - action.payload.price * action.payload.quantity,
        };
      }
      return {
        ...state,
        items: [...state.items, action.payload],
        totalPrice:
          state.totalPrice - action.payload.price * action.payload.quantity,
      };
    }

    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalPrice: 0,
      };

    default:
      return state;
  }
};
