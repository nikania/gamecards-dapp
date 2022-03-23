import React, { createContext, useReducer } from 'react';

const initialState = {
    api: {},
};
const store = createContext(initialState);

// eslint-disable-next-line react/prop-types
const PolkadotProvider = ({ children }) => {
  const [polkadotState, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'setAPI':
        return {
          ...state,
          api: action?.payload,
        };
      case 'setInjector':
        return {
          ...state,
          injector: action?.payload,
        };
      default:
        throw new Error('Action not found');
    }
  }, initialState);

  return (
    <store.Provider value={{ polkadotState, dispatch }}>
      {children}
    </store.Provider>
  );
};

export { store, PolkadotProvider };
