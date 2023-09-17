'use client';

import React from 'react';
import TextField from '@/src/components/atoms/TextField';

export default function AuthLogin() {
  return (
    <div className="bg-primary-white-50">
      <div className="w-full">
        <TextField label="Email" placeholder="Ex. example@mail.com" />
        <TextField
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>
    </div>
  );
}
