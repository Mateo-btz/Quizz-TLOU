import React from 'react';
import '../Popup.css';
import { CheckCircleOutlined } from '@ant-design/icons';

function GreenPopup() {
  return (
    <div class="popup green-popup">
      <CheckCircleOutlined />
      <h3 class="popup-text">Bonne réponse</h3>
    </div>
  );
}

export default GreenPopup;