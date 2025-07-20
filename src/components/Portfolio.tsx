import React from 'react';
import './Portfolio.css';

interface PortfolioData {
  totalBalance: number;
  totalInvestment: number;
  totalProfit: number;
  accounts: {
    name: string;
    balance: number;
    accountType: string;
  }[];
}

const Portfolio: React.FC = () => {
  // Örnek veri (gerçek uygulamada API'den gelecek)
  const portfolioData: PortfolioData = {
    totalBalance: 157850.75,
    totalInvestment: 145000.00,
    totalProfit: 12850.75,
    accounts: [
      { name: 'Ana Hesap', balance: 45678.90, accountType: 'Vadesiz' },
      { name: 'Yatırım Hesabı', balance: 89321.85, accountType: 'Vadeli' },
      { name: 'Birikim Hesabı', balance: 22850.00, accountType: 'Vadeli' }
    ]
  };

  return (
    <div className="portfolio-container">
      <div className="portfolio-header">
        <h3>Portfolyo Özeti</h3>
      </div>
      
      <div className="portfolio-summary">
        <div className="summary-card">
          <h4>Toplam Varlık</h4>
          <div className="amount">{portfolioData.totalBalance.toLocaleString('tr-TR')} ₺</div>
        </div>
        <div className="summary-card">
          <h4>Toplam Yatırım</h4>
          <div className="amount">{portfolioData.totalInvestment.toLocaleString('tr-TR')} ₺</div>
        </div>
        <div className="summary-card">
          <h4>Toplam Kazanç</h4>
          <div className="amount positive">{portfolioData.totalProfit.toLocaleString('tr-TR')} ₺</div>
        </div>
      </div>

      <div className="portfolio-accounts">
        <h4>Hesap Dağılımı</h4>
        <div className="accounts-grid">
          {portfolioData.accounts.map((account, index) => (
            <div key={index} className="account-card">
              <div className="account-info">
                <h5>{account.name}</h5>
                <span className="account-type">{account.accountType}</span>
              </div>
              <div className="account-balance">
                {account.balance.toLocaleString('tr-TR')} ₺
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
