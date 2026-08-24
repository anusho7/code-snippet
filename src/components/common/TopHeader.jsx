import React from 'react';
import { useUser } from '../../store/UserState';
import { Bell, User } from 'lucide-react';
import skillSyncLogo from '../../assets/skill-sync-logo.png';
import './TopHeader.css';

export const TopHeader = () => {
  const { role, setScreen, showToast } = useUser();

  const handleNotificationClick = () => {
    showToast('You have 3 new matched recommendations for your roadmap!', 'info');
  };

  const handleProfileClick = () => {
    setScreen('entry');
    showToast(`Profile (${role ? role.toUpperCase() : 'STUDENT'}): Click to switch role.`, 'info');
  };

  return (
    <header className="top-header">
      <div className="top-header__inner">
        {/* Brand Identity */}
        <div className="top-header__brand" onClick={() => setScreen('entry')}>
          <img
            src={skillSyncLogo}
            alt="Skill Sync Logo"
            className="top-header__logo"
          />
          <div className="top-header__title-group">
            <h1 className="top-header__title">
              <span className="top-header__title-main">Skill</span> <span className="top-header__title-accent">Sync</span>
            </h1>
            <span className="top-header__tagline">Degree to Real-World Mastery</span>
          </div>
        </div>

        {/* Actions */}
        <div className="top-header__actions">
          {/* Profile Icon Button */}
          <button
            className="top-header__icon-btn top-header__profile-btn"
            onClick={handleProfileClick}
            aria-label="User Profile"
            title="Profile & Switch Role"
          >
            <User size={18} />
          </button>

          {/* Notifications Icon */}
          <button
            className="top-header__icon-btn"
            onClick={handleNotificationClick}
            aria-label="View notifications"
            title="Notifications"
          >
            <Bell size={18} />
            <span className="top-header__badge-dot"></span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
