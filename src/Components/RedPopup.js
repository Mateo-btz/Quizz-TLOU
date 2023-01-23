import React from 'react';
import '../Popup.css';
import { CloseCircleOutlined } from '@ant-design/icons';

function RedPopup() {
  return (
    <div class="popup red-popup">
      <CloseCircleOutlined />
      <h3 class="popup-text">Mauvaise réponse</h3>
    </div>
  );
}

export default RedPopup;