import React from 'react';
import Image from 'next/image'; // Import Image from next/image
import { MapPin } from 'lucide-react';

interface LocationCardProps {
  city: string;
  imageSrc: string; // URL for the city image
}

const LocationCard: React.FC<LocationCardProps> = ({ city, imageSrc }) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg group">
      {/* Background Image using next/image */}
      <Image
        src={imageSrc}
        alt={city}
        width={225} // Use the width from the provided img tags
        height={75}  // Use the height from the provided img tags
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110" // Adjusted height for better card appearance
      />

      {/* Overlay for text and hover effect */}
      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
        <div className="flex items-center text-white text-xl font-bold transition-transform duration-300 group-hover:-translate-y-2">
          <MapPin className="w-6 h-6 mr-2" />
          {city}
        </div>
      </div>
    </div>
  );
};

const Location: React.FC = () => {
  const locations = [
    { city: "MUMBAI", imageSrc: "/Location/0009_mumbai.webp" },
    { city: "THANE", imageSrc: "/Location/0008_thane.webp" },
    { city: "PUNE", imageSrc: "/Location/0007_pune.png" },
    { city: "AHMEDABAD", imageSrc: "/Location/0006_ahemdabad.png" },
    { city: "DELHI", imageSrc: "/Location/0005_delhi.png" },
    { city: "NOIDA", imageSrc: "/Location/0004_noida.png" },
    { city: "GURUGRAM", imageSrc: "/Location/0003_gurugram.png" },
    { city: "GHAZIABAD", imageSrc: "/Location/0002_Ghaziabad.png" },
    { city: "JAIPUR", imageSrc: "/Location/0001_jaipur.png" },
    { city: "AGRA", imageSrc: "/Location/0000_agra.png" },
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-2">
            <small className="text-orange-600">VEHICLES & SERVICES</small>
            <br />
            <span>IN OTHER CITIES...</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {locations.map((location) => (
            <LocationCard key={location.city} city={location.city} imageSrc={location.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Location;