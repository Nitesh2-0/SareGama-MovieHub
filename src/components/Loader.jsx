import React from 'react';

const Loader = () => {
  return (
    <div className='w-screen h-screen bg-black flex items-center justify-center'>
      <img src={`/webLoader.gif`} alt="Loading..." />
    </div>
  );
}

export default Loader;
