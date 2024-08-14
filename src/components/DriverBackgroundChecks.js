import React from 'react';
import './DriverBackgroundChecks.css';

const DriverBackgroundChecks = () => {
  return (
    <>
    <h2 className='h2'>Driver Background Checks</h2>
    <p className='p'>All drivers undergo thorough background checks before they are allowed to drive on our platform.</p>
     <div className='driver-background-checks'>
      <div>
      <img src="https://png.pngtree.com/thumb_back/fh260/background/20220313/pngtree-the-driver-was-driving-on-the-road-image_1056132.jpg" alt="background-check-img"></img>
      </div>
      <div>
      <ul>
        <li>Criminal background checks</li>
        <li>Driving record checks</li>
        <li>Identity verification</li>
      </ul>
      </div>
    </div>
    </>
  );
};

export default DriverBackgroundChecks;
