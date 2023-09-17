import React from 'react';

import Button from '@/src/components/atoms/Button';

export default function HeaderBreadCrumb() {
  return (
    <div className="flex items-center justify-between mt-8">
      <p className="text-gray-500 font-semibold">FE - Virtualspace</p>

      <div>
        <Button color="orange" variant="outline">
          + Create Task
        </Button>
      </div>
    </div>
  );
}
