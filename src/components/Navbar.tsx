import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';

export default function Navbar() {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    nav('/login');
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between">
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/settings">Settings</Link>
      </div>
      <button onClick={handleLogout} className="bg-red-500 px-3 py-1 rounded">Logout</button>
    </nav>
  );
}
