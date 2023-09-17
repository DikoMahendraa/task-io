import React from 'react';

interface HeaderTodoProps {
  length: {
    todo: number;
    inProgress: number;
    done: number;
  };
}

const HeaderToDo: React.FC<HeaderTodoProps> = ({ length }) => {
  return (
    <div className="grid grid-cols-3 mt-8 space-x-6">
      <div className="col-span-1">
        <p className="font-bold text-black flex items-center">
          To-Do{' '}
          {!!length.todo && (
            <span className="text-[10px] ml-2 bg-white px-2 py-1 rounded-md font-semibold">
              <strong>{length.todo}</strong>
            </span>
          )}
        </p>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-black">
          In Progress{' '}
          {!!length.inProgress && (
            <span className="text-[10px] ml-2 bg-white px-2 py-1 rounded-md font-semibold">
              <strong>{length.inProgress}</strong>
            </span>
          )}
        </p>
      </div>
      <div className="col-span-1">
        <p className="font-bold text-black">
          Done{' '}
          {!!length.done && (
            <span className="text-[10px] ml-2 bg-white px-2 py-1 rounded-md font-semibold">
              <strong>{length.done}</strong>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default HeaderToDo;
