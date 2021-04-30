import React, { useState, ReactElement } from 'react';

interface AreYouSureButtonProps {
  onClick?: () => {};
  children: any;
  disabled: boolean;
}

export default function AreYouSureButton({onClick, children, disabled}: AreYouSureButtonProps) {
  const [ready, setReady] = useState(false);
  return <div className="AreYouSureButton">
  { ready ?
    <>
      <p>Are you sure?</p>
      <button disabled={disabled} onClick={onClick}>{children}</button>
      <button disabled={disabled} onClick={() => setReady(false)}>Cancel</button>
    </> :
    <button disabled={disabled} onClick={() => setReady(true)}>{children}</button>
  }
  </div>
}
