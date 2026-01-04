'use client';

import React, { useEffect } from 'react';
import { errorEmitter } from '@/firebase/error-emitter';

/**
 * A client component that listens for Firestore permission errors and throws them
 * to be caught by the Next.js development error overlay.
 *
 * This component should be placed at the root of the application, inside the
 * Firebase providers. It is essential for a good developer experience when

 * working with Firestore security rules.
 */
export function FirebaseErrorListener() {
  useEffect(() => {
    const handlePermissionError = (error: Error) => {
      // Throwing the error here will cause it to be displayed in the Next.js
      // development error overlay. This is only active in development mode.
      if (process.env.NODE_ENV === 'development') {
        throw error;
      }
    };

    errorEmitter.on('permission-error', handlePermissionError);

    return () => {
      errorEmitter.off('permission-error', handlePermissionError);
    };
  }, []);

  return null;
}
