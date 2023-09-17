import React, { useState } from 'react';

interface TextFieldProps {
  label?: string;
  placeholder: string;
  variant?: 'default' | 'prefix' | 'suffix';
  prefix?: string | React.ReactNode;
  suffix?: string | React.ReactNode;
  type?: 'text' | 'password';
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  variant = 'default',
  prefix,
  suffix,
  type = 'text',
  onChange,
  value
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className="mb-4">
      {label && <label className="block text-gray-700">{label}</label>}
      <div className={`relative ${variant === 'prefix' ? 'flex' : ''}`}>
        {variant === 'prefix' && (
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            {prefix}
          </span>
        )}
        <input
          className={`w-full px-3 py-2 rounded-md border focus:outline-none focus:ring focus:border-blue-300 ${
            variant === 'suffix' ? 'pl-3 pr-10' : ''
          }`}
          type={inputType}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
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
                  >
                    {/* ... The eye icon when password is visible */}
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {/* ... The eye-slash icon when password is hidden */}
                  </svg>
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