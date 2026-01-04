// src/firebase/client-provider.tsx
'use client';
import { initializeFirebase } from '.';
import { FirebaseProvider } from './provider';

/**
 * A client-side component that initializes Firebase and provides it to the component tree.
 * This should be used at the root of your application.
 */
export function FirebaseClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const { firebaseApp, auth, firestore } = initializeFirebase();

  return (
    <FirebaseProvider app={firebaseApp} auth={auth} firestore={firestore}>
      {children}
    </FirebaseProvider>
  );
}
