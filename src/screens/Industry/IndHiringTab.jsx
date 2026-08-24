import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_JOBS } from '../../utils/mockData';
import { JobRoleCard } from '../../components/cards/JobRoleCard';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { Briefcase, Plus, TrendingUp, Users, CheckCircle, Clock } from 'lucide-react';

export const IndHiringTab = () => {
  const { showToast } = useUser();
  const [jobs, setJobs] = useState(MOCK_JOBS);
  const [showPostModal, setShowPostModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newType, setNewType] = useState('Full-Time');
  const [newStipend, setNewStipend] = useState('₹18 - ₹24 LPA');
  const [newSkills, setNewSkills] = useState('React, TypeScript, Node.js');

  const handleCreatePost = (e) => {
    e.preventDefault();
    if (!newTitle) {
      showToast('Please specify a job title.', 'info');
      return;
    }

    const createdJob = {
      id: `j-${Date.now()}`,
      title: newTitle,
      company: 'Your Company (Active)',
      companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=80&auto=format&fit=crop&q=80',
      location: 'Bengaluru / Hybrid',
      type: newType,
      stipend: newStipend,
      ctc: newStipend,
      tags: newSkills.split(',').map(s => s.trim()),
      applicantsCount: 0,
      deadline: 'Closing in 14 days',
      urgent: true,
      description: 'Newly published role looking for motivated engineers with completed roadmap milestones and verified skills.',
      perks: ['Flexible Hours', 'Health Insurance', 'Mentorship']
    };

    setJobs([createdJob, ...jobs]);
    setShowPostModal(false);
    setNewTitle('');
    showToast('🎉 Job posting published live! Candidates can now apply.', 'success');
  };

  return (
    <div className="tab-view animate-fade-in">
      {/* Top Banner */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '1rem',
        marginBottom: '1.75rem',
        background: 'var(--bg-surface)',
        padding: '1.5rem',
        borderRadius: 'var(--radius-xl)',
        border: '1.5px solid var(--color-border)'
      }}>
        <div>
          <div className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            <Briefcase size={13} />
            <span>Recruitment Command Center</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Manage Job & Internship Openings</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Publish vacancies, track verified roadmap applicants, and schedule fast-track technical interviews.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={() => setShowPostModal(true)}
          icon={<Plus size={16} />}
        >
          Create New Vacancy
        </PrimaryButton>
      </div>

      {/* Recruitment Metrics Bar */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '0.75rem',
        marginBottom: '1.5rem'
      }}>
        <div style={{
          background: 'var(--bg-surface)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: 'var(--color-primary)' }}>
            {jobs.length}
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
            Active Openings
          </div>
        </div>

        <div style={{
          background: 'var(--bg-surface)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#10B981' }}>
            348
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
            Total Verified Applicants
          </div>
        </div>

        <div style={{
          background: 'var(--bg-surface)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.2rem',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#3B82F6' }}>
            28
          </div>
          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--color-text-muted)' }}>
            Interviews Scheduled
          </div>
        </div>
      </div>

      {/* Post Modal */}
      {showPostModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000,
          padding: '1rem'
        }}>
          <div style={{
            background: '#FFFFFF',
            borderRadius: 'var(--radius-xl)',
            padding: '2rem',
            maxWidth: '540px',
            width: '100%',
            boxShadow: 'var(--shadow-lg)'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
              Publish New Job / Internship
            </h3>
            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>
              Reach thousands of pre-screened students completing their verified skill roadmaps.
            </p>

            <form onSubmit={handleCreatePost} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                  Role Title
                </label>
                <input
                  type="text"
                  placeholder="e.g. Full Stack Cloud Engineer"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                    Type
                  </label>
                  <select
                    value={newType}
                    onChange={(e) => setNewType(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--color-border)',
                      outline: 'none',
                      fontSize: '0.9rem',
                      background: '#FFFFFF'
                    }}
                  >
                    <option value="Internship with PPO">Internship with PPO</option>
                    <option value="Full-Time Fresher">Full-Time Fresher</option>
                    <option value="Lateral Engineering">Lateral Engineering</option>
                  </select>
                </div>

                <div>
                  <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                    Salary / Stipend
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. ₹16 - ₹22 LPA"
                    value={newStipend}
                    onChange={(e) => setNewStipend(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.65rem 0.9rem',
                      borderRadius: 'var(--radius-md)',
                      border: '1.5px solid var(--color-border)',
                      outline: 'none',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontSize: '0.8rem', fontWeight: 700, display: 'block', marginBottom: '0.35rem' }}>
                  Required Skills (Comma separated)
                </label>
                <input
                  type="text"
                  placeholder="React 19, TypeScript, PostgreSQL, Docker"
                  value={newSkills}
                  onChange={(e) => setNewSkills(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '0.65rem 0.9rem',
                    borderRadius: 'var(--radius-md)',
                    border: '1.5px solid var(--color-border)',
                    outline: 'none',
                    fontSize: '0.9rem'
                  }}
                />
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1rem' }}>
                <PrimaryButton
                  variant="ghost"
                  size="md"
                  type="button"
                  onClick={() => setShowPostModal(false)}
                >
                  Cancel
                </PrimaryButton>

                <PrimaryButton
                  variant="primary"
                  size="md"
                  type="submit"
                >
                  Publish Role Now
                </PrimaryButton>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Jobs Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {jobs.map((job) => (
          <JobRoleCard key={job.id} job={job} isRecruiterView={true} />
        ))}
      </div>
    </div>
  );
};

export default IndHiringTab;
