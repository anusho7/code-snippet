import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_COURSES } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import {
  BookOpen,
  PlayCircle,
  Award,
  CheckCircle2,
  Clock,
  Map,
  Sparkles,
  ArrowRight
} from 'lucide-react';

export const StuStudyTab = () => {
  const { enrolledCourses, toggleEnrollCourse, setScreen, showToast } = useUser();

  const handleResumeLearning = (courseTitle) => {
    showToast(`Launching interactive interactive lab for ${courseTitle}!`, 'success');
  };

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
        <div style={{ maxWidth: '600px' }}>
          <div className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            <BookOpen size={13} />
            <span>Interactive Learning Lab</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>My Enrolled Courses & Labs</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            Complete interactive modules, build verified repository projects, and unlock direct interview referrals.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={() => setScreen('roadmap')}
          icon={<Map size={16} />}
        >
          View Full Roadmap
        </PrimaryButton>
      </div>

      {/* Enrolled Tracks Grid */}
      <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Sparkles size={18} color="#588B71" />
        <span>Active Learning Tracks</span>
      </h3>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem',
        marginBottom: '2rem'
      }}>
        {MOCK_COURSES.map((course) => {
          const isEnrolled = enrolledCourses.includes(course.id);

          return (
            <div key={course.id} style={{
              background: 'var(--bg-surface)',
              border: isEnrolled ? '2px solid var(--color-primary-border)' : '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-amber">{course.badge}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', fontWeight: 700 }}>
                  <Clock size={12} style={{ display: 'inline', marginRight: '3px' }} />
                  {course.totalHours}
                </span>
              </div>

              <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-main)', lineHeight: 1.35 }}>
                {course.title}
              </h4>

              <p style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>
                Provider: <strong>{course.provider}</strong>
              </p>

              {/* Progress bar if enrolled */}
              {isEnrolled && (
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.78rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                    <span>Module Progress</span>
                    <span style={{ color: 'var(--color-primary)' }}>{course.progress}% Completed</span>
                  </div>
                  <div style={{
                    width: '100%',
                    height: '8px',
                    background: 'var(--bg-main)',
                    borderRadius: 'var(--radius-full)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      width: `${course.progress}%`,
                      height: '100%',
                      background: 'linear-gradient(90deg, #6B9E82, #4A7861)',
                      borderRadius: 'var(--radius-full)'
                    }}></div>
                  </div>
                </div>
              )}

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {course.tags.map((t, i) => (
                  <span key={i} style={{
                    fontSize: '0.72rem',
                    background: 'var(--bg-main)',
                    color: 'var(--color-text-main)',
                    padding: '0.15rem 0.5rem',
                    borderRadius: '4px',
                    fontWeight: 600,
                    border: '1px solid var(--color-border)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'auto'
              }}>
                {isEnrolled ? (
                  <PrimaryButton
                    variant="primary"
                    size="sm"
                    fullWidth
                    onClick={() => handleResumeLearning(course.title)}
                    icon={<PlayCircle size={16} />}
                  >
                    Resume Lab ({course.progress}%)
                  </PrimaryButton>
                ) : (
                  <PrimaryButton
                    variant="outline"
                    size="sm"
                    fullWidth
                    onClick={() => toggleEnrollCourse(course.id)}
                    icon={<ArrowRight size={16} />}
                  >
                    Enroll Track Free
                  </PrimaryButton>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StuStudyTab;
