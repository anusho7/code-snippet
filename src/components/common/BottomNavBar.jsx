import React from 'react';
import { useUser } from '../../store/UserState';
import {
  BookOpen,
  Briefcase,
  Calendar,
  Users,
  Building2,
  GraduationCap,
  Network,
  CalendarCheck,
  Map,
  Compass
} from 'lucide-react';
import './BottomNavBar.css';

export const BottomNavBar = () => {
  const { role, screen, setScreen, activeTab, setActiveTab } = useUser();

  // If on entry screen, don't show the bottom tab bar
  if (screen === 'entry') return null;

  // Student Nav Items
  const studentNavItems = [
    { id: 'study', label: 'Study', icon: BookOpen, action: () => { setScreen('dashboard'); setActiveTab('study'); } },
    { id: 'get-hired', label: 'Get Hired', icon: Briefcase, action: () => { setScreen('dashboard'); setActiveTab('get-hired'); } },
    { id: 'roadmap', label: 'Roadmap', icon: Map, isScreen: true, screenName: 'roadmap', action: () => setScreen('roadmap') },
    { id: 'attend', label: 'Attend', icon: Calendar, action: () => { setScreen('dashboard'); setActiveTab('attend'); } }
  ];

  // Industry Nav Items
  const industryNavItems = [
    { id: 'students', label: 'Talent Pool', icon: Users, action: () => { setScreen('dashboard'); setActiveTab('students'); } },
    { id: 'hiring', label: 'Hiring Jobs', icon: Briefcase, badge: 'Live', action: () => { setScreen('dashboard'); setActiveTab('hiring'); } },
    { id: 'courses', label: 'Sponsored', icon: GraduationCap, action: () => { setScreen('dashboard'); setActiveTab('courses'); } },
    { id: 'match', label: 'Industry Match', icon: Compass, isScreen: true, screenName: 'match', action: () => setScreen('match') }
  ];

  // Faculty Nav Items
  const facultyNavItems = [
    { id: 'learn', label: 'Learn (FDP)', icon: GraduationCap, action: () => { setScreen('dashboard'); setActiveTab('learn'); } },
    { id: 'collab', label: 'Collab & Mentors', icon: Network, badge: 'New', action: () => { setScreen('dashboard'); setActiveTab('collab'); } },
    { id: 'attend', label: 'Attend', icon: CalendarCheck, action: () => { setScreen('dashboard'); setActiveTab('attend'); } },
    { id: 'comparison', label: 'Curriculum Gap', icon: Compass, isScreen: true, screenName: 'comparison', action: () => setScreen('comparison') }
  ];

  let currentItems = studentNavItems;
  if (role === 'industry') currentItems = industryNavItems;
  if (role === 'faculty') currentItems = facultyNavItems;

  return (
    <nav className="bottom-nav-bar" aria-label="Bottom Navigation">
      {currentItems.map((item) => {
        const IconComponent = item.icon;
        const isActive = item.isScreen
          ? screen === item.screenName
          : screen === 'dashboard' && activeTab === item.id;

        return (
          <button
            key={item.id}
            className={`bottom-nav-bar__item ${isActive ? 'active' : ''}`}
            onClick={item.action}
          >
            <span className="bottom-nav-bar__icon">
              <IconComponent size={20} />
            </span>
            <span className="bottom-nav-bar__label">{item.label}</span>
            {item.badge && <span className="bottom-nav-bar__badge">{item.badge}</span>}
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNavBar;
