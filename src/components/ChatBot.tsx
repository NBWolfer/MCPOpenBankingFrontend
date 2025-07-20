import React, { useState } from 'react';
import './ChatBot.css';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Merhaba! Ben MCP Yatırım Asistanı. Size nasıl yardımcı olabilirim?",
      isBot: true,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [input, setInput] = useState('');

  const generateResponse = (userMessage: string): string => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    if (lowercaseMessage.includes('yatırım') || lowercaseMessage.includes('öneri')) {
      return 'Son dönemde teknoloji ve finans sektörü hisseleri yükseliş gösteriyor. THYAO ve GARAN özellikle dikkat çekici bir performans sergiliyor. Ayrıca altın ve döviz yatırımı da değerlendirilebilir.';
    }
    
    if (lowercaseMessage.includes('altın') || lowercaseMessage.includes('döviz')) {
      return 'Altın ve döviz güvenli liman olarak görülüyor. Son 3 ayda altın %10, dolar ise %5 değer kazandı.';
    }
    
    if (lowercaseMessage.includes('borsa') || lowercaseMessage.includes('hisse')) {
      return 'BIST-100 son bir ayda %8 yükseldi. Özellikle bankacılık ve havayolu şirketleri pozitif ayrışıyor.';
    }
    
    if (lowercaseMessage.includes('risk')) {
      return 'Yatırımlarınızı çeşitlendirmenizi öneririm. Portföyünüzü hisse senedi, altın, döviz ve mevduat arasında dengeli dağıtabilirsiniz.';
    }

    return 'Başka bir konuda yardımcı olabilir miyim? Yatırım önerileri, piyasa analizi veya risk yönetimi hakkında sorularınızı yanıtlayabilirim.';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Kullanıcı mesajını ekle
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isBot: false,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    };

    // Bot yanıtını hazırla
    const botResponse: Message = {
      id: messages.length + 2,
      text: generateResponse(input),
      isBot: true,
      timestamp: new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, userMessage, botResponse]);
    setInput('');
  };

  return (
    <div className={`chatbot-container ${isOpen ? 'open' : ''}`}>
      <button 
        className="chatbot-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? '✕' : '💬'}
      </button>

      {isOpen && (
        <div className="chatbot-window">
          <div className="chatbot-header">
            <h4>MCP Yatırım Asistanı</h4>
          </div>
          
          <div className="messages-container">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`message ${message.isBot ? 'bot' : 'user'}`}
              >
                <div className="message-content">
                  {message.text}
                  <span className="message-timestamp">{message.timestamp}</span>
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="chatbot-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Mesajınızı yazın..."
            />
            <button type="submit">
              Gönder
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
