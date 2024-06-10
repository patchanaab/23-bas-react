import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return(
    <div className='flex-col bg-gray-500'>
    <h1 className='text-center text-6xl font-bold'>HOME</h1>
    <h2 className='text-center text-4xl font-semibold'>React-Assessment</h2>
    <div className='flex justify-center gap-8'>
      <Link to="/user">
        <button className='p-8 font-bold rounded-md bg-white'>User Home Sector</button>
      </Link>
      <Link to="/admin">
        <button className='p-8 font-bold rounded-md bg-white'>Admin Home Sector</button>
      </Link>
    </div>
  </div>
  )

};

export default Home;