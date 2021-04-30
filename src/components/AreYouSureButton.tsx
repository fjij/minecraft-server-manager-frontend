import React, { useState, ReactElement } from 'react';

interface AreYouSureButtonProps {
  onClick?: () => {};
  children: any;
}

export default function AreYouSureButton({onClick, children}: AreYouSureButtonProps) {
  const [ready, setReady] = useState(false);
  return <div className="AreYouSureButton">
  { ready ?
    <>
      <p>Are you sure?</p>
      <button onClick={onClick}>{children}</button>
      <button onClick={() => setReady(false)}>Cancel</button>
    </> :
    <button onClick={() => setReady(true)}>{children}</button>
  }
  </div>
}
