// src/components/ParkList.tsx
import { useGetParksQuery } from '../services/npsApi';

const ParkList = () => {
  const { data, error, isLoading } = useGetParksQuery();

  if (isLoading) return <div className="text-center">Loading parks...</div>;
  if (error) return <div className="text-center text-red-500">Error loading parks</div>;

  return (
    <div className="space-y-4">
      {data?.data.map((park) => (
        <div key={park.id} className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-bold">{park.fullName}</h2>
          <p className="text-gray-700">{park.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ParkList;
