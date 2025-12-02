import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
  expiresAt: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      // Set expiry to 1 day from now
      state.expiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
    },
    updateUser: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.expiresAt = null;
      state.isAuthenticated = false;
    },
    checkTokenExpiry: (state) => {
      if (state.expiresAt && Date.now() > state.expiresAt) {
        // Token expired, clear everything
        state.user = null;
        state.token = null;
        state.expiresAt = null;
        state.isAuthenticated = false;
      }
    },
  },
});

export const { setCredentials, updateUser, logout, checkTokenExpiry } = authSlice.actions;

export default authSlice.reducer;

// Selectors
export const selectCurrentUser = (state) => state.auth.user;
export const selectIsAuthenticated = (state) => state.auth.isAuthenticated;
export const selectToken = (state) => state.auth.token;
