import React from 'react';
import { NavigationTab } from '../../types';
import './Header.css';

interface HeaderProps {
  tabs: NavigationTab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
}

const Header: React.FC<HeaderProps> = ({ tabs, activeTab, onTabClick }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <span className="search-text">Dầu gội MQG</span>
        </div>
        <div className="header-actions">
          <button className="action-btn">📤</button>
          <button className="action-btn">🛒</button>
          <button className="action-btn">⋯</button>
        </div>
      </div>
      
      <nav className="navigation-tabs">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => onTabClick(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Header;
