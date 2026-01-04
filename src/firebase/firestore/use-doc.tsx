// src/firebase/firestore/use-doc.tsx
'use client';
import { useState, useEffect } from 'react';
import { onSnapshot, doc, DocumentReference, DocumentData } from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

interface DocState<T> {
  loading: boolean;
  data: T | null;
  error: Error | null;
}

/**
 * A hook to get a single document from Firestore in real-time.
 * @param ref A reference to the document.
 * @returns The document data, loading state, and error state.
 */
export function useDoc<T extends DocumentData>(ref: DocumentReference<T> | null) {
  const [state, setState] = useState<DocState<T>>({
    loading: true,
    data: null,
    error: null,
  });

  useEffect(() => {
    if (!ref) {
      setState({ loading: false, data: null, error: null });
      return;
    }

    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        setState({
          loading: false,
          data: snapshot.exists() ? { id: snapshot.id, ...snapshot.data() } as T : null,
          error: null,
        });
      },
      async (error) => {
        const permissionError = new FirestorePermissionError({
          path: ref.path,
          operation: 'get',
        });
        errorEmitter.emit('permission-error', permissionError);
        setState({ loading: false, data: null, error: permissionError });
      }
    );

    return () => unsubscribe();
  }, [ref]);

  return state;
}
