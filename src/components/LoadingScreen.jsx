import React, { useState, useEffect } from 'react';
import '../styles/LoadingScreen.css';

export default function LoadingScreen() {


  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="loading-circle">
          <span className="loading-text">Jason Mun</span>
          <div className="spinner"></div>
        </div>
      </div>
    </div>
  );
}

