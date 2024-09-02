import React from 'react';
import './scrollbtn.css';

const ScrollBtn = () => {
  return (
    <>
    <div className="scrolldown text-xs " style={{ "--color": "#007bff" }}>
      <div className="chevrons">
        <div className="chevrondown"></div>
        <div className="chevrondown"></div>
      </div>
    </div>
    </>
  );
}

export default ScrollBtn;
