import React, { useState } from 'react';
import '../styles/AreYouSureButton.css';

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
      <button disabled={disabled} onClick={() => setReady(false)}>Cancel</button>
      <button disabled={disabled} onClick={onClick}>{children}</button>
    </> :
    <button disabled={disabled} onClick={() => setReady(true)}>{children}</button>
  }
  </div>
}
