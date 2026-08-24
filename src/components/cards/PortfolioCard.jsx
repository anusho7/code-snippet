import React from 'react';
import { useUser } from '../../store/UserState';
import { PrimaryButton } from '../common/PrimaryButton';
import {
  GitBranch,
  Star,
  ExternalLink,
  Bookmark,
  BookmarkCheck,
  CheckCircle2,
  Code2
} from 'lucide-react';
import './PortfolioCard.css';

/**
 * PortfolioCard - Displays student profile for Industry hiring view
 * @param {Object} props
 * @param {Object} props.student
 */
export const PortfolioCard = ({ student }) => {
  const { shortlistedStudents, toggleShortlistStudent, showToast } = useUser();
  const isShortlisted = shortlistedStudents.includes(student.id);

  const handleDemoClick = (e) => {
    e.stopPropagation();
    showToast(`Opening live repository: ${student.topProject.name}`, 'info');
  };

  const handleInterviewInvite = () => {
    showToast(`Interview invite dispatched to ${student.name}!`, 'success');
  };

  return (
    <div className="portfolio-card">
      {/* Header Info */}
      <div className="portfolio-card__header">
        <div className="portfolio-card__avatar-wrap">
          <img
            src={student.avatar}
            alt={student.name}
            className="portfolio-card__avatar"
          />
          <span className="portfolio-card__online-dot" title="Active now"></span>
        </div>

        <div className="portfolio-card__info">
          <div className="portfolio-card__name-row">
            <h3 className="portfolio-card__name">{student.name}</h3>
            <span className="portfolio-card__match-badge">
              {student.matchScore}% Match
            </span>
          </div>

          <p className="portfolio-card__college">{student.college}</p>

          <div className="portfolio-card__meta-bar">
            <span>{student.degree}</span>
            <span className="portfolio-card__cgpa">CGPA: {student.cgpa}</span>
          </div>
        </div>
      </div>

      {/* Verified Skills */}
      <div className="portfolio-card__skills">
        {student.skills.map((skill, index) => (
          <span key={index} className="portfolio-card__skill-pill">
            {skill}
          </span>
        ))}
      </div>

      {/* Showcase Project */}
      {student.topProject && (
        <div className="portfolio-card__project-box">
          <div className="portfolio-card__project-title">
            <Code2 size={15} color="#588B71" />
            <span>{student.topProject.name}</span>
          </div>
          <p className="portfolio-card__project-desc">
            {student.topProject.description}
          </p>
          <div className="portfolio-card__project-tags">
            {student.topProject.techStack.map((tech, idx) => (
              <span key={idx} className="portfolio-card__project-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* GitHub & Roadmap Telemetry */}
      <div className="portfolio-card__github-stats">
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <GitBranch size={13} /> {student.githubStats.commits}
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Star size={13} color="#FFB800" fill="#FFB800" /> {student.githubStats.stars} Stars
        </span>
        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#10B981', fontWeight: '600' }}>
          <CheckCircle2 size={13} /> {student.verifiedRoadmap}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="portfolio-card__actions">
        <PrimaryButton
          variant="secondary"
          size="sm"
          onClick={() => toggleShortlistStudent(student.id)}
          icon={isShortlisted ? <BookmarkCheck size={16} /> : <Bookmark size={16} />}
        >
          {isShortlisted ? 'Shortlisted' : 'Shortlist'}
        </PrimaryButton>

        <PrimaryButton
          variant="primary"
          size="sm"
          fullWidth
          onClick={handleInterviewInvite}
          icon={<ExternalLink size={16} />}
        >
          Invite Interview
        </PrimaryButton>
      </div>
    </div>
  );
};

export default PortfolioCard;
