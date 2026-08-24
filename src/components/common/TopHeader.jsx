import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { Bell, User, Map, Compass, ArrowLeftRight, CheckCircle2, Award } from 'lucide-react';
import skillSyncLogo from '../../assets/skill-sync-logo.png';
import './TopHeader.css';

export const TopHeader = () => {
  const { role, currentUser, screen, setScreen, showToast } = useUser();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const handleNotificationClick = () => {
    showToast('You have 3 new matched recommendations for your roadmap!', 'info');
  };

  const toggleProfileMenu = () => {
    setShowProfileMenu(prev => !prev);
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
        <div className="top-header__actions" style={{ position: 'relative' }}>
          {/* Profile & Demo Account Button */}
          <button
            className={`top-header__icon-btn top-header__profile-btn ${showProfileMenu ? 'active' : ''}`}
            onClick={toggleProfileMenu}
            aria-label="User Profile"
            title={`Logged in as ${currentUser?.name || 'Nihar'}`}
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

          {/* Demo Student Profile Dropdown */}
          {showProfileMenu && (
            <div className="top-header__profile-dropdown animate-fade-in">
              <div className="profile-dropdown__user-info">
                <div className="profile-dropdown__avatar">
                  <User size={22} color="#FFFFFF" />
                </div>
                <div>
                  <div className="profile-dropdown__name">{currentUser?.fullName || 'Nihar Achari'}</div>
                  <div className="profile-dropdown__role-badge">Demo Account • Student</div>
                  <div className="profile-dropdown__college">{currentUser?.college || 'RV College of Engineering'}</div>
                </div>
              </div>

              <div className="profile-dropdown__divider"></div>

              <div className="profile-dropdown__stats">
                <div className="profile-stat">
                  <span className="profile-stat__label">Verified Score</span>
                  <span className="profile-stat__val" style={{ color: '#10B981' }}>{currentUser?.verifiedScore || 88}%</span>
                </div>
                <div className="profile-stat">
                  <span className="profile-stat__label">CGPA</span>
                  <span className="profile-stat__val">{currentUser?.cgpa || '9.2'}</span>
                </div>
              </div>

              <div className="profile-dropdown__divider"></div>

              <div className="profile-dropdown__menu">
                <button
                  className="profile-dropdown__menu-item"
                  onClick={() => {
                    setScreen('roadmap');
                    setShowProfileMenu(false);
                    showToast('Opening Skill Roadmap for Nihar!', 'info');
                  }}
                >
                  <Map size={16} color="var(--color-primary)" />
                  <span>View Skill Roadmap</span>
                </button>

                <button
                  className="profile-dropdown__menu-item"
                  onClick={() => {
                    setScreen('comparison');
                    setShowProfileMenu(false);
                    showToast('Viewing Degree vs Industry Skill Analysis', 'info');
                  }}
                >
                  <Compass size={16} color="#3B82F6" />
                  <span>Curriculum Gap Analysis</span>
                </button>

                <button
                  className="profile-dropdown__menu-item"
                  onClick={() => {
                    setScreen('entry');
                    setShowProfileMenu(false);
                    showToast('Switching role / demo workspace', 'info');
                  }}
                >
                  <ArrowLeftRight size={16} color="#8C8275" />
                  <span>Switch Workspace Role</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
