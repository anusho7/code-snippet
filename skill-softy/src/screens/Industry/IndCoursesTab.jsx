import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_COURSES, MOCK_EVENTS } from '../../utils/mockData';
import { EventCard } from '../../components/cards/EventCard';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { GraduationCap, Award, Plus, Sparkles, BookOpen, Layers } from 'lucide-react';

export const IndCoursesTab = () => {
  const { showToast } = useUser();

  const handleSponsorCourse = () => {
    showToast('Sponsorship inquiry initialized! Our Academic Team will connect with you.', 'success');
  };

  return (
    <div className="tab-view animate-fade-in">
      {/* Banner */}
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
            <GraduationCap size={13} />
            <span>Corporate Learning Alliance</span>
          </div>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800 }}>Sponsored Courses & Hackathons</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>
            Design custom curriculum tracks tailored to your tech stack and train students directly for your hiring pipelines.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={handleSponsorCourse}
          icon={<Plus size={16} />}
        >
          Sponsor New Track
        </PrimaryButton>
      </div>

      {/* Live Sponsored Tracks */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sparkles size={18} color="#588B71" />
        <span>Active Industry-Sponsored Curriculum Tracks</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {MOCK_COURSES.map((course) => (
          <div key={course.id} style={{
            background: 'var(--bg-surface)',
            border: '1.5px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '1.4rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.85rem'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span className="badge badge-amber">⭐ {course.rating} / 5.0</span>
              <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
                {course.enrolledCount} Students Enrolled
              </span>
            </div>

            <h4 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              {course.title}
            </h4>

            <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
              Instructor: <strong>{course.instructor}</strong>
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
              {course.tags.map((t, idx) => (
                <span key={idx} style={{
                  fontSize: '0.72rem',
                  background: 'var(--color-primary-light)',
                  color: 'var(--color-primary)',
                  padding: '0.15rem 0.5rem',
                  borderRadius: '4px',
                  fontWeight: 600
                }}>
                  {t}
                </span>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '0.75rem',
              borderTop: '1px solid var(--color-border)',
              marginTop: 'auto'
            }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: '#10B981' }}>
                Active Cohort
              </span>

              <PrimaryButton
                variant="secondary"
                size="sm"
                onClick={() => showToast(`Opening performance analytics for ${course.title}`, 'info')}
              >
                Cohort Analytics
              </PrimaryButton>
            </div>
          </div>
        ))}
      </div>

      {/* Hackathons & Workshops */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Layers size={18} color="#588B71" />
        <span>Live Hackathons & Masterclasses</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {MOCK_EVENTS.filter(e => e.category !== 'Faculty FDP').map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default IndCoursesTab;
