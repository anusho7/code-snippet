import React from 'react';
import { useUser } from '../../store/UserState';
import { SKILL_COMPARISON_DATA } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  Sparkles,
  BookOpen,
  Zap,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  TrendingUp,
  MapPin,
  Compass
} from 'lucide-react';
import './SkillComparison.css';

export const SkillComparison = () => {
  const { answers, setScreen, showToast } = useUser();
  const selectedDegreeKey = answers.degree || 'cs_it';
  const data = SKILL_COMPARISON_DATA[selectedDegreeKey] || SKILL_COMPARISON_DATA.cs_it;

  const handleGenerateRoadmap = () => {
    showToast('Node roadmap generated based on your skill gap analysis!', 'success');
    setScreen('roadmap');
  };

  const handleViewMatches = () => {
    setScreen('match');
  };

  return (
    <div className="skill-comparison animate-fade-in">
      {/* Header */}
      <div className="skill-comparison__header">
        <div className="skill-comparison__badge">
          <Sparkles size={14} />
          <span>Curriculum vs Industry Benchmarks</span>
        </div>

        <h1 className="skill-comparison__title">
          Comparing Your Degree And The Skills
        </h1>

        <p className="skill-comparison__subtitle">
          {data.summary}
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="skill-comparison__metrics-grid">
        <div className="metric-card">
          <div className="metric-card__value" style={{ color: '#F59E0B' }}>
            {data.degreeMatchScore}%
          </div>
          <div className="metric-card__label">Degree Curriculum Coverage</div>
          <div className="metric-card__subtext">Theory, Algorithms & Fundamentals</div>
        </div>

        <div className="metric-card metric-card--orange">
          <div className="metric-card__value">
            {data.industryReadinessScore}%
          </div>
          <div className="metric-card__label">Target Industry Readiness</div>
          <div className="metric-card__subtext">Achieved via Skill Softy Node Roadmap</div>
        </div>

        <div className="metric-card">
          <div className="metric-card__value" style={{ color: '#EF4444' }}>
            58%
          </div>
          <div className="metric-card__label">Curriculum Skill Gap</div>
          <div className="metric-card__subtext">Production Cloud, DevOps & AI Gaps</div>
        </div>
      </div>

      {/* 2-Column Matrix */}
      <div className="skill-comparison__matrix">
        {/* Covered by Degree */}
        <div className="matrix-column">
          <div className="matrix-column__header">
            <h2 className="matrix-column__title">
              <BookOpen size={18} color="#8C4300" />
              <span>University Syllabus Covers</span>
            </h2>
            <span className="matrix-column__tag matrix-column__tag--covered">
              Standard College Syllabi
            </span>
          </div>

          <div className="matrix-column__list">
            {data.coveredSkills.map((item, index) => (
              <div key={index} className="skill-row">
                <div className="skill-row__top">
                  <span className="skill-row__name">{item.name}</span>
                  <span className="skill-row__badge skill-row__badge--covered">
                    <CheckCircle2 size={12} style={{ display: 'inline', marginRight: '4px' }} />
                    {item.level}% Theory
                  </span>
                </div>
                <div className="skill-row__bar-bg">
                  <div
                    className="skill-row__bar-fill skill-row__bar-fill--covered"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="skill-row__note">{item.note}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Demand */}
        <div className="matrix-column matrix-column--target">
          <div className="matrix-column__header">
            <h2 className="matrix-column__title">
              <Zap size={18} color="#588B71" />
              <span>Industry Demands (2026)</span>
            </h2>
            <span className="matrix-column__tag matrix-column__tag--target">
              High Hiring Priority
            </span>
          </div>

          <div className="matrix-column__list">
            {data.missingSkills.map((item, index) => (
              <div key={index} className="skill-row">
                <div className="skill-row__top">
                  <span className="skill-row__name">{item.name}</span>
                  <span className="skill-row__badge skill-row__badge--gap">
                    {item.gap}
                  </span>
                </div>
                <div className="skill-row__bar-bg">
                  <div
                    className="skill-row__bar-fill skill-row__bar-fill--gap"
                    style={{ width: `${item.level}%` }}
                  ></div>
                </div>
                <span className="skill-row__note" style={{ color: '#588B71', fontWeight: '600' }}>
                  Demanded by {item.demand}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Banner */}
      <div className="skill-comparison__cta-box">
        <div>
          <h3 className="skill-comparison__cta-title">
            Ready to bridge your {data.degreeName} gaps?
          </h3>
          <p className="skill-comparison__cta-desc">
            We transformed these missing skills into an interactive, step-by-step node roadmap. Complete milestones and get direct recruiter interviews.
          </p>
        </div>

        <div className="skill-comparison__cta-actions">
          <PrimaryButton
            variant="white"
            size="lg"
            onClick={handleGenerateRoadmap}
            icon={<ArrowRight size={18} />}
          >
            Launch Node Roadmap
          </PrimaryButton>

          <PrimaryButton
            variant="ghost"
            style={{ color: '#FFFFFF', borderColor: 'rgba(255,255,255,0.4)' }}
            onClick={handleViewMatches}
            icon={<Compass size={18} />}
          >
            View Job Matches
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default SkillComparison;
