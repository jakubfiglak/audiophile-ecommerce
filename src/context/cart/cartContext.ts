import { createContext } from 'react';
import { State } from './types';

const cartContext = createContext<State | undefined>(undefined);

export default cartContext;
