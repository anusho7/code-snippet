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
    <div className="app-container">
      {/* Sticky Top Header */}
      <TopHeader />

      {/* Main Dynamic View */}
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <AppNavigator />
      </main>

      {/* Role-Aware Floating Bottom Navigation */}
      <BottomNavBar />

      {/* Global Interactive Toast Notification */}
      {toast && (
        <div className={`toast-banner ${toast.type || 'success'}`}>
          {toast.type === 'info' ? (
            <Info size={18} color="#3B82F6" />
          ) : (
            <CheckCircle2 size={18} color="#10B981" />
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
