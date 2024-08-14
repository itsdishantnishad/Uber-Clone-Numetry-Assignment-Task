import React from 'react';
import './PaymentIssues.css';

const PaymentIssues = () => {
  return (
    
   <>
   <h2>Payment Issues</h2>
    <div className='payment-issues'>
      <div>
      <img src="https://images.indianexpress.com/2023/12/google-pay-payment-issues.jpg" alt="security-img"></img>
      </div>
     <div>
     <ul>
        <li>How do I update my payment method?</li>
        <li>Why was my payment declined?</li>
        <li>How do I get a receipt for my ride?</li>
      </ul>
     </div>
    </div>
   </>
  );
};

export default PaymentIssues;
