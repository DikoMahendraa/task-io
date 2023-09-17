import { ListMenu } from '@/app/dashboard/constant';
import React from 'react';

type PropsSidebar = {
  list: Array<ListMenu>;
  tab: string;
};

const Sidebar: React.FC<PropsSidebar> = ({ list, tab }) => {
  return (
    <div className="h-full bg-white">
      <h1 className="text-center mt-14 text-[42px] font-semibold">
        Task.
        <span className="text-primary-orange-100">IO</span>
      </h1>

      <div className="px-16 mt-16">
        {list.map((item, index) => {
          const isActive = item.title === tab;

          const styleActive = isActive
            ? 'bg-primary-orange-50 text-primary-orange-100 font-semibold'
            : 'cursor-not-allowed';

          const menuStyle = [
            'pl-4 mb-6 cursor-pointer flex items-center text-primary-gray-300 py-4 rounded-md',
            styleActive
          ].join(' ');

          return (
            <div key={index} className={menuStyle}>
              {item.icon}
              <p className="ml-4">{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
