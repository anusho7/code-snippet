import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_JOBS } from '../../utils/mockData';
import { JobRoleCard } from '../../components/cards/JobRoleCard';
import { Briefcase, CheckCircle2 } from 'lucide-react';

export const StuGetHiredTab = () => {
  const { appliedJobs } = useUser();

  return (
    <div className="tab-view animate-fade-in">
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1.25rem',
        marginBottom: '2rem',
        background: 'var(--bg-surface)',
        padding: '1.75rem',
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid var(--color-border)'
      }}>
        <div>
          <div className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            <Briefcase size={13} />
            <span>Fast-Track Placement Engine</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Jobs & Internship Opportunities</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            1-Click applications powered by your verified roadmap score and live code projects.
          </p>
        </div>

        <div style={{
          background: 'var(--bg-main)',
          padding: '0.75rem 1.25rem',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem'
        }}>
          <CheckCircle2 size={20} color="#10B981" />
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Applications Submitted</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              {appliedJobs.length} Positions
            </div>
          </div>
        </div>
      </div>

      {/* Jobs Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {MOCK_JOBS.map((job) => (
          <JobRoleCard key={job.id} job={job} isRecruiterView={false} />
        ))}
      </div>
    </div>
  );
};

export default StuGetHiredTab;
