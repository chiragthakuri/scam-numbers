import { createContext, useReducer } from 'react';

export const NumbersContext = createContext();

export const numbersReducer = (state, action) => {
  switch (action.type) {
    case 'SET_NUMBERS':
      return {
        numbers: action.payload
      };
    case 'CREATE_NUMBERS':
      return {
        numbers: [action.payload, ...state.numbers]
      };

    case 'DELETE_NUMBER':
      return {
        numbers: state.numbers.filter(
          (number) => number._id !== action.payload._id
        )
      };

    default:
      return state;
  }
};

export const NumbersContextProvier = ({ children }) => {
  const [state, dispatch] = useReducer(numbersReducer, {
    numbers: null
  });

  return (
    <NumbersContext.Provider value={{ ...state, dispatch }}>
      {children}
    </NumbersContext.Provider>
  );
};
