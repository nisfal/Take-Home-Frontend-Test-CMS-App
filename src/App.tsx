import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import SettingsPage from './pages/SettingsPage';
import Navbar from './components/Navbar';
import { useSelector } from 'react-redux';
import type { RootState } from './redux/store';

export default function App() {
  const logged = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <BrowserRouter>
      {logged && <Navbar />}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={logged ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/settings" element={logged ? <SettingsPage /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
