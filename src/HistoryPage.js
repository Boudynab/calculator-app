import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const HistoryPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const calchistory = location.state?.calchistory || [];

  return (
    <div>
      <h2>Calculation History</h2>
      <ul>
        {calchistory.map((calc, index) => (
          <li key={index}>{calc}</li>
        ))}
      </ul>
      <button onClick={() => navigate('/')}>Back to Calculator</button>
    </div>
  );
};

export default HistoryPage;
