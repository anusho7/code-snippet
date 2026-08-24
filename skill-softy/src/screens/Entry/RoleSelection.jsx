import React from 'react';
import { useUser } from '../../store/UserState';
import { ROLES_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  GraduationCap,
  Building2,
  BookOpenCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Users2,
  Briefcase,
  Layers
} from 'lucide-react';
import './RoleSelection.css';

export const RoleSelection = () => {
  const { role, selectRole, setScreen, showToast } = useUser();

  const iconMap = {
    GraduationCap: GraduationCap,
    Building2: Building2,
    BookOpenCheck: BookOpenCheck
  };

  const handleRoleCardClick = (roleKey) => {
    selectRole(roleKey);
    showToast(`Welcome! Setting up your ${ROLES_DATA[roleKey].title} experience.`, 'success');
  };

  return (
    <div className="role-selection animate-fade-in">
      {/* Hero Badge */}
      <div className="role-selection__hero-badge">
        <Sparkles size={16} color="#FF6B00" />
        <span>Select Your Workspace to Begin</span>
      </div>

      {/* Main Title */}
      <h1 className="role-selection__title">
        Bridge Your Degree with <br />
        <span className="role-selection__title-highlight">Real-World Industry Mastery</span>
      </h1>

      <p className="role-selection__subtitle">
        Skill Softy connects students, industry leaders, and university faculty into a
        unified ecosystem of custom roadmaps, verified skill gap analysis, and fast-track hiring.
      </p>

      {/* 3 Interactive Role Cards */}
      <div className="role-selection__cards-grid">
        {Object.entries(ROLES_DATA).map(([key, data]) => {
          const IconComponent = iconMap[data.icon] || GraduationCap;
          const isActive = role === key;

          return (
            <div
              key={key}
              className={`role-card ${isActive ? 'role-card--active' : ''}`}
              onClick={() => handleRoleCardClick(key)}
            >
              <div className="role-card__badge">{data.badge}</div>

              <div className="role-card__icon-wrap">
                <IconComponent size={36} />
              </div>

              <h2 className="role-card__title">{data.title}</h2>
              <div className="role-card__tagline">{data.tagline}</div>
              <p className="role-card__desc">{data.description}</p>

              <div className="role-card__stats">{data.stats}</div>

              <PrimaryButton
                variant={isActive ? 'primary' : 'outline'}
                fullWidth
                size="md"
                onClick={(e) => {
                  e.stopPropagation();
                  handleRoleCardClick(key);
                }}
                icon={<ArrowRight size={16} />}
              >
                Enter as {data.title}
              </PrimaryButton>
            </div>
          );
        })}
      </div>

      {/* Stats Proof Bar */}
      <div className="role-selection__stats-bar">
        <div className="role-selection__stat-item">
          <CheckCircle2 size={18} color="#10B981" />
          <span><strong>100% Verified</strong> Skill Roadmaps</span>
        </div>
        <div className="role-selection__stat-item">
          <Briefcase size={18} color="#FF6B00" />
          <span><strong>450+</strong> Tech Companies Hiring</span>
        </div>
        <div className="role-selection__stat-item">
          <Layers size={18} color="#3B82F6" />
          <span><strong>AI-Powered</strong> Curriculum Gap Engine</span>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
