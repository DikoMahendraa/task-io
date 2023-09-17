import React from 'react';

import Button from '@/src/components/atoms/Button';

interface HeaderBreadCrumb {
  onCreateTask: () => void;
}

const HeaderBreadCrumb: React.FC<HeaderBreadCrumb> = ({ onCreateTask }) => {
  return (
    <div className="flex items-center justify-between mt-8">
      <p className="text-gray-500 font-semibold">FE - Virtualspace</p>

      <div>
        <Button onClick={onCreateTask} color="orange" variant="outline">
          + Create Task
        </Button>
      </div>
    </div>
  );
};

export default HeaderBreadCrumb;
