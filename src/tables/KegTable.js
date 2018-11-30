import React from 'react'

const KegTable = props => (
  <table>
    <thead>
      <tr>
        <th>Keg Name</th>
        <th>Brewer</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.kegs.length > 0 ? (
        props.kegs.map(keg => (
          <tr key={keg.id}>
            <td>{keg.name}</td>
            <td>{keg.username}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(keg)
                }}
                className="button muted-button"
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteKeg(keg.id)}
                className="button muted-button"
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
)

export default KegTable
