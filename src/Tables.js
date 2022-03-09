import React from 'react'

function Tables({data}) {
  return (
    <>
    <table>
        <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Gender</th>
        </thead>
        <tbody>
            {data.map((item)=>(
            <tr key={item.id}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td>{item.gender}</td>
            </tr>
            ))}
            
        </tbody>
    </table>
    </>
  )
}

export default Tables