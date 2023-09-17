'use client';

import React, { useState } from 'react';

import { CURRENT_TAB, listMenu } from '@/src/constant';
import Sidebar from '@/src/components/molecules/Sidebar';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const [currentTab] = useState(CURRENT_TAB);

  return (
    <div className="relative">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1 sticky">
          <Sidebar list={listMenu} tab={currentTab} />
        </div>
        <div className="col-span-3 bg-primary-gray-200 rounded-s-3xl rounded-b-3xl w-full">
          <div className="container p-4">{children}</div>
        </div>
      </div>
    </div>
  );
}
