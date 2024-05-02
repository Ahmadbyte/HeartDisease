import React from 'react';
import { Link } from 'react-router-dom';
import './start.css'

export default function Login ()  {
  
  return (

      <div className='app' >
        <div className='logo'></div>
        <span className='txt'>Heart Disease Detector
        <br />
        <h6 className='txt2'>Test your Heart Health..</h6>
        <Link to="/heart" style={{ textDecoration: "none" }}>
        <button className='btn' >
        <>Start the Test</>
        </button>
        </Link>
        </span>
        
      </div>

  );
};

