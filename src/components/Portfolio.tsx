import React from 'react';
import './Portfolio.css';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';

interface ChartData {
  name: string;
  value: number;
  color: string;
}

const Portfolio: React.FC = () => {
  const data: ChartData[] = [
    { name: 'Hisse Senetleri', value: 75000, color: '#0088FE' },
    { name: 'Kripto', value: 35000, color: '#00C49F' },
    { name: 'Altın', value: 25000, color: '#FFBB28' },
    { name: 'Döviz', value: 22850.75, color: '#FF8042' }
  ];

  return (
    <div className="portfolio-container">
      <h2>Portfolyo Özeti</h2>
      <div className="portfolio-summary">
        <div className="portfolio-item">
          <h3>Toplam Varlık</h3>
          <p>157.850,75 ₺</p>
        </div>
        <div className="portfolio-item">
          <h3>Toplam Yatırım</h3>
          <p>145.000 ₺</p>
        </div>
        <div className="portfolio-item">
          <h3>Toplam Kazanç</h3>
          <p className="profit">12.850,75 ₺</p>
        </div>
      </div>

      <div className="portfolio-chart">
        <h3>Varlık Dağılımı</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
              label={({ name, percent }) => 
                `${name} ${(percent ? (percent * 100).toFixed(0) : 0)}%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip formatter={(value) => `${(value as number).toLocaleString('tr-TR')} ₺`} />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Portfolio;