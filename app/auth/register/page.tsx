'use client';
import { useForm, SubmitHandler } from 'react-hook-form';

import React, { useState } from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { supabase } from '@/services/supabase';
import { useRouter } from 'next/navigation';

type Inputs = {
  username: string;
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
export default function AuthRegister() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();
  const [invalidCredential, setInvalidCredial] =
    useState<StatetInvalidCredential>(defaultState);

  const router = useRouter();

  const onSignUp: SubmitHandler<Inputs> = async values => {
    const { data, error } = await supabase.auth.signUp({
      email: values.email,
      password: values.password,
      options: {
        data: {
          name: values.username
        }
      }
    });

    if (error?.message) {
      setInvalidCredial({
        message: 'username already to registered',
        status: true
      });
    }

    if (!!data.session?.access_token) {
      router.push('/login');
    }
  };

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit(onSignUp)}>
        <div className="flex flex-col space-y-4">
          <TextField
            label="Username"
            placeholder="Ex. Coco Mahendr4"
            register={{
              ...register('username', { required: 'username is required' })
            }}
            error={errors.username?.message as string}
          />
          <TextField
            label="Email"
            placeholder="Ex. example@mail.com"
            register={{
              ...register('email', { required: 'email is required' })
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
            Register
          </Button>
          <p className="text-center my-4 text-primary-gray-300">{`don't have an account yet?`}</p>
          <Button href="/auth/login" color="gray">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
