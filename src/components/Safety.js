import React from 'react';
import "./Safety.css";
import DriverBackgroundChecks from './DriverBackgroundChecks';
import SafetyFeatures from './SafetyFeatures';
import CovidPrecautions from './CovidPrecautions';
import RiderSafetyTips from './RiderSafetyTips';

const Safety = () => {
  return (
    
    <div className='safety-container'>
      <h1>Safety at UberClone</h1>
      <div className='safety-section'>
        <DriverBackgroundChecks />
      </div>
      <div className='safety-section'>
        <SafetyFeatures />
      </div>
      <div className='safety-section'>
        <CovidPrecautions />
      </div>
      <div className='safety-section'>
        <RiderSafetyTips />
      </div>
    </div>
  );
};

export default Safety;



