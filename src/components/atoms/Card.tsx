import Image from 'next/image';
import React from 'react';

import { ICAdd, ICCalender } from '@/src/assets/svg';

interface CardProps {
  title: string;
  description: string;
  image: string;
  categories: string[];
  date: string;
  isEmpty: boolean;
  actButton: boolean;
  onCreateTask: () => void;
}

const Card: React.FC<Partial<CardProps>> = ({
  title,
  description,
  image,
  categories = [],
  date,
  isEmpty = false,
  actButton = false,
  onCreateTask
}) => {
  if (isEmpty) {
    return (
      <div className="bg-white rounded-lg shadow-md w-full h-[10rem] flex flex-col items-center pt-10">
        <p className="italic text-center font-light text-primary-gray-300 mb-4 px-[6rem]">
          {title}
        </p>

        {actButton && (
          <div className="flex justify-center">
            <div
              onClick={onCreateTask}
              className="flex items-center justify-center max-w-[2rem] cursor-pointer"
            >
              <ICAdd />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-full max-w-lg">
      <h2 className="text-md font-semibold">{title}</h2>
      {image && (
        <div className="relative w-full h-[10rem] mt-4 rounded-md overflow-hidden">
          <Image
            priority
            src={image}
            alt={`alt-${title}`}
            objectFit="contain"
            fill={true}
          />
        </div>
      )}
      <p className="mt-2 text-sm text-primary-gray-300">{description}</p>
      {categories.length > 0 && (
        <div className="mt-2">
          {categories.map(category => (
            <span
              key={category}
              className="inline-block bg-gray-200 text-gray-700 rounded-full px-2 py-1 text-xs mr-2 capitalize"
            >
              {category}
            </span>
          ))}
        </div>
      )}
      <hr className="my-2" />
      <div className="flex items-center justify-end capitalize">
        <ICCalender />
        <p className="text-gray-500 text-sm ml-2">{date}</p>
      </div>
    </div>
  );
};

export default Card;
