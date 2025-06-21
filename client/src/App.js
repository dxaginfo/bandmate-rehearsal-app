import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';

// Components
import Layout from './components/Layout/Layout';
import RequireAuth from './components/Auth/RequireAuth';

// Pages
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Dashboard from './pages/Dashboard/Dashboard';
import BandDetails from './pages/Bands/BandDetails';
import RehearsalCalendar from './pages/Rehearsals/RehearsalCalendar';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';

// Redux actions
import { checkAuthStatus } from './features/auth/authSlice';

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated, isInitialized } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(checkAuthStatus());
  }, [dispatch]);

  if (!isInitialized) {
    // Show loading state while checking auth status
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      {/* Public routes */}
      <Route path="/login" element={!isAuthenticated ? <Login /> : <Navigate to="/dashboard" />} />
      <Route path="/register" element={!isAuthenticated ? <Register /> : <Navigate to="/dashboard" />} />
      
      {/* Protected routes */}
      <Route element={<RequireAuth />}>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/bands/:bandId" element={<BandDetails />} />
          <Route path="/calendar" element={<RehearsalCalendar />} />
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Route>
      
      {/* 404 route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
