import React from 'react';
import { useUser } from '../../store/UserState';
import { PrimaryButton } from '../common/PrimaryButton';
import {
  Building,
  MapPin,
  Clock,
  CheckCircle,
  Zap,
  Users,
  Send
} from 'lucide-react';
import './JobRoleCard.css';

/**
 * JobRoleCard - For Job & Internship listings in Student and Industry tabs
 * @param {Object} props
 * @param {Object} props.job
 * @param {boolean} [props.isRecruiterView=false]
 */
export const JobRoleCard = ({ job, isRecruiterView = false }) => {
  const { appliedJobs, toggleApplyJob, showToast } = useUser();
  const isApplied = appliedJobs.includes(job.id);

  const handleRecruiterAction = () => {
    showToast(`Managing applicants for ${job.title} (${job.applicantsCount} candidates)`, 'info');
  };

  return (
    <div className="job-role-card">
      <div className="job-role-card__top">
        <div className="job-role-card__company-group">
          <div className="job-role-card__title-wrap">
            <h3 className="job-role-card__title">{job.title}</h3>
            <span className="job-role-card__company-name">{job.company}</span>
          </div>
        </div>

        {job.urgent && (
          <span className="job-role-card__badge-urgent">
            🔥 Urgently Hiring
          </span>
        )}
      </div>

      {/* Details Row */}
      <div className="job-role-card__details">
        <div className="job-role-card__detail-item">
          <MapPin size={14} />
          <span>{job.location}</span>
        </div>
        <div className="job-role-card__detail-item">
          <span className="job-role-card__stipend">{job.stipend}</span>
        </div>
        <div className="job-role-card__detail-item">
          <Users size={14} />
          <span>{job.applicantsCount} Applicants</span>
        </div>
      </div>

      <p className="job-role-card__description">{job.description}</p>

      {/* Tech Tags */}
      <div className="job-role-card__tags">
        {job.tags.map((tag, i) => (
          <span key={i} className="job-role-card__tag">
            {tag}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div className="job-role-card__footer">
        <div className="job-role-card__deadline">
          <Clock size={13} />
          <span>{job.deadline}</span>
        </div>

        <div className="job-role-card__actions">
          {isRecruiterView ? (
            <PrimaryButton
              variant="secondary"
              size="sm"
              onClick={handleRecruiterAction}
            >
              Manage Post ({job.applicantsCount})
            </PrimaryButton>
          ) : (
            <PrimaryButton
              variant={isApplied ? 'outline' : 'primary'}
              size="sm"
              onClick={() => toggleApplyJob(job.id)}
              icon={isApplied ? <CheckCircle size={15} /> : <Zap size={15} />}
            >
              {isApplied ? 'Applied' : '1-Click Apply'}
            </PrimaryButton>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobRoleCard;
