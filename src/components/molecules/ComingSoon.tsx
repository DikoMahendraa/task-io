import Link from 'next/link';
import React from 'react';
import Button from '../atoms/Button';

export default function ComingSoon() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <p className="font-semibold italic text-5xl text-primary-gray-300">
        Coming soo
      </p>
      <p className="mt-4 text-primary-gray-400 mb-4">
        is in the development stage
      </p>

      <Link href="/dashboard/todo">
        <Button color="orange" variant="outline">
          Visit To-Do
        </Button>
      </Link>
    </div>
  );
}
