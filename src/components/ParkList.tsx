"use client";

import React from 'react';
import { useGetParksByZipcodeQuery } from '../services/npsApi'; // Fetch parks using RTK Query

interface ParkListProps {
  zipcode: string;
}

export default function ParkList({ zipcode }: ParkListProps) {
  const { data, error, isLoading } = useGetParksByZipcodeQuery(zipcode);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching parks</div>;

  return (
    <div>
      <h2>Parks Near {zipcode}</h2>
      <ul>
        {data?.data.map((park: any) => (
          <li key={park.id}>
            <h3>{park.fullName}</h3>
            <p>{park.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
