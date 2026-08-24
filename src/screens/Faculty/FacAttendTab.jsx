import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_EVENTS } from '../../utils/mockData';
import { EventCard } from '../../components/cards/EventCard';
import { CalendarCheck, BookOpen } from 'lucide-react';

export const FacAttendTab = () => {
  const { registeredEvents } = useUser();

  // Filter events relevant to faculty
  const facultyEvents = MOCK_EVENTS.filter(
    e => e.category === 'Faculty FDP' || e.category === 'Guest Lecture' || e.category === 'Industry Workshop'
  );

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
            <CalendarCheck size={13} />
            <span>Academic Conferences & Summits</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Faculty Summits & Workshops</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            Participate in higher education roundtables, curriculum reform panels, and technical research symposiums.
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
          <CalendarCheck size={20} color="#588B71" />
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Registered Sessions</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              {registeredEvents.length} Events
            </div>
          </div>
        </div>
      </div>

      {/* Events Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {facultyEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default FacAttendTab;
