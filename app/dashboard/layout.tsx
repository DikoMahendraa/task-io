import React from 'react';

export default function DashboardLayout() {
  return (
    <div className="">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1">
          <div className="h-full bg-white">
            <h1 className="text-center mt-14 text-[42px] font-semibold">
              Task.
              <span className="text-primary-orange-100">IO</span>
            </h1>
          </div>
        </div>
        <div className="col-span-3 bg-primary-gray-200 rounded-s-3xl rounded-b-3xl">
          <div className="container p-4">
            <div className="bg-primary-white">Header</div>
          </div>
        </div>
      </div>
    </div>
  );
}
