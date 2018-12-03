import React, { useState } from 'react'
const AddKegForm = props => {
	const initialFormState = { id: '', name: '', brewer: '', alcohol: '', quantity: '' };
	const [keg, setKeg] = useState(initialFormState);
	const handleInputChange = event => {
		const { name, value } = event.target;
		setKeg({ ...keg, [name]: value });
	};
	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				if (!keg.name || !keg.brewer || !keg.alcohol || !keg.quantity) return
				props.addKeg(keg);
				setKeg(initialFormState);
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
			<button>Add new keg</button>
		</form>
	);
};

export default AddKegForm;
