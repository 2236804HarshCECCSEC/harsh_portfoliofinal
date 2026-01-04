// src/firebase/firestore/use-collection.tsx
'use client';
import { useState, useEffect, useMemo } from 'react';
import {
  onSnapshot,
  collection,
  Query,
  DocumentData,
  CollectionReference,
} from 'firebase/firestore';
import { errorEmitter } from '../error-emitter';
import { FirestorePermissionError } from '../errors';

interface CollectionState<T> {
  loading: boolean;
  data: T[] | null;
  error: Error | null;
}

/**
 * A hook to get a collection from Firestore in real-time.
 * @param query A query on the collection.
 * @returns The collection data, loading state, and error state.
 */
export function useCollection<T extends DocumentData>(
  query: Query<T> | CollectionReference<T> | null
) {
  const [state, setState] = useState<CollectionState<T>>({
    loading: true,
    data: null,
    error: null,
  });

  const queryKey = useMemo(() => query?.path, [query]);

  useEffect(() => {
    if (!query) {
      setState({ loading: false, data: [], error: null });
      return;
    }
     setState({ loading: true, data: null, error: null });

    const unsubscribe = onSnapshot(
      query,
      (snapshot) => {
        const data = snapshot.docs.map(
          (doc) => ({ id: doc.id, ...doc.data() }) as T
        );
        setState({ loading: false, data, error: null });
      },
      async (error) => {
        const path = query instanceof CollectionReference ? query.path : '(query)';
        const permissionError = new FirestorePermissionError({
          path,
          operation: 'list',
        });
        errorEmitter.emit('permission-error', permissionError);
        setState({ loading: false, data: null, error: permissionError });
      }
    );

    return () => unsubscribe();
  }, [queryKey]);

  return state;
}
