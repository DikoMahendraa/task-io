'use client';

import React, { useState } from 'react';

import { CURRENT_TAB, listMenu } from '@/app/dashboard/constant';
import Sidebar from '@/src/components/molecules/Sidebar';
import Header from '@/src/components/molecules/Header';

import HeaderToDo from '@/src/components/atoms/HeaderToDo';
import ListTask from '@/src/components/molecules/ListTask';
import HeaderBreadCrumb from '@/src/components/molecules/HeaderBreadCrumb';

export default function DashboardLayout() {
  const [currentTab] = useState(CURRENT_TAB);

  return (
    <div className="">
      <div className="grid grid-cols-4 h-screen">
        <div className="col-span-1 sticky">
          <Sidebar list={listMenu} tab={currentTab} />
        </div>
        <div className="col-span-3 bg-primary-gray-200 rounded-s-3xl rounded-b-3xl">
          <div className="container p-4">
            <Header />
            <HeaderBreadCrumb />
            <HeaderToDo />
            <ListTask />
          </div>
        </div>
      </div>
    </div>
  );
}
