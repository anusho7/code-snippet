import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_STUDENTS } from '../../utils/mockData';
import { PortfolioCard } from '../../components/cards/PortfolioCard';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { PlusCircle } from 'lucide-react';

export const IndStudentsTab = () => {
  const { shortlistedStudents, setActiveTab, showToast } = useUser();

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
            <span>Pre-Vetted Talent Pool</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Student Talent & Portfolios</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Discover candidates with verified roadmap milestones, live GitHub projects, and curriculum gap certifications.
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            background: 'var(--bg-main)',
            padding: '0.5rem 1rem',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            fontSize: '0.85rem',
            fontWeight: 700
          }}>
            Shortlisted: <span style={{ color: 'var(--color-primary)' }}>{shortlistedStudents.length}</span>
          </div>

          <PrimaryButton
            variant="primary"
            size="md"
            onClick={() => {
              setActiveTab('hiring');
              showToast('Navigate to Hiring tab to publish new roles.', 'info');
            }}
            icon={<PlusCircle size={16} />}
          >
            Post New Role
          </PrimaryButton>
        </div>
      </div>

      {/* Student Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {MOCK_STUDENTS.map((student) => (
          <PortfolioCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default IndStudentsTab;
