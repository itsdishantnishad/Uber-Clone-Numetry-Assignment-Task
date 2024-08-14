import React from 'react';
import './AccountIssues.css';

const AccountIssues = () => {
  return (
    <>
    <h2>AccountIssues</h2>
    <div className='account-issues'>
      <div className='img-container'>
        <img src="https://img.freepik.com/free-photo/computer-security-with-login-password-padlock_107791-16191.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1720569600&semt=ais_hybrid" alt="security-img"></img>
      </div>
      <div className='text-container'>
        <ul>
          <li>How do I reset my password?</li>
          <li>How do I update my profile information?</li>
          <li>How do I delete my account?</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default AccountIssues;
