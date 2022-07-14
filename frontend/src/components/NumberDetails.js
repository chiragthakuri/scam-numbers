// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const NumberDetails = ({ number }) => {
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
    </div>
  );
};

export default NumberDetails;
