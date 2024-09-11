"use client";

import React from 'react';
import { useGetParksByZipcodeQuery } from '../services/npsApi';

function Page() {
  const { data, error, isLoading } = useGetParksByZipcodeQuery('12345'); // Corrected function name

  // Example of where the error might be occurring
  const t = data; // Assuming 'data' is the object being destructured

  // Add a check for null or undefined
  if (t && 'store' in t) {
    const { store } = t;
    // ... use store here ...
  }

  const store = { name: "Sample Store", description: "This is a sample store." }; // Define store

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && (
        <div>
          Error: { 'status' in error ? error.status : 'message' in error ? error.message : 'Unknown error' }
        </div>
      )}
      {store && (
        <div>
          <h1>{store.name}</h1>
          <p>{store.description}</p>
        </div>
      )}
    </div>
  );
}

export default Page;
