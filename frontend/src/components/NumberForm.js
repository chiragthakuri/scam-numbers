import { useState } from 'react';

const NumberForm = () => {
  const [phone_number, setPhoneNumber] = useState('');
  const [country_of_origin, setCountry] = useState('');
  const [description, setDesc] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const number = { phone_number, country_of_origin, description };

    const response = await fetch('/api/numbers/', {
      method: 'POST',
      body: JSON.stringify(number),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }

    if (response.ok) {
      setError(null);
      setPhoneNumber('');
      setDesc('');
      setCountry('');
      console.log('new number added', json);
    }
  };

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a New Phone Number</h3>

      <label>Phone Number:</label>
      <input
        type="tel"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phone_number}
      />

      <label>Country:</label>
      <input
        type="text"
        onChange={(e) => setCountry(e.target.value)}
        value={country_of_origin}
      />

      <label>Description:</label>
      <input
        type="text"
        onChange={(e) => setDesc(e.target.value)}
        value={description}
      />
      <button>Add Phone Number</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default NumberForm;
