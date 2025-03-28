import React from 'react';

function PhoneWrapper({ children }) {
  return (
    <div className="phone-frame">
      <div className="phone-screen">
        {children}
      </div>
    </div>
  );
}

export default PhoneWrapper;
