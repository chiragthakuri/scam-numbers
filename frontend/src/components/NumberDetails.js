import { useNumbersContext } from '../hooks/useNumbersContext';

// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const NumberDetails = ({ number }) => {
  const { dispatch } = useNumbersContext();
  const handleClick = async () => {
    const response = await fetch('/api/numbers/' + number._id, {
      method: 'DELETE'
    });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: 'DELETE_NUMBER', payload: json });
    }
  };
  return (
    <div className="number-details">
      <h4>Phone Number: {number.phone_number}</h4>
      <p>
        <strong>Description: </strong>
        {number.description}
      </p>
      <p>
        <strong>Country of Origin: </strong>
        {number.country_of_origin}
      </p>
      <p>
        <strong>Created Date: </strong>
        {formatDistanceToNow(new Date(number.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleClick}>Delete</span>
    </div>
  );
};

export default NumberDetails;
