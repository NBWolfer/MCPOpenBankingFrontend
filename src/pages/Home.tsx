import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <div className="home-content">
        <div className="hero-section">
          <h1>MCP Open Banking</h1>
          <p>Güvenli ve modern bankacılık çözümünüze hoş geldiniz</p>
          
          <div className="cta-buttons">
            <Link to="/login" className="btn btn-primary">
              Giriş Yap
            </Link>
            <Link to="/register" className="btn btn-secondary">
              Kayıt Ol
            </Link>
          </div>
        </div>
        
        <div className="features-section">
          <h2>Özellikler</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🔒</div>
              <h3>Güvenli</h3>
              <p>En son güvenlik teknolojileri ile korunan hesaplarınız</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Hızlı</h3>
              <p>Anlık işlemler ve gerçek zamanlı güncellemeler</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Mobil Uyumlu</h3>
              <p>Tüm cihazlarınızda sorunsuz çalışan arayüz</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
