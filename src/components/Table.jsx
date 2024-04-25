import React from 'react'

function Table({email,password}) {
  return (
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{email}</td>
                <td>{password}</td>
                <td>
                    <button>delete</button>
                </td>
            </tr>
        </tbody>
    </table>
  )
}

export default Table