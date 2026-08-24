import React from 'react';
import { useUser } from '../store/UserState';

// Screens
import RoleSelection from '../screens/Entry/RoleSelection';
import Questionnaire from '../screens/Onboarding/Questionnaire';
import SkillComparison from '../screens/Onboarding/SkillComparison';
import SkillRoadmap from '../screens/Roadmap/SkillRoadmap';
import IndustryMatch from '../screens/Roadmap/IndustryMatch';

// Industry Tabs
import IndStudentsTab from '../screens/Industry/IndStudentsTab';
import IndHiringTab from '../screens/Industry/IndHiringTab';
import IndCoursesTab from '../screens/Industry/IndCoursesTab';

// Student Tabs
import StuStudyTab from '../screens/Student/StuStudyTab';
import StuGetHiredTab from '../screens/Student/StuGetHiredTab';
import StuAttendTab from '../screens/Student/StuAttendTab';

// Faculty Tabs
import FacLearnTab from '../screens/Faculty/FacLearnTab';
import FacCollabTab from '../screens/Faculty/FacCollabTab';
import FacAttendTab from '../screens/Faculty/FacAttendTab';

// Icons & UI
import { PrimaryButton } from '../components/common/PrimaryButton';
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
import './AppNavigator.css';

export const AppNavigator = () => {
  const { role, screen, setScreen, activeTab, setActiveTab } = useUser();

  // Route: Role Selection
  if (screen === 'entry') {
    return <RoleSelection />;
  }

  // Route: Onboarding Questionnaire
  if (screen === 'onboarding') {
    return <Questionnaire />;
  }

  // Route: Degree vs Industry Skill Comparison
  if (screen === 'comparison') {
    return <SkillComparison />;
  }

  // Route: Skill Roadmap
  if (screen === 'roadmap') {
    return <SkillRoadmap />;
  }

  // Route: Industry & Role Matches
  if (screen === 'match') {
    return <IndustryMatch />;
  }

  // Route: Dashboard View
  const renderDashboardContent = () => {
    if (role === 'student') {
      if (activeTab === 'study') return <StuStudyTab />;
      if (activeTab === 'get-hired') return <StuGetHiredTab />;
      if (activeTab === 'attend') return <StuAttendTab />;
      return <StuStudyTab />;
    }

    if (role === 'industry') {
      if (activeTab === 'students') return <IndStudentsTab />;
      if (activeTab === 'hiring') return <IndHiringTab />;
      if (activeTab === 'courses') return <IndCoursesTab />;
      return <IndStudentsTab />;
    }

    if (role === 'faculty') {
      if (activeTab === 'learn') return <FacLearnTab />;
      if (activeTab === 'collab') return <FacCollabTab />;
      if (activeTab === 'attend') return <FacAttendTab />;
      return <FacLearnTab />;
    }

    return <StuStudyTab />;
  };

  // Sub-Navigation Tabs based on role
  const getSubNavTabs = () => {
    if (role === 'student') {
      return [
        { id: 'study', label: 'Study & Courses', icon: BookOpen },
        { id: 'get-hired', label: 'Get Hired (Jobs & Internships)', icon: Briefcase },
        { id: 'attend', label: 'Attend Events & Hackathons', icon: Calendar }
      ];
    }
    if (role === 'industry') {
      return [
        { id: 'students', label: 'Talent Pool & Portfolios', icon: Users },
        { id: 'hiring', label: 'Hiring & Job Postings', icon: Briefcase },
        { id: 'courses', label: 'Sponsored Courses & Tracks', icon: GraduationCap }
      ];
    }
    if (role === 'faculty') {
      return [
        { id: 'learn', label: 'Learn (FDP Programs)', icon: GraduationCap },
        { id: 'collab', label: 'Industry Mentors & Collab', icon: Network },
        { id: 'attend', label: 'Conferences & Summits', icon: CalendarCheck }
      ];
    }
    return [];
  };

  const tabs = getSubNavTabs();

  return (
    <div className="dashboard-container animate-fade-in">
      {/* Main Tab Content */}
      <div className="dashboard-tab-content">
        {renderDashboardContent()}
      </div>
    </div>
  );
};

export default AppNavigator;
