import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

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

      <main className="dashboard-main">
        <div className="dashboard-content">
          <div className="welcome-section">
            <h2>Dashboard</h2>
            <p>Bankacılık işlemlerinizi buradan yönetebilirsiniz.</p>
          </div>

          <div className="dashboard-grid">
            <div className="dashboard-card">
              <div className="card-icon">💳</div>
              <h3>Hesaplarım</h3>
              <p>Tüm hesaplarınızı görüntüleyin ve yönetin</p>
              <button className="card-btn">Görüntüle</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">📊</div>
              <h3>İşlem Geçmişi</h3>
              <p>Geçmiş işlemlerinizi inceleyin</p>
              <button className="card-btn">Görüntüle</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">💸</div>
              <h3>Para Transferi</h3>
              <p>Güvenli para transferi yapın</p>
              <button className="card-btn">Transfer Yap</button>
            </div>

            <div className="dashboard-card">
              <div className="card-icon">⚙️</div>
              <h3>Ayarlar</h3>
              <p>Hesap ayarlarınızı düzenleyin</p>
              <button className="card-btn">Ayarlar</button>
            </div>
          </div>

          <div className="recent-transactions">
            <h3>Son İşlemler</h3>
            <div className="transaction-list">
              <div className="transaction-item">
                <div className="transaction-info">
                  <span className="transaction-desc">Market Alışverişi</span>
                  <span className="transaction-date">20 Temmuz 2025</span>
                </div>
                <span className="transaction-amount negative">-150.00 ₺</span>
              </div>
              <div className="transaction-item">
                <div className="transaction-info">
                  <span className="transaction-desc">Maaş Ödemesi</span>
                  <span className="transaction-date">18 Temmuz 2025</span>
                </div>
                <span className="transaction-amount positive">+5,000.00 ₺</span>
              </div>
              <div className="transaction-item">
                <div className="transaction-info">
                  <span className="transaction-desc">Elektrik Faturası</span>
                  <span className="transaction-date">15 Temmuz 2025</span>
                </div>
                <span className="transaction-amount negative">-287.50 ₺</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
