import React, { useState } from 'react';
import './heart.css'; // Import CSS file

const HeartDiseaseDetector = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [sex, setSex] = useState('');
  const [result, setResult] = useState(null);

  const handleDetect = () => {
    // Placeholder detection logic
    const fakeResult = Math.random() > 0.5 ? 'Heart disease detected' : 'No heart disease detected';
    setResult(fakeResult);
    alert("Test Result Out")
  };

  return (
    <div className="main">
    <div className="container">
      <h1>Heart Disease Detector</h1>
      <label>
        Name:
        <input className='name'
          type="String"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Sex:
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>
      <label>
        BloodType:
        <select value={sex} onChange={(e) => setSex(e.target.value)}>
        <option value="">Select</option>
          <option value="O +ve">O+ve</option>
          <option value="O -ve">O-ve</option>
          <option value="A +ve">A+ve</option>
          <option value="A -ve">A-ve</option>
          <option value="AB +ve">AB+ve</option>
          <option value="AB -ve">AB-ve</option>
          <option value="B +ve">B+ve</option>
          <option value="B -ve">B-ve</option>
        </select>
      </label>
      <button onClick={handleDetect}>Detect</button>
      {result !== null && (
        <div className="result">
          <h2>Result:</h2>
          <h3>Patient {name},{result}</h3>
        </div>
      )}
    </div>
    </div>
  );
};

export default HeartDiseaseDetector;
