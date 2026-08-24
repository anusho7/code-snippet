import React from 'react';
import { useUser } from '../../store/UserState';
import { Sparkles, Bell, ArrowLeftRight, Compass, Map, UserCheck } from 'lucide-react';
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
      {/* Brand Identity */}
      <div className="top-header__brand" onClick={() => setScreen('entry')}>
        <img
          src="/src/assets/logo.svg"
          alt="Skill Softy Logo"
          className="top-header__logo"
        />
        <div className="top-header__title-group">
          <h1 className="top-header__title">
            Skill <span className="top-header__title-accent">Softy</span>
          </h1>
          <span className="top-header__tagline">Degree to Real-World Mastery</span>
        </div>
      </div>

      {/* Navigation Pills (Desktop) */}
      <nav className="top-header__nav-pills">
        <button
          className={`top-header__nav-pill ${screen === 'entry' ? 'active' : ''}`}
          onClick={() => setScreen('entry')}
        >
          Roles
        </button>
        <button
          className={`top-header__nav-pill ${screen === 'onboarding' ? 'active' : ''}`}
          onClick={() => setScreen('onboarding')}
        >
          Setup
        </button>
        <button
          className={`top-header__nav-pill ${screen === 'comparison' ? 'active' : ''}`}
          onClick={() => setScreen('comparison')}
        >
          Curriculum vs Skills
        </button>
        <button
          className={`top-header__nav-pill ${screen === 'roadmap' || screen === 'match' ? 'active' : ''}`}
          onClick={() => setScreen('roadmap')}
        >
          Roadmap
        </button>
        <button
          className={`top-header__nav-pill ${screen === 'dashboard' ? 'active' : ''}`}
          onClick={() => setScreen('dashboard')}
        >
          Dashboard
        </button>
      </nav>

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
    </header>
  );
};

export default TopHeader;
