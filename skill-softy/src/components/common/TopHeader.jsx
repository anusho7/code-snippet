import React from 'react';
import { useUser } from '../../store/UserState';
import { Sparkles, Bell, ArrowLeftRight, Compass, Map, UserCheck } from 'lucide-react';
import skillSyncLogo from '../../assets/skill-sync-logo.png';
import './TopHeader.css';

export const TopHeader = () => {
  const { role, screen, setScreen, showToast } = useUser();

  const handleNotificationClick = () => {
    showToast('You have 3 new matched recommendations for your roadmap!', 'info');
  };

  const getRoleLabel = () => {
    if (role === 'student') return 'Student View';
    if (role === 'industry') return 'Industry View';
    if (role === 'faculty') return 'Faculty View';
    return 'Select Role';
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
          {/* Role Switcher Pill */}
          <button
            className="top-header__role-badge"
            onClick={() => setScreen('entry')}
            title="Switch Role"
          >
            <ArrowLeftRight size={14} />
            <span>{getRoleLabel()}</span>
          </button>

          {/* Notifications Icon */}
          <button
            className="top-header__icon-btn"
            onClick={handleNotificationClick}
            aria-label="View notifications"
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
