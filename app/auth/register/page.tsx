'use client';

import React from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';

export default function AuthRegister() {
  return (
    <div className="w-full">
      <div className="flex flex-col space-y-4">
        <TextField label="Email" placeholder="Ex. example@mail.com" />
        <TextField
          type="password"
          label="Password"
          placeholder="Enter your password"
        />
      </div>

      <div className="w-full mt-8">
        <Button href="/" color="orange" variant="outline">
          Register
        </Button>
        <p className="text-center my-4 text-primary-gray-300">{`don't have an account yet?`}</p>
        <Button href="/auth/login" color="gray">
          Login
        </Button>
      </div>
    </div>
  );
}
