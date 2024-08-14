import React from 'react';
import "./Help.css";
import AccountIssues from './AccountIssues';
import RideIssues from './RideIssues';
import PaymentIssues from './PaymentIssues';
import GeneralInquiries from './GeneralInquiries';

const Help = () => {
  return (
    <div className='help-page'>
      <h1>Help Center</h1>
      <div className='Account-section'>
        <AccountIssues/>
      </div>
      <div className='help-section'>
        <RideIssues/>
      </div>
      <div className='help-section'>
        <PaymentIssues />
      </div>
      <div className='help-section'>
        <GeneralInquiries />
      </div>
    </div>
  );
};

export default Help;
