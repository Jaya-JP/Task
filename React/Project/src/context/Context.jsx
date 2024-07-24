import React, { createContext, useReducer } from 'react';

const initialState = {
  items: [],
};
export const Context = createContext(initialState);

const Reducer = (state, action) => {
  switch (action.type) {
    case 'Add_Item':
      return {...state,items: [...state.items, action.payload],};
    case 'Remove_Item':
      return {...state,items: state.items.filter(item => item.id !== action.payload),};
    default:
      return state;
  }
};

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const addItem = item => {
    dispatch({ type: 'Add_Item', payload: item });
  };

  const removeItem = id => {
    dispatch({ type: 'Remove_Item', payload: id });
  };

  return (
    <Context.Provider value={{items: state.items,addItem,removeItem,}}>
      {children}
    </Context.Provider>
  );
};
