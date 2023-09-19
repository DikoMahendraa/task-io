import React, { useState } from 'react';

interface TextFieldProps {
  placeholder: string;
  label?: string;
  value?: string;
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  variant?: 'default' | 'prefix' | 'suffix';
  type?: 'text' | 'password' | 'date';
  register: any;
  error?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  variant = 'default',
  prefix,
  suffix,
  type = 'text',
  value,
  register,
  error
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  const isError = !!error
    ? 'focus:border-red-500'
    : 'focus:border-primary-orange-100';

  return (
    <div>
      {label && (
        <label className="block text-primary-gray-300 font-light mb-1">
          {label}
        </label>
      )}
      <div className={`relative ${variant === 'prefix' ? 'flex' : ''}`}>
        {variant === 'prefix' && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {prefix}
          </span>
        )}
        <input
          className={`w-full px-3 py-3 text-sm rounded-md border bg-primary-gray-light focus:outline-none ${isError}  ${
            variant === 'suffix' ? 'pl-3 pr-10' : ''
          }`}
          type={inputType}
          placeholder={placeholder}
          value={value}
          {...register}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
        {variant === 'suffix' && (
          <>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-400">
              {suffix}
            </span>
            {type === 'password' && (
              <span
                className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {isPasswordVisible ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  />
                )}
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TextField;
