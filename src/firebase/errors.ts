// src/firebase/errors.ts
export type SecurityRuleContext = {
  path: string;
  operation: 'get' | 'list' | 'create' | 'update' | 'delete';
  requestResourceData?: any;
};

/**
 * A custom error class that represents a Firestore permission error.
 * This error is thrown when a user does not have permission to perform an
 * operation on a Firestore resource. It contains context about the request
 * that was denied, which can be used to display a more helpful error message
 * to the user.
 */
export class FirestorePermissionError extends Error {
  context: SecurityRuleContext;

  constructor(context: SecurityRuleContext) {
    const message = `FirestoreError: Missing or insufficient permissions: The following request was denied by Firestore Security Rules:\n${JSON.stringify(
      context,
      null,
      2
    )}`;
    super(message);
    this.name = 'FirestorePermissionError';
    this.context = context;
  }
}
