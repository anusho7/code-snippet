import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_JOBS } from '../../utils/mockData';
import { JobRoleCard } from '../../components/cards/JobRoleCard';
import { Briefcase, Search, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export const StuGetHiredTab = () => {
  const { appliedJobs } = useUser();
  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('All');

  const types = ['All', 'Internship with PPO', 'Full-Time Fresher', 'Remote'];

  const filteredJobs = MOCK_JOBS.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));

    const matchesType = filterType === 'All' ||
      (filterType === 'Remote' ? job.location.includes('Remote') : job.type.includes(filterType));

    return matchesSearch && matchesType;
  });

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

      {/* Filter and Search Bar */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.5rem'
      }}>
        {/* Search */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          background: 'var(--bg-surface)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-full)',
          padding: '0.5rem 1rem',
          flex: '1',
          maxWidth: '400px'
        }}>
          <Search size={18} color="var(--color-text-subtle)" />
          <input
            type="text"
            placeholder="Search by role, company, or tech stack..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              border: 'none',
              outline: 'none',
              width: '100%',
              background: 'transparent',
              fontSize: '0.9rem'
            }}
          />
        </div>

        {/* Filter Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              style={{
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                border: filterType === t ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                background: filterType === t ? 'var(--color-primary)' : 'var(--bg-surface)',
                color: filterType === t ? '#FFFFFF' : 'var(--color-text-main)'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Jobs Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
        gap: '1.5rem'
      }}>
        {filteredJobs.map((job) => (
          <JobRoleCard key={job.id} job={job} isRecruiterView={false} />
        ))}
      </div>
    </div>
  );
};

export default StuGetHiredTab;
