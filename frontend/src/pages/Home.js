import { useEffect } from 'react';
import { useNumbersContext } from '../hooks/useNumbersContext';

import NumberDetails from '../components/NumberDetails';
import NumberForm from '../components/NumberForm';

const Home = () => {
  const { numbers, dispatch } = useNumbersContext();
  useEffect(() => {
    const fetchNumbers = async () => {
      const response = await fetch('/api/numbers/');
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: 'SET_NUMBERS', payload: json });
      }
    };

    fetchNumbers();
  }, []);

  return (
    <div className="home">
      <div className="numbers">
        {numbers &&
          numbers.map((number) => (
            <NumberDetails key={number._id} number={number} />
          ))}
      </div>
      <NumberForm />
    </div>
  );
};

export default Home;
