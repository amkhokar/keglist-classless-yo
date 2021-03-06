import React, { useState, useEffect } from 'react';
const EditKegForm = props => {
  const [keg, setKeg] = useState(props.currentKeg);
  useEffect(
    () => {
      setKeg(props.currentKeg);
    },
    [props]
  );
  const handleInputChange = event => {
    const { name, value } = event.target;
    setKeg({ ...keg, [name]: value });
  };
  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        props.updateKeg(keg.id, keg);
      }}
    >
      <label>Keg Name</label>
      <input type="text" name="name" value={keg.name} onChange={handleInputChange} />
      <label>Brewer</label>
      <input type="text" name="brewer" value={keg.brewer} onChange={handleInputChange} />
      <label>Alcohol Content</label>
      <input type="text" name="alcohol" value={keg.alcohol} onChange={handleInputChange} />
      <label>Quantity</label>
      <input type="text" name="quantity" value={keg.quantity} onChange={handleInputChange} />
      <button>Update Keg</button>
      <button onClick={() => props.setEditing(false)} className="button muted-button">
        Cancel
      </button>
    </form>
  );
};
export default EditKegForm;
