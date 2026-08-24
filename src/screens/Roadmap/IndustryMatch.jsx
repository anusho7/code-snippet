import React from 'react';
import { useUser } from '../../store/UserState';
import { INDUSTRY_MATCH_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  Compass,
  Building,
  TrendingUp,
  Briefcase,
  ArrowRight,
  Zap,
  CheckCircle2
} from 'lucide-react';
import './IndustryMatch.css';

export const IndustryMatch = () => {
  const { setScreen, setActiveTab, showToast } = useUser();
  const { summary, roles } = INDUSTRY_MATCH_DATA;

  const handleApplyNow = (roleTitle) => {
    showToast(`Filtering live openings for ${roleTitle}`, 'info');
    setActiveTab('get-hired');
    setScreen('dashboard');
  };

  return (
    <div className="industry-match animate-fade-in">
      {/* Header */}
      <div className="industry-match__header">
        <div className="industry-match__badge">
          <Compass size={14} />
          <span>Real-time Career Opportunity Matching</span>
        </div>

        <h1 className="industry-match__title">
          Relevant Industries & Job Roles
        </h1>

        <p className="industry-match__subtitle">
          Based on your verified skills, roadmap progression, and degree comparison benchmarks.
        </p>
      </div>

      {/* Summary Stat Grid */}
      <div className="industry-match__summary-grid">
        <div className="match-stat-card">
          <div className="match-stat-card__val">{summary.overallMatch}%</div>
          <div className="match-stat-card__label">Average Compatibility</div>
        </div>

        <div className="match-stat-card">
          <div className="match-stat-card__val">{summary.matchedRolesCount}</div>
          <div className="match-stat-card__label">Qualified Job Tracks</div>
        </div>

        <div className="match-stat-card">
          <div className="match-stat-card__val">{summary.averageStartingSalary}</div>
          <div className="match-stat-card__label">Median Package Range</div>
        </div>

        <div className="match-stat-card">
          <div className="match-stat-card__val">390+</div>
          <div className="match-stat-card__label">Live Hiring Openings</div>
        </div>
      </div>

      {/* Matched Roles List */}
      <div className="industry-match__roles-list">
        {roles.map((roleItem) => (
          <div key={roleItem.id} className="match-role-card">
            <div className="match-role-card__top">
              <div className="match-role-card__title-row">
                <h2 className="match-role-card__title">{roleItem.title}</h2>
                <div className="match-role-card__salary">
                  Compensation Band: {roleItem.salaryRange}
                </div>
              </div>

              <div className="match-role-card__score-badge">
                <span>{roleItem.matchScore}% Match</span>
              </div>
            </div>

            <p className="match-role-card__desc">{roleItem.description}</p>

            {/* Companies hiring */}
            <div className="match-role-card__companies">
              <Building size={14} />
              <span>Top Companies:</span>
              {roleItem.companiesHiring.map((comp, idx) => (
                <span key={idx} className="match-role-card__company-pill">
                  {comp}
                </span>
              ))}
            </div>

            {/* Skills tag */}
            <div className="match-role-card__skills">
              {roleItem.keySkills.map((sk, i) => (
                <span key={i} className="match-role-card__skill-tag">
                  {sk}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div className="match-role-card__footer">
              <span className="match-role-card__positions">
                ● {roleItem.openPositions} Active Vacancies
              </span>

              <PrimaryButton
                variant="primary"
                size="sm"
                onClick={() => handleApplyNow(roleItem.title)}
                icon={<ArrowRight size={15} />}
              >
                View Live Vacancies
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryMatch;
