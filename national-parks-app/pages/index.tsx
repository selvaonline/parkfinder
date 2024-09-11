// pages/index.tsx
import ParkList from '../src/components/ParkList';
import ZipcodeSearch from '../src/components/ZipcodeSearch';

const Home = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-4xl font-bold my-6">National Parks Explorer</h1>
      <h2 className="text-2xl font-bold mb-4">Random Parks:</h2>
      <ParkList />
      <h2 className="text-2xl font-bold my-6">Search Parks by Zipcode:</h2>
      <ZipcodeSearch />
    </div>
  );
};

export default Home;
