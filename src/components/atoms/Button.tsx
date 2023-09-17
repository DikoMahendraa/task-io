import React from 'react';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'transparent';
  size?: 'default' | 'large';
  color?: string;
  children: React.ReactNode;
  onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  color,
  children,
  onClick
}) => {
  const classNames = `px-4 py-2 rounded-md
    ${size === 'large' ? 'text-lg' : 'text-base'}
    ${
      variant === 'outline'
        ? 'border border-gray-500 text-gray-500 hover:bg-gray-100'
        : ''
    }
    ${
      variant === 'transparent'
        ? 'bg-transparent text-gray-700 hover:text-gray-900'
        : ''
    }
    ${
      color
        ? `bg-${color}-500 hover:bg-${color}-600`
        : 'bg-blue-500 hover:bg-blue-600'
    }
  `;

  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
