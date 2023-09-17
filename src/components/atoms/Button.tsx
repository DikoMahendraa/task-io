import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  variant?: 'default' | 'outline' | 'transparent';
  size?: 'default' | 'large';
  color?: 'default' | 'gray' | 'orange';
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
}
const Button: React.FC<ButtonProps> = ({
  variant = 'default',
  size = 'default',
  color = 'default',
  children,
  onClick,
  href = ''
}) => {
  const buttonSize = size === 'large' ? 'text-lg' : 'text-base';

  const buttonStyle = (() => {
    const typeOfBtn = `${variant}-${color}`;

    switch (typeOfBtn) {
      case 'outline-orange':
        return `bg-white border text-primary-orange-100 hover:bg-primary-orange-100 hover:text-primary-orange-50 border-primary-orange-100`;
      case 'default-orange':
        return 'bg-primary-orange-50 text-primary-orange-100 hover:bg-primary-orange-100 hover:text-primary-orange-50';
      case 'outline-gray':
        return 'border text-primary-gray-300 border-primary-gray-300';
      case 'default-gray':
        return 'bg-primary-gray-100 text-primary-gray-400 hover:bg-primary-gray-200 hover:text-primary-gray-400';
      default:
        return '';
    }
  })();

  const classNames = [
    buttonSize,
    buttonStyle,
    'px-4 py-2 rounded-md w-full font-semibold'
  ].join(' ');

  return href ? (
    <Link href={href}>
      <button className={classNames} onClick={onClick}>
        {children}
      </button>
    </Link>
  ) : (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
