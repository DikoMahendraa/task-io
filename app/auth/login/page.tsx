'use client';

import React from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';

export default function AuthLogin() {
  return (
    <div className="w-full">
      <TextField label="Email" placeholder="Ex. example@mail.com" />
      <TextField
        type="password"
        label="Password"
        placeholder="Enter your password"
      />

      <div className="w-full mt-8">
        <Button href="/" color="orange" variant="outline">
          Login
        </Button>
        <p className="text-center my-4 text-primary-gray-300">{`don't have an account yet?`}</p>
        <Button href="/auth/register" color="gray">
          Register
        </Button>
      </div>
    </div>
  );
}
