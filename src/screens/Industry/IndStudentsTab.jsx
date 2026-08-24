import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_STUDENTS } from '../../utils/mockData';
import { PortfolioCard } from '../../components/cards/PortfolioCard';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { Search, Filter, Users, Sparkles, PlusCircle } from 'lucide-react';

export const IndStudentsTab = () => {
  const { shortlistedStudents, setActiveTab, showToast } = useUser();
  const [search, setSearch] = useState('');
  const [selectedTag, setSelectedTag] = useState('All');

  const tags = ['All', 'React', 'TypeScript', 'Node.js', 'Python', 'FastAPI', 'Golang', 'PostgreSQL'];

  const filteredStudents = MOCK_STUDENTS.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.college.toLowerCase().includes(search.toLowerCase()) ||
      student.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));

    const matchesTag = selectedTag === 'All' || student.skills.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

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
            <Sparkles size={13} />
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
            placeholder="Search by candidate name, college, or skill..."
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

        {/* Tag Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setSelectedTag(t)}
              style={{
                padding: '0.35rem 0.8rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.8rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                border: selectedTag === t ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                background: selectedTag === t ? 'var(--color-primary)' : 'var(--bg-surface)',
                color: selectedTag === t ? '#FFFFFF' : 'var(--color-text-main)'
              }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Student Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {filteredStudents.map((student) => (
          <PortfolioCard key={student.id} student={student} />
        ))}
      </div>
    </div>
  );
};

export default IndStudentsTab;
