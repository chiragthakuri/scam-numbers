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
        {number.createdAt}
      </p>
    </div>
  );
};

export default NumberDetails;
