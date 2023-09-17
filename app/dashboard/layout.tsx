'use client';

import React, { useState } from 'react';

import { CURRENT_TAB, listMenu } from '@/app/dashboard/constant';
import Sidebar from '@/src/components/molecules/Sidebar';
import Header from '@/src/components/molecules/Header';
import EmptyProject from '@/src/components/organizes/EmptyProject';

export default function DashboardLayout() {
  const [currentTab] = useState(CURRENT_TAB);

  return (
    <div className="">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1">
          <Sidebar list={listMenu} tab={currentTab} />
        </div>
        <div className="col-span-3 bg-primary-gray-200 rounded-s-3xl rounded-b-3xl">
          <div className="container p-4">
            <Header />

            <EmptyProject />
          </div>
        </div>
      </div>
    </div>
  );
}
