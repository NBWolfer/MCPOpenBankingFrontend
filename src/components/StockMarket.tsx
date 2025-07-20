import React, { useEffect, useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './StockMarket.css';

interface StockData {
  symbol: string;
  price: number;
  change: number;
}

interface ChartData {
  name: string;
  THYAO: number;
  GARAN: number;
  EREGL: number;
  AKBNK: number;
  YKBNK: number;
}

const StockMarket: React.FC = () => {
  const [stockData, setStockData] = useState<StockData[]>([]);
  const [chartData, setChartData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStockData = () => {
      setLoading(true);
      // Simüle edilmiş borsa verileri
      const mockData: StockData[] = [
        { symbol: 'THYAO', price: 245.50, change: 1.2 },
        { symbol: 'GARAN', price: 178.30, change: -0.5 },
        { symbol: 'EREGL', price: 156.75, change: 0.8 },
        { symbol: 'AKBNK', price: 132.90, change: 2.1 },
        { symbol: 'YKBNK', price: 98.45, change: -1.3 }
      ];
      // Tablo için stock verisi
      setStockData(mockData);

      // Grafik için chart verisi
      const newChartData: ChartData[] = [{
        name: 'Hisse Fiyatları',
        THYAO: mockData[0].price,
        GARAN: mockData[1].price,
        EREGL: mockData[2].price,
        AKBNK: mockData[3].price,
        YKBNK: mockData[4].price
      }];
      setChartData(newChartData);
      setLoading(false);
    };

    fetchStockData();
    const interval = setInterval(fetchStockData, 30000); // Her 30 saniyede bir güncelle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="stock-market-container">
      <div className="stock-header">
        <h4>Borsa İstanbul - Canlı Veriler</h4>
        {loading && <div className="loading-message">Yükleniyor...</div>}
      </div>
      <div className="stock-content">
        <div className="stock-table">
        <table>
          <thead>
            <tr>
              <th>Hisse</th>
              <th>Fiyat (₺)</th>
              <th>Değişim (%)</th>
            </tr>
          </thead>
          <tbody>
            {stockData.map((stock) => (
              <tr key={stock.symbol}>
                <td>{stock.symbol}</td>
                <td>{stock.price.toFixed(2)}</td>
                <td className={stock.change >= 0 ? 'positive' : 'negative'}>
                  {stock.change > 0 ? '+' : ''}{stock.change}%
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="stock-chart">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" 
              label={{ value: 'Fiyat (₺)', position: 'bottom' }}
            />
            <YAxis 
              dataKey="name" 
              type="category"
              width={100}
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(2)} ₺`]}
            />
            <Legend verticalAlign="top" height={36} />
            <Bar
              dataKey="THYAO"
              name="Türk Hava Yolları"
              fill="#FF6B6B"
              barSize={20}
            />
            <Bar
              dataKey="GARAN"
              name="Garanti Bankası"
              fill="#4ECDC4"
              barSize={20}
            />
            <Bar
              dataKey="EREGL"
              name="Ereğli Demir Çelik"
              fill="#45B7D1"
              barSize={20}
            />
            <Bar
              dataKey="AKBNK"
              name="Akbank"
              fill="#96CEB4"
              barSize={20}
            />
            <Bar
              dataKey="YKBNK"
              name="Yapı Kredi"
              fill="#D4A5A5"
              barSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      </div>
    </div>
  );
};

export default StockMarket;
