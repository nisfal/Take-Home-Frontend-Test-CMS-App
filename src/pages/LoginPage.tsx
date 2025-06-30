import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/authSlice';

export default function LoginPage() {
  const [u, sU] = useState(''), [p, sP] = useState('');
  const nav = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (u === 'admin' && p === '123456') {
      dispatch(login());
      nav('/');
    } else alert('Invalid credentials');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow space-y-4 w-80">
        <h2 className="text-xl font-bold">Login</h2>
        <input value={u} onChange={e => sU(e.target.value)} placeholder="Username" className="border w-full px-2 py-1" required />
        <input type="password" value={p} onChange={e => sP(e.target.value)} placeholder="Password" className="border w-full px-2 py-1" required />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded">Login</button>
      </form>
    </div>
  );
}
