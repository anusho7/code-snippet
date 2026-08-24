import React from 'react';
import { useUser } from '../../store/UserState';
import { PrimaryButton } from '../common/PrimaryButton';
import {
  Calendar,
  Clock,
  User,
  Users,
  CheckCircle2,
  Sparkles,
  Award
} from 'lucide-react';
import './EventCard.css';

/**
 * EventCard - For Courses, Workshops, and Guest Lectures across all roles
 * @param {Object} props
 * @param {Object} props.event
 */
export const EventCard = ({ event }) => {
  const { registeredEvents, toggleRegisterEvent, showToast } = useUser();
  const isRegistered = registeredEvents.includes(event.id);

  const getCategoryClass = (category) => {
    const lower = category.toLowerCase();
    if (lower.includes('workshop')) return 'event-card__category--workshop';
    if (lower.includes('hackathon')) return 'event-card__category--hackathon';
    if (lower.includes('faculty') || lower.includes('fdp')) return 'event-card__category--faculty-fdp';
    return 'event-card__category--guest-lecture';
  };

  return (
    <div className="event-card">
      <div className="event-card__top">
        <span className={`event-card__category ${getCategoryClass(event.category)}`}>
          {event.category}
        </span>
        {event.badge && (
          <span className="event-card__badge-perk">
            ✨ {event.badge}
          </span>
        )}
      </div>

      <h3 className="event-card__title">{event.title}</h3>

      {/* Meta Grid */}
      <div className="event-card__meta-grid">
        <div className="event-card__meta-item">
          <Calendar size={14} color="#588B71" />
          <span>{event.date}</span>
        </div>
        <div className="event-card__meta-item">
          <Clock size={14} color="#588B71" />
          <span>{event.duration}</span>
        </div>
        <div className="event-card__meta-item">
          <Users size={14} color="#588B71" />
          <span>{event.attendeesCount} Registered</span>
        </div>
      </div>

      {/* Speaker / Provider info */}
      <div className="event-card__speaker">
        <User size={14} color="#8C8275" />
        <span>Speaker: <strong>{event.speaker}</strong></span>
      </div>

      <p className="event-card__description">{event.description}</p>

      {/* Footer */}
      <div className="event-card__footer">
        <div className="event-card__price">{event.price}</div>

        <PrimaryButton
          variant={isRegistered ? 'outline' : 'primary'}
          size="sm"
          onClick={() => toggleRegisterEvent(event.id)}
          icon={isRegistered ? <CheckCircle2 size={15} /> : <Sparkles size={15} />}
        >
          {isRegistered ? 'Registered (RSVP)' : 'Register Free'}
        </PrimaryButton>
      </div>
    </div>
  );
};

export default EventCard;
