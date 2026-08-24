import React, { createContext, useContext, useState, useEffect } from 'react';
import { ROADMAP_DATA, QUESTIONNAIRE_DATA, SKILL_COMPARISON_DATA } from '../utils/mockData';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  // Current active role: 'student' | 'industry' | 'faculty' | null
  const [role, setRole] = useState('student');

  // Screen flow: 'entry' | 'onboarding' | 'comparison' | 'roadmap' | 'match' | 'dashboard'
  const [screen, setScreen] = useState('entry');

  // Active Dashboard Tab based on active role
  // Student: 'study' | 'get-hired' | 'attend'
  // Industry: 'students' | 'hiring' | 'courses'
  // Faculty: 'learn' | 'collab' | 'attend'
  const [activeTab, setActiveTab] = useState('study');

  // Questionnaire responses state
  const [answers, setAnswers] = useState({
    degree: 'cs_it',
    year: '3rd_year',
    targetRole: 'fullstack',
    currentSkillLevel: 'intermediate',
    department: 'cse',
    focusArea: 'guest_lecture',
    companyType: 'startup',
    primaryNeed: 'hire'
  });

  // Roadmap node completion state
  const [completedNodes, setCompletedNodes] = useState({
    n1: true,
    n2: true,
    n3: true,
    n4: true,
    n5: true,
    n6: true
  });

  // Action states for user interactivity
  const [appliedJobs, setAppliedJobs] = useState(['j1']);
  const [enrolledCourses, setEnrolledCourses] = useState(['c1', 'c2']);
  const [registeredEvents, setRegisteredEvents] = useState(['e2']);
  const [shortlistedStudents, setShortlistedStudents] = useState(['s1', 's2']);
  const [invitedCollabs, setInvitedCollabs] = useState([]);

  // Toast / Notification system
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => {
      setToast(null);
    }, 3800);
  };

  // Sync activeTab default whenever role changes
  useEffect(() => {
    if (role === 'student') {
      setActiveTab('study');
    } else if (role === 'industry') {
      setActiveTab('students');
    } else if (role === 'faculty') {
      setActiveTab('learn');
    }
  }, [role]);

  // Handle role selection from Entry screen
  const selectRole = (selectedRole) => {
    setRole(selectedRole);
    // Proceed to onboarding or direct dashboard
    setScreen('onboarding');
  };

  const updateAnswer = (questionId, value) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const toggleNodeCompletion = (nodeId) => {
    setCompletedNodes(prev => {
      const isCompleted = !prev[nodeId];
      const updated = { ...prev, [nodeId]: isCompleted };
      if (isCompleted) {
        showToast('Milestone completed! Keep moving forward.', 'success');
      }
      return updated;
    });
  };

  const toggleApplyJob = (jobId) => {
    setAppliedJobs(prev => {
      const exists = prev.includes(jobId);
      if (exists) {
        showToast('Application withdrawn.', 'info');
        return prev.filter(id => id !== jobId);
      } else {
        showToast('Application submitted successfully! Recruiter notified.', 'success');
        return [...prev, jobId];
      }
    });
  };

  const toggleEnrollCourse = (courseId) => {
    setEnrolledCourses(prev => {
      const exists = prev.includes(courseId);
      if (exists) {
        showToast('Unenrolled from course track.', 'info');
        return prev.filter(id => id !== courseId);
      } else {
        showToast('Successfully enrolled! Course track added to your dashboard.', 'success');
        return [...prev, courseId];
      }
    });
  };

  const toggleRegisterEvent = (eventId) => {
    setRegisteredEvents(prev => {
      const exists = prev.includes(eventId);
      if (exists) {
        showToast('RSVP cancelled.', 'info');
        return prev.filter(id => id !== eventId);
      } else {
        showToast('RSVP Confirmed! Added to calendar & reminders.', 'success');
        return [...prev, eventId];
      }
    });
  };

  const toggleShortlistStudent = (studentId) => {
    setShortlistedStudents(prev => {
      const exists = prev.includes(studentId);
      if (exists) {
        showToast('Candidate removed from shortlist.', 'info');
        return prev.filter(id => id !== studentId);
      } else {
        showToast('Candidate added to Interview Shortlist!', 'success');
        return [...prev, studentId];
      }
    });
  };

  const inviteCollab = (collabId, companyName) => {
    if (!invitedCollabs.includes(collabId)) {
      setInvitedCollabs(prev => [...prev, collabId]);
      showToast(`Collaboration invitation sent to ${companyName}!`, 'success');
    }
  };

  const value = {
    role,
    setRole,
    screen,
    setScreen,
    activeTab,
    setActiveTab,
    answers,
    updateAnswer,
    selectRole,
    completedNodes,
    toggleNodeCompletion,
    appliedJobs,
    toggleApplyJob,
    enrolledCourses,
    toggleEnrollCourse,
    registeredEvents,
    toggleRegisterEvent,
    shortlistedStudents,
    toggleShortlistStudent,
    invitedCollabs,
    inviteCollab,
    toast,
    showToast
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
