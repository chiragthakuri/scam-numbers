import { NumbersContext } from '../context/NumbersContext';
import { useContext } from 'react';

export const useNumbersContext = () => {
  const context = useContext(NumbersContext);

  if (!context) {
    throw Error(
      'useNumbersContext must be used inside an NumbersContextProvider'
    );
  }

  return context;
};
