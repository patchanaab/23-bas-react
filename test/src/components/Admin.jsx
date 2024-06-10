import React from 'react'
import { Link } from 'react-router-dom';

const AdminComponent = ({users,addUser,deleteUser}) => {
  return (
    <div className='flex-col bg-gray-500'>
      <h1 className='text-center text-6xl font-bold'>HOME</h1>
      <h2 className='text-center text-4xl font-semibold'>ADMIN-Sector</h2>
      <div className='flex justify-center gap-8'>
        <Link to="/user">
          <button className='p-8 font-bold rounded-md bg-white'>User Home Sector</button>
        </Link>
        <Link to="/admin">
          <button className='p-8 font-bold rounded-md bg-white'>Admin Home Sector</button>
        </Link>
      </div>
        <h2 className='font-semibold text-center text-3xl pt-4'>Add new User</h2>
        <div className=' mx-auto w-[80%] p-4 flex justify-center '>
          <form onSubmit={(e) => {
            e.preventDefault();
            const newUser = {
              id: users.length + 1,
              name: e.target.name.value,
              position: e.target.position.value,
            };
            addUser(newUser);
          }}>
            <input type="text" name="name" placeholder="Name" className='border-2 mx-6' />
            <input type="text" name="position" placeholder="position" className='border-2 mx-6' />
            <button type="submit" className='rounded-md bg-green-500 px-6 mx-6'>ADD</button>
          </form>
      </div>
      <table className='mx-auto bg-white w-[80%]'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody className='text-center'>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.position}</td>
              <td>
                <button 
                  onClick={() => deleteUser(user.id)}
                  className='rounded-md bg-red-700 px-6'
                  >Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    
    </div>
  )
}

export default AdminComponent;