import React from 'react';
import './RiderSafetyTips.css';

const RiderSafetyTips = () => {
  return (
   <>
   <h2>Rider Safety Tips</h2>
   <p>Follow these tips to ensure a safe and comfortable ride:</p>
    <div className='rider-safety-tips'>
      <div>
      <img src="https://i.pinimg.com/originals/22/df/d6/22dfd638a8bf48a073c8a51853e29464.jpg" alt="security-img"></img>
      </div>
     <div>
     <ul>
        <li>Verify the driver's identity and vehicle details</li>
        <li>Share your trip details with a trusted contact</li>
        <li>Always wear your seatbelt</li>
        <li>Use the in-app emergency button if needed</li>
      </ul>
     </div>
    </div>
   </>
  );
};

export default RiderSafetyTips;
