import React from 'react';
import TextField from '@/src/components/atoms/TextField';

export default function Header() {
  return (
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
  );
}
