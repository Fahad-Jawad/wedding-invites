'use client';

import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { checkTokenExpiry } from '@/store/authSlice';

function TokenExpiryChecker({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    // Check token expiry on mount
    dispatch(checkTokenExpiry());

    // Check every minute
    const interval = setInterval(() => {
      dispatch(checkTokenExpiry());
    }, 60000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return children;
}

export default function ReduxProvider({ children }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <TokenExpiryChecker>{children}</TokenExpiryChecker>
      </PersistGate>
    </Provider>
  );
}
