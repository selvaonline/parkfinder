// src/components/ZipcodeSearch.tsx
"use client"; // Add this line

import { useState } from 'react';
import { useGetParksByZipcodeQuery } from '../services/npsApi';

const ZipcodeSearch = () => {
  const [zipcode, setZipcode] = useState('');
  const { data, error, isLoading } = useGetParksByZipcodeQuery(zipcode, {
    skip: !zipcode,
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
      <form onSubmit={handleSearch} className="space-y-4">
        <input
          type="text"
          placeholder="Enter zipcode"
          value={zipcode}
          onChange={(e) => setZipcode(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Search
        </button>
      </form>

      {isLoading && <div className="text-center">Loading parks near {zipcode}...</div>}
      {error && <div className="text-center text-red-500">Error fetching parks</div>}

      {data && (
        <div className="space-y-4">
          {data.data.map((park) => (
            <div key={park.id} className="bg-white p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-bold">{park.fullName}</h2>
              <p className="text-gray-700">{park.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ZipcodeSearch;
