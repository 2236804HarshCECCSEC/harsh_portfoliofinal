// src/firebase/provider.tsx
'use client';

import React, { createContext, useContext, useMemo } from 'react';
import type { FirebaseApp } from 'firebase/app';
import type { Auth } from 'firebase/auth';
import type { Firestore } from 'firebase/firestore';

// Define the context shape
interface FirebaseContextType {
  app: FirebaseApp | null;
  auth: Auth | null;
  firestore: Firestore | null;
}

// Create the context
const FirebaseContext = createContext<FirebaseContextType>({
  app: null,
  auth: null,
  firestore: null,
});

// Define the provider props
interface FirebaseProviderProps {
  children: React.ReactNode;
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
}

/**
 * Provides the Firebase app, auth, and firestore instances to the component tree.
 */
export function FirebaseProvider({
  children,
  app,
  auth,
  firestore,
}: FirebaseProviderProps) {
  const value = useMemo(() => ({ app, auth, firestore }), [app, auth, firestore]);
  return (
    <FirebaseContext.Provider value={value}>{children}</FirebaseContext.Provider>
  );
}

// Hooks to access the Firebase instances

export const useFirebase = () => useContext(FirebaseContext);

export const useFirebaseApp = () => {
  const { app } = useFirebase();
  if (!app) {
    throw new Error('useFirebaseApp must be used within a FirebaseProvider');
  }
  return app;
};

export const useAuth = () => {
  const { auth } = useFirebase();
  if (!auth) {
    throw new Error('useAuth must be used within a FirebaseProvider');
  }
  return auth;
};

export const useFirestore = () => {
  const { firestore } = useFirebase();
  if (!firestore) {
    throw new Error('useFirestore must be used within a FirebaseProvider');
  }
  return firestore;
};
