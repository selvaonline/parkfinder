"use client"; // Ensure this is treated as a client component

import React, { useState } from 'react';
import ParkList from './ParkList'; // Import ParkList component
import { useGetParksByZipcodeQuery } from '../services/npsApi'; // Import the RTK Query hook

export default function ZipCodeSearch() {
  const [zipcode, setZipcode] = useState<string>('');
  const [submittedZipcode, setSubmittedZipcode] = useState<string | null>(null);
  
  const handleSearch = () => {
    setSubmittedZipcode(zipcode); // Set the submitted zip code for search
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Zip Code"
        value={zipcode}
        onChange={(e) => setZipcode(e.target.value)}
      />
      <button onClick={handleSearch}>Search Parks</button>

      {submittedZipcode && <ParkList zipcode={submittedZipcode} />}
    </div>
  );
}
