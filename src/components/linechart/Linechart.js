import React, { useState, useEffect } from 'react';
import "./LineChart.css";
const LineChart = () => {
  const [data, setData] = useState(["fev 22", "dec 23", "fev 22","fev 22", "fev 22", "fev 22","fev 22", "dec 23", "fev 22","fev 22", "fev 22", "fev 22"]);
  const dates = [
    "fev 19",
    "dec 22",
    "jui 20", 
    "avr 23",
    "sep 23",
    "oct 22",
    "nov 19",
    "mar 18",
    "jan 23",
    "mai 21",
    "jui 20",
    "aou 19",
    "aou 21",
    "jui 20",
    "aou 19",
    "aou 21"
  ]

  useEffect(() => {
    setData(dates)
  })
  
  return (
    <div className="chart-container">
      {data.map((value, index) => ( 
        <div key={index} className="container">
            <div  className="bar" ></div>
            <div className='tag'>
              <p className='tagElt'>{value}</p>
            </div> 
        </div>
      ))}
    </div>
  );
};

export default LineChart