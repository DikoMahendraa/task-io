import React from 'react';
import Image from 'next/image';

import Button from '@/src/components/atoms/Button';

export default function EmptyProject() {
  return (
    <div className="mt-[4rem] flex flex-col justify-center items-center">
      <Image
        alt="il-emtpy-project"
        src={'/illustrations/il-empty-project.png'}
        width={400}
        height={400}
        priority
      />
      <div>
        <p className="text-primary-gray-300 text-center mb-6 italic">
          Ups, nothing project available, <br /> create new project ?
        </p>

        <Button color="orange" variant="outline">
          Create Project
        </Button>
      </div>
    </div>
  );
}
