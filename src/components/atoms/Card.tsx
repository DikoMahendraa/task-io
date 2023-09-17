import Image from 'next/image';
import React from 'react';

interface CardProps {
  title: string;
  description: string;
  image?: string;
  categories: string[];
  date: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  categories,
  date
}) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-lg">
      <h2 className="text-2xl font-semibold">{title}</h2>
      {image && (
        <Image src={image} alt={title} className="mt-2 w-full h-auto" />
      )}
      <p className="mt-2">{description}</p>
      {categories.length > 0 && (
        <div className="mt-2">
          {categories.map(category => (
            <span
              key={category}
              className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-sm mr-2"
            >
              {category}
            </span>
          ))}
        </div>
      )}
      <hr className="my-2" />
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-500 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {/* ... Calendar icon */}
        </svg>
        <span className="text-gray-500 text-sm">{date}</span>
      </div>
    </div>
  );
};

export default Card;
