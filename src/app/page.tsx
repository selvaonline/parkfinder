import dynamic from 'next/dynamic';

const ZipCodeSearch = dynamic(() => import('../components/ZipCodeSearch'), { ssr: false });

export default function HomePage() {
  return (
    <div>
      <h1>Find National Parks</h1>
      <ZipCodeSearch />
    </div>
  );
}
