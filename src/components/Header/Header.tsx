import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShare, faCartShopping, faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { NavigationTab } from '../../types';
import './Header.css';

interface HeaderProps {
  tabs: NavigationTab[];
  activeTab: string;
  onTabClick: (tabId: string) => void;
  onOrderModalOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ tabs, activeTab, onTabClick, onOrderModalOpen }) => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="search-bar">
          <FontAwesomeIcon className="search-icon" icon={faSearch} />
          <span className="search-text">Dầu gội Long Thành Phát</span>
        </div>
        <div className="header-actions">
          <button className="action-btn" onClick={onOrderModalOpen}><FontAwesomeIcon icon={faShare} /></button>
          <button className="action-btn" onClick={onOrderModalOpen}><FontAwesomeIcon icon={faCartShopping} /></button>
          <button className="action-btn" onClick={onOrderModalOpen}><FontAwesomeIcon icon={faEllipsis} /></button>
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
