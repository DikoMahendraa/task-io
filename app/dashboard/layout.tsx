'use client';

import React, { useState } from 'react';
import { CURRENT_TAB, listMenu } from './constant';
import Sidebar from '@/src/components/molecules/Sidebar';
import TextField from '@/src/components/atoms/TextField';

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
            <div className="bg-primary-white rounded-md px-4 py-3 flex justify-between items-center">
              <TextField placeholder="Cari Project...." />

              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-gray-300 text-primary-white">
                  DK
                </div>

                <div className="ml-3 mr-8">
                  <p className="text-primary-gray-400 text-xs">Workspace</p>
                  <p className="font-semibold">Diko Mahendra</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
