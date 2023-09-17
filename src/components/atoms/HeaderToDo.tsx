import React from 'react';

export default function HeaderToDo() {
  return (
    <div className="grid grid-cols-3 mt-8 space-x-6">
      <div className="col-span-1">
        <p className="font-bold text-black">To-Do</p>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-black">In Progress</p>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-black">Done</p>
      </div>
    </div>
  );
}
