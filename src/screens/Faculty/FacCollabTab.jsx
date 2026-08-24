import React from 'react';
import { useUser } from '../../store/UserState';
import { MOCK_COLLAB_REQUESTS } from '../../utils/mockData';
import { PrimaryButton } from '../../components/common/PrimaryButton';
import { Network, Building2, User, Calendar, Check, Send } from 'lucide-react';

export const FacCollabTab = () => {
  const { invitedCollabs, inviteCollab, showToast } = useUser();

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
          <div className="badge badge-orange" style={{ marginBottom: '0.4rem' }}>
            <Network size={13} />
            <span>Industry-Academia Nexus</span>
          </div>
          <h2 style={{ fontSize: '1.75rem', fontWeight: 800 }}>Industry Mentorships & Guest Lectures</h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', marginTop: '0.25rem' }}>
            Invite senior staff engineers, architects, and hiring managers from top tech firms to deliver masterclasses for your students.
          </p>
        </div>

        <PrimaryButton
          variant="primary"
          size="md"
          onClick={() => showToast('Custom guest lecture request drafted. Matching with speakers...', 'info')}
          icon={<Send size={16} />}
        >
          Request Custom Speaker
        </PrimaryButton>
      </div>

      {/* Collab Cards Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '1rem'
      }}>
        {MOCK_COLLAB_REQUESTS.map((item) => {
          const isInvited = invitedCollabs.includes(item.id);

          return (
            <div key={item.id} style={{
              background: 'var(--bg-surface)',
              border: isInvited ? '2px solid var(--color-primary)' : '1.5px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
              padding: '1.5rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-sm)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span className="badge badge-amber">{item.company}</span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-subtle)', fontWeight: 600 }}>
                  {item.format}
                </span>
              </div>

              <h3 style={{ fontSize: '1.15rem', fontWeight: 800, color: 'var(--color-text-main)', lineHeight: 1.35 }}>
                {item.topic}
              </h3>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem',
                fontSize: '0.84rem',
                color: 'var(--color-text-muted)'
              }}>
                <User size={14} color="#588B71" />
                <span>Speaker: <strong>{item.speaker}</strong></span>
              </div>

              <p style={{ fontSize: '0.84rem', color: 'var(--color-text-muted)', lineHeight: 1.45 }}>
                {item.description}
              </p>

              <div style={{
                background: 'var(--bg-main)',
                padding: '0.65rem 0.85rem',
                borderRadius: 'var(--radius-md)',
                fontSize: '0.78rem',
                color: 'var(--color-text-main)',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '0.4rem'
              }}>
                <Calendar size={13} color="#8C4300" />
                <span>Available Dates: {item.datesAvailable}</span>
              </div>

              {/* Action */}
              <div style={{
                paddingTop: '0.85rem',
                borderTop: '1px solid var(--color-border)',
                marginTop: 'auto'
              }}>
                <PrimaryButton
                  variant={isInvited ? 'outline' : 'primary'}
                  size="sm"
                  fullWidth
                  onClick={() => inviteCollab(item.id, item.company)}
                  icon={isInvited ? <Check size={16} /> : <Send size={16} />}
                >
                  {isInvited ? 'Invitation Sent (Awaiting Confirmation)' : 'Invite to College / Department'}
                </PrimaryButton>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FacCollabTab;
