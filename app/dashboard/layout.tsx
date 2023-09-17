'use client';

import React, { useState } from 'react';
import { CURRENT_TAB, listMenu } from './constant';

export default function DashboardLayout() {
  const [currentTab] = useState(CURRENT_TAB);

  return (
    <div className="">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1">
          <div className="h-full bg-white">
            <h1 className="text-center mt-14 text-[42px] font-semibold">
              Task.
              <span className="text-primary-orange-100">IO</span>
            </h1>

            <div className="px-16 mt-16">
              {listMenu.map((item, index) => {
                const isActive = item.title === currentTab;

                const styleActive = isActive
                  ? 'bg-primary-orange-50 text-primary-orange-100 font-semibold'
                  : 'cursor-not-allowed';

                const menuStyle = [
                  'pl-4 mb-6 cursor-pointer flex items-center text-primary-gray-300 py-4',
                  styleActive
                ].join(' ');

                return (
                  <div key={index} className={menuStyle}>
                    {item.icon}
                    <p className="ml-4">{item.title}</p>
                  </div>
                );
              })}
            </div>
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
