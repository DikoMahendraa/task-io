import React from 'react';
import TextField from '@/src/components/atoms/TextField';
import { getCookie } from 'cookies-next';

export default function Header() {
  const getUser = getCookie('users');
  const userName: { name: string } = JSON.parse(getUser as string)
    ?.user_metadata;

  return (
    <div className="bg-primary-white rounded-md px-4 py-3 flex justify-between items-center">
      <div className=" w-1/4">
        <TextField placeholder="Cari Project...." />
      </div>

      <div className="flex items-center">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-gray-300 text-primary-white">
          DK
        </div>

        <div className="ml-3 mr-8">
          <p className="text-primary-gray-400 text-xs">Workspace</p>
          <p className="font-semibold capitalize">{userName?.name}</p>
        </div>
      </div>
    </div>
  );
}
