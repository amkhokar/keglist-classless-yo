import React from 'react';
const KegTable = props => (
  <table>
    <thead>
      <tr>
        <th>Keg Name</th>
        <th>Brewer</th>
        <th>ALC%</th>
        <th>Quantity</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.kegs.length > 0 ? (
        props.kegs.map(keg => (
          <tr key={keg.id}>
            <td>{keg.name}</td>
            <td>{keg.brewer}</td>
            <td style={keg.alcohol > 20 ? { color: 'red' } : { color: 'green' }}>{keg.alcohol ? keg.alcohol + '%' : keg.alcohol}</td>
            <td style={keg.quantity <= 1 ? { color: 'red' } : {}}>{keg.quantity}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(keg);
                }}
                className="button square-button"
              >
                Edit
              </button>
              <button
                style={keg.quantity <= 1 ? { backgroundColor: 'red' } : { backgroundColor: '#0366EE' }}
                id={`lower${keg.id}`}
                onClick={(e) => {
                  props.updateQuantityDown(keg.id, keg);
                  if (keg.quantity === 1) {
                    document.getElementById(`lower${keg.id}`).style.backgroundColor = "red";
                  }
                }}
                className="button square-button"
              >
                Lower
              </button>
              <button
                id={`higher${keg.id}`}
                onClick={() => {
                  if (keg.quantity === 1) {
                    document.getElementById(`lower${keg.id}`).style.backgroundColor = "#0366EE";
                  }
                  props.updateQuantityUp(keg.id, keg);
                }}
                className="button square-button"
              >
                Higher
              </button>
              <button
                onClick={() => props.deleteKeg(keg.id)}
                className="button square-button"
              >
                Delete
              </button>
            </td>
          </tr>
        ))
      ) : (
          <tr>
            <td colSpan={3}>No kegs</td>
          </tr>
        )}
    </tbody>
  </table>
);

export default KegTable;
