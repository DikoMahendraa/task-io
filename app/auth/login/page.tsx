'use client';

import React, { useState } from 'react';
import { setCookie } from 'cookies-next';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { supabase } from '@/services/supabase';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';

type Inputs = {
  email: string;
  password: string;
};

type StatetInvalidCredential = {
  status: boolean;
  message: string;
};

const defaultState = {
  status: false,
  message: ''
};

export default function AuthLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const router = useRouter();
  const [invalidCredential, setInvalidCredial] =
    useState<StatetInvalidCredential>(defaultState);

  const onSignIn: SubmitHandler<Inputs> = async values => {
    setInvalidCredial(defaultState);
    const { data, error } = await supabase.auth.signInWithPassword({
      email: values.email,
      password: values.password
    });

    if (error?.message) {
      setInvalidCredial({
        message: 'username or password is wrong',
        status: true
      });
    }

    if (!!data.session?.access_token) {
      setCookie('access-token', data.session.access_token);
      setCookie('users', data.session.user);
      router.push('/dashboard');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSignIn)}>
        <div className="flex flex-col space-y-4">
          <TextField
            label="Email"
            placeholder="Ex. example@mail.com"
            register={{
              ...register('email', { required: 'username is required' })
            }}
            error={errors.email?.message as string}
          />
          <TextField
            type="password"
            label="Password"
            placeholder="Enter your password"
            register={{
              ...register('password', { required: 'password is required' })
            }}
            error={errors.password?.message as string}
          />
        </div>

        {invalidCredential.status && (
          <p className="text-xs mt-1 text-red-500">
            {invalidCredential.message}
          </p>
        )}
        <div className="w-full mt-8">
          <Button type="submit" color="orange" variant="outline">
            Login
          </Button>
          <p className="text-center my-4 text-primary-gray-300">{`don't have an account yet?`}</p>
          <Button href="/auth/register" color="gray">
            Register
          </Button>
        </div>
      </form>
    </div>
  );
}
