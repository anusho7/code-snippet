import React, { useState, useEffect } from 'react';
import { UserProvider, useUser } from './store/UserState';
import TopHeader from './components/common/TopHeader';
import BottomNavBar from './components/common/BottomNavBar';
import AppNavigator from './navigation/AppNavigator';
import { CheckCircle2, Info, Wifi, Battery, Signal } from 'lucide-react';
import './index.css';

const MainLayout = () => {
  const { toast } = useUser();
  const [currentTime, setCurrentTime] = useState('9:41');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      hours = hours % 12 || 12;
      const minStr = minutes < 10 ? `0${minutes}` : minutes;
      setCurrentTime(`${hours}:${minStr}`);
    };
    updateClock();
    const interval = setInterval(updateClock, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobile-aspect-root">
      {/* Strict 9:16 Mobile Device Canvas */}
      <div className="mobile-9-16-canvas">
        
        {/* Status Bar */}
        <div className="mobile-status-bar">
          <span className="mobile-status-time">{currentTime}</span>
          
          {/* Speaker / Notch */}
          <div className="mobile-status-notch">
            <div className="mobile-camera-lens"></div>
          </div>

          <div className="mobile-status-icons">
            <Signal size={12} />
            <Wifi size={12} />
            <Battery size={14} />
          </div>
        </div>

        {/* Scrollable Screen Viewport */}
        <div className="mobile-viewport-content">
          <TopHeader />
          <main className="mobile-main-router">
            <AppNavigator />
          </main>
        </div>

        {/* Floating App Dock */}
        <BottomNavBar />

        {/* Home Indicator */}
        <div className="mobile-home-indicator-bar">
          <div className="mobile-home-indicator"></div>
        </div>

        {/* Toast Overlay */}
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
