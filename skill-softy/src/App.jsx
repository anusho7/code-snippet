import React from 'react';
import { UserProvider, useUser } from './store/UserState';
import TopHeader from './components/common/TopHeader';
import BottomNavBar from './components/common/BottomNavBar';
import AppNavigator from './navigation/AppNavigator';
import { CheckCircle2, Info } from 'lucide-react';
import './index.css';

const MainLayout = () => {
  const { toast } = useUser();

  return (
    <div className="website-app-container">
      {/* Top Header Navigation */}
      <TopHeader />

      {/* Main Viewport Content */}
      <main className="website-main-content">
        <AppNavigator />
      </main>

      {/* Quick Navigation Dock */}
      <BottomNavBar />

      {/* Toast Notification Overlay */}
      {toast && (
        <div className={`toast-banner ${toast.type || 'success'}`}>
          {toast.type === 'info' ? (
            <Info size={16} color="#3B82F6" />
          ) : (
            <CheckCircle2 size={16} color="#10B981" />
          )}
          <span>{toast.message}</span>
        </div>
      )}
    </div>
  );
};

export default function App() {
  return (
    <UserProvider>
      <MainLayout />
    </UserProvider>
  );
}
