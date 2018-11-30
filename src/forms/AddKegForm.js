import React, { useState } from 'react'

const AddKegForm = props => {
	const initialFormState = { id: null, name: '', username: '' };
	const [keg, setKeg] = useState(initialFormState);

	const handleInputChange = event => {
		const { name, value } = event.target;
		setKeg({ ...keg, [name]: value });
	};



	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				if (!keg.name || !keg.username) return
				props.addKeg(keg);
				setKeg(initialFormState);
			}}
		>
			<label>Keg Name</label>
			<input type="text" name="name" value={keg.name} onChange={handleInputChange} onFocus={(e) => e.target.style.backgroundColor = 'white'} blur={(e) => e.target.style.backgroundColor = 'lightblue'} />
			<label>Brewer</label>
			<input type="text" name="brewer" value={keg.username} onChange={handleInputChange} />
			<button>Add new keg</button>
		</form>
	)
}

export default AddKegForm
