import React from 'react'
import { Link } from 'react-router-dom';

const UserComponent = ({users}) => {
  return (
    <div className='flex-col bg-gray-500 '>
      <h1 className='text-center text-6xl font-bold'>HOME</h1>
      <h2 className='text-center text-4xl font-semibold'>User-Sector</h2>
      <div className='flex justify-center gap-8 pb-6'>
        <Link to="/user">
          <button className='p-8 font-bold rounded-md bg-white'>User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className='p-8 font-bold rounded-md bg-white'>Admin Home Sector</button>
        </Link>
      </div>
      <table className='mx-auto bg-white w-[80%]'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map(users => (
            <tr key={users.id}>
              <td>{users.name}</td>
              <td>{users.position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default UserComponent;