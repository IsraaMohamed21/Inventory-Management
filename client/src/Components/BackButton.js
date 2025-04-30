import React from 'react';
import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  function handleClick() {
    navigate.goBack();
  }

  return (
    <button onClick={handleClick}>
      Go back
    </button>
  );
}
export default BackButton;
