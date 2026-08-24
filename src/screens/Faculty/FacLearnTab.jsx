import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_FACULTY_PROGRAMS } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { BookOpenCheck, Award, Clock, Download, CheckCircle2 } from 'lucide-react';

export const FacLearnTab = () => {
  const { showToast } = useUser();

  const handleEnrollFDP = (title) => {
    showToast(`Registered for ${title}! Access details sent to your academic email.`, 'success');
  };

  const handleDownloadKit = (title) => {
    showToast(`Downloading course syllabus & lab starter repos for ${title}`, 'info');
  };

  return (
    <div className="tab-view animate-fade-in">
      {/* Banner */}
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
          <div className="badge badge-amber" style={{ marginBottom: '0.4rem' }}>
            <span>Academic Upskilling & FDP Portal</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Faculty Development Programs (FDPs)</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            Hands-on certification tracks on AI, Cloud Native, and Automated Lab grading designed for engineering educators.
          </p>
        </div>

        <PrimaryButton
          variant="secondary"
          size="md"
          onClick={() => showToast('Connecting to IEEE & AICTE National Registry...', 'info')}
          icon={<Award size={16} />}
        >
          Accreditation Guide
        </PrimaryButton>
      </div>

      {/* FDP Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {MOCK_FACULTY_PROGRAMS.map((fdp) => (
          <div key={fdp.id} style={{
            background: 'var(--bg-surface)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: '1.6rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="badge badge-orange">{fdp.accreditation}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--color-text-subtle)', fontWeight: 700 }}>
                <Clock size={13} style={{ display: 'inline', marginRight: '3px' }} />
                {fdp.duration}
              </span>
            </div>

            <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)', lineHeight: 1.35 }}>
              {fdp.title}
            </h3>

            <p style={{ fontSize: '0.85rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
              {fdp.description}
            </p>

            {/* Perks */}
            <div style={{
              background: 'var(--bg-main)',
              padding: '0.85rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
              fontSize: '0.8rem'
            }}>
              {fdp.perks.map((p, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#8C4300', fontWeight: 600 }}>
                  <CheckCircle2 size={14} color="#588B71" />
                  <span>{p}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              paddingTop: '0.85rem',
              borderTop: '1px solid var(--color-border)',
              marginTop: 'auto'
            }}>
              <PrimaryButton
                variant="ghost"
                size="sm"
                onClick={() => handleDownloadKit(fdp.title)}
                icon={<Download size={15} />}
              >
                Lab Kit
              </PrimaryButton>

              <PrimaryButton
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => handleEnrollFDP(fdp.title)}
                icon={<BookOpenCheck size={16} />}
              >
                Register for FDP
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FacLearnTab;
