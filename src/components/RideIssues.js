import React from 'react';
import './RideIssues.css';

const RideIssues = () => {
  return (
    <>
      <h2>Ride Issues</h2>
      <div className='ride-issues'>
        <div>
          <img src="https://www.shutterstock.com/shutterstock/photos/326732741/display_1500/stock-photo-chiang-mai-thailand-sep-a-woman-hand-holding-uber-app-showing-on-samsung-note-in-the-326732741.jpg" alt="ride-issues" />
        </div>
        <div>
          <ul>
            <li>How do I report a problem with my ride?</li>
            <li>How do I get a refund for a ride?</li>
            <li>My driver took a longer route, what can I do?</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default RideIssues;
