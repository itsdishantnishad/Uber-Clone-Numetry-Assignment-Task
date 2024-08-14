import React from 'react';
import './CovidPrecautions.css';

const CovidPrecautions = () => {
  return (
   <>
     <h2>COVID-19 Precautions</h2>
     <p>We prioritize the health and safety of our riders and drivers during the COVID-19 pandemic.</p>
    <div className='covid-precautions'>
      <div>
      <img src="https://media.istockphoto.com/id/1227562517/vector/vector-icon-set-for-covid-19.jpg?s=1024x1024&w=is&k=20&c=Vn_11E_Idj5RADIDkHwHljQgJHf6-dA8esbrFGSCkzg=" alt="covid-19-img"></img>
      </div>
      <div>
      <ul>
        <li>Mandatory face masks</li>
        <li>Regular sanitization of vehicles</li>
        <li>Contactless payments</li>
      </ul>
      </div>
    </div>
   </>
  );
};

export default CovidPrecautions;
