import React, { useState, useEffect } from 'react';
import './Settings.css';

const Settings: React.FC = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="settings-container">
      <h2>Ayarlar</h2>
      <div className="theme-toggle">
        <label>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
          />
          Koyu Mod
        </label>
      </div>
    </div>
  );
};

export default Settings;
