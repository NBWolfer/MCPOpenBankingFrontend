import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import StockMarket from '../components/StockMarket';
import Portfolio from '../components/Portfolio';
import ChatBot from '../components/ChatBot';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Burada gerçek çıkış işlemi yapılacak
    console.log('Çıkış yapılıyor...');
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="header-content">
          <h1>MCP Open Banking</h1>
          <div className="user-menu">
            <span>Hoş geldiniz!</span>
            <button onClick={handleLogout} className="logout-btn">
              Çıkış Yap
            </button>
          </div>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="left-panel">
          <Portfolio />
        </section>
        
        <section className="right-panel">
          <StockMarket />
        </section>
      </main>
      <ChatBot />
    </div>
  );
};

export default Dashboard;
