import React, { useState } from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_EVENTS } from '../../utils/mockData';
import { EventCard } from '../../components/cards/EventCard';
import { Calendar, Search, Sparkles, Trophy } from 'lucide-react';

export const StuAttendTab = () => {
  const { registeredEvents } = useUser();
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Workshop', 'Hackathon', 'Guest Lecture'];

  const filteredEvents = MOCK_EVENTS.filter(event => {
    if (filterCategory === 'All') return true;
    return event.category.toLowerCase().includes(filterCategory.toLowerCase());
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
            <Calendar size={13} />
            <span>Live Tech Events & Hackathons</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Events, Workshops & Masterclasses</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            Learn live from senior staff architects, compete for cash prizes, and network with hiring engineering leads.
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
          <Trophy size={20} color="#588B71" />
          <div>
            <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>RSVP Confirmed</div>
            <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--color-text-main)' }}>
              {registeredEvents.length} Events
            </div>
          </div>
        </div>
      </div>

      {/* Filter Category Pills */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilterCategory(cat)}
            style={{
              padding: '0.4rem 0.95rem',
              borderRadius: 'var(--radius-full)',
              fontSize: '0.85rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.15s ease',
              border: filterCategory === cat ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
              background: filterCategory === cat ? 'var(--color-primary)' : 'var(--bg-surface)',
              color: filterCategory === cat ? '#FFFFFF' : 'var(--color-text-main)'
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default StuAttendTab;
