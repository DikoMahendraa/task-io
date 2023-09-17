import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="bg-primary-white-50 rounded-lg p-5 min-w-[30rem]">
        {children}
      </div>
    </div>
  );
}
