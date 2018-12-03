import React, { useState, Fragment } from 'react';
import AddKegForm from './forms/AddKegForm';
import EditKegForm from './forms/EditKegForm';
import KegTable from './tables/KegTable';

const App = () => {
	// Data
	const kegsData = [
		{ id: 1, name: 'Derek Dubble', brewer: 'Old Mountain', alcohol: 8, quantity: 15 },
		{ id: 2, name: 'Chan City IPA', brewer: 'Old Mountain', alcohol: 8, quantity: 15 },
		{ id: 3, name: 'Ryan Lager', brewer: 'Old Mountain', alcohol: 8, quantity: 15 }
	];

	const initialKeg = { currentKeg: "" };
	const [kegs, setKegs] = useState(kegsData);
	const [currentKeg, setCurrentKeg] = useState(initialKeg);
	const [editing, setEditing] = useState(false);
	const addKeg = keg => {
		keg.id = kegs.length + 1;
		setKegs([...kegs, keg]);
	};
	const deleteKeg = id => {
		setEditing(false);
		setKegs(kegs.filter(keg => keg.id !== id));
	};
	const updateKeg = (id, updatedKeg) => {
		setEditing(false);
		setKegs(kegs.map(keg => (keg.id === id ? updatedKeg : keg)));
	};
	const editRow = keg => {
		setEditing(true);
		setCurrentKeg({ ...keg, id: keg.id, name: keg.name, brewer: keg.brewer, alc: keg.alcohol, quantity: keg.quantity });
	};

	const updateQuantityUp = (id, updatedKeg) => {
		updatedKeg.quantity++;
		setKegs(kegs.map(keg => (keg.id === id ? updatedKeg : keg)));
		setEditing(false);
	};
	const updateQuantityDown = (id, updatedKeg) => {
		updatedKeg.quantity--;
		if (updatedKeg.quantity <= 0) {
			deleteKeg(id);
		} else {
			setKegs(kegs.map(keg => (keg.id === id ? updatedKeg : keg)));
			setEditing(false);
		}
	};

	return (
		<div className="container">
			<h1>Welcome to Ahmed's Taproom</h1>
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit Keg</h2>
							<EditKegForm
								editing={editing}
								setEditing={setEditing}
								currentKeg={currentKeg}
								updateKeg={updateKeg}
							/>
						</Fragment>
					) : (
							<Fragment>
								<h2>Add keg</h2>
								<AddKegForm addKeg={addKeg} />
							</Fragment>
						)}
				</div>
				<div className="flex-large">
					<h2>View kegs</h2>
					<KegTable kegs={kegs} editRow={editRow} deleteKeg={deleteKeg} updateQuantityDown={updateQuantityDown} updateQuantityUp={updateQuantityUp} />
				</div>
			</div>
		</div>
	)
}

export default App;
