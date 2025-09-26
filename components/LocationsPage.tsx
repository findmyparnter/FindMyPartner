import React from "react";
import Image from "next/image";

interface LocationData {
  id: string;
  name: string;
  category: string;
  imageUrl: string;
  bgColor: string;
}

const TouristLocationsPage: React.FC = () => {
  const locations: LocationData[] = [
    {
      id: "1",
      name: "MUMBAI",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/mumbai.jpg",
      bgColor: "bg-slate-900",
    },
    {
      id: "2",
      name: "DELHI",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/delhi.jpg",
      bgColor: "bg-slate-900",
    },
    {
      id: "3",
      name: "BANGALORE",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/bangalore.jpg",
      bgColor: "bg-gray-400",
    },
    {
      id: "4",
      name: "HYDERABAD",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/hyderabad.jpg",
      bgColor: "bg-red-700",
    },
    {
      id: "5",
      name: "AHMEDABAD",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/ahmedabad.jpg",
      bgColor: "bg-gray-300",
    },
    {
      id: "6",
      name: "CHENNAI",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/chennai.jpg",
      bgColor: "bg-amber-600",
    },
    {
      id: "7",
      name: "KOLKATA",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/kolkata.jpg",
      bgColor: "bg-slate-600",
    },
    {
      id: "8",
      name: "SURAT",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/surat.jpg",
      bgColor: "bg-amber-100",
    },
    {
      id: "9",
      name: "PUNE",
      category: "Escort in",
      imageUrl: "https://esco.s3.ap-south-1.amazonaws.com/pune.jpg",
      bgColor: "bg-slate-900",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="text-center py-6 sm:py-8 px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-purple-800">
          Most Searched locations in India
        </h1>
      </div>

      {/* Grid Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {/* Desktop/Laptop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 ${location.bgColor} h-48 lg:h-56`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={location.imageUrl}
                  alt={`Model in ${location.name}`}
                  fill
                  className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  sizes="(min-width: 768px) 33vw, 50vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-all duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1 opacity-90">
                    {location.category}
                  </p>
                  <h2 className="text-2xl lg:text-3xl font-bold tracking-wide">
                    {location.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Layout - Full width cards */}
        <div className="md:hidden space-y-4">
          {locations.map((location) => (
            <div
              key={location.id}
              className={`relative group cursor-pointer rounded-lg overflow-hidden shadow-lg ${location.bgColor} h-64 sm:h-72`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <Image
                  src={location.imageUrl}
                  alt={`Model in ${location.name}`}
                  fill
                  className="object-cover object-center"
                  sizes="100vw"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <p className="text-sm font-medium mb-1 opacity-90">
                    {location.category}
                  </p>
                  <h2 className="text-2xl font-bold tracking-wide">
                    {location.name}
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-8">
          <button className="inline-flex items-center px-6 py-3 text-purple-700 hover:text-purple-800 font-medium text-lg transition-colors duration-200 underline">
            See more cities
          </button>
        </div>
      </div>
    </div>
  );
};

export default TouristLocationsPage;
