import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  loggedIn: boolean;
}

const initialState: AuthState = {
  loggedIn: localStorage.getItem('loggedIn') === 'true',
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.loggedIn = true;
      localStorage.setItem('loggedIn', 'true');
    },
    logout: (state) => {
      state.loggedIn = false;
      localStorage.removeItem('loggedIn');
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
