// src/firebase/auth/use-user.tsx
'use client';
import { useEffect, useState } from 'react';
import { onAuthStateChanged, type User } from 'firebase/auth';
import { useAuth } from '../provider';

/**
 * A hook to get the current user.
 * @returns The current user, or null if not logged in.
 */
export function useUser() {
  const auth = useAuth();
  const [user, setUser] = useState<User | null>(auth.currentUser);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, [auth]);

  return user;
}
