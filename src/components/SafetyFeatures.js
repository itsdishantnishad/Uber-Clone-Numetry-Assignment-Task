import React from 'react';
import './SafetyFeatures.css';

const SafetyFeatures = () => {
  return (
    <>
    <h2 className='h2'>Safety Features</h2>
    <p className='p'>We have implemented numerous safety features to ensure a safe ride for both riders and drivers.</p>
    <div className='safety-features'>
      <div>
      <img src="https://roadsafetyfacts.eu/uploads/2019/03/Main_Questions-03-1.svg" alt="security-img"></img>
      </div>
      <div>
      <ul>
        <li>In-app emergency button</li>
        <li>Ride tracking</li>
        <li>Driver and vehicle information</li>
      </ul>
      </div>
    </div>
    </>
  );
};

export default SafetyFeatures;
