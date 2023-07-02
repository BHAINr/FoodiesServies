import React from 'react'

const AdminCard = (props) => {
    const handleEdit = ()=>{

    }
    const handleDelete = ()=>{
        
    }
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          
            <tr key={props.UserId}>
              <td>{props.userEmail}</td>
              <td>{props.admin}</td>
              <td>{props.displayName}</td>
              <td>
                <button onClick={() => handleEdit(props.id)}>Edit</button>
                <button onClick={() => handleDelete(props.id)}>Delete</button>
              </td>
            </tr>
          
        </tbody>
      </table>
    </div>
  )
}

export default AdminCard
