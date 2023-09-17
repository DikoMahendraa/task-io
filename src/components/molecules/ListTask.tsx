import React from 'react';
import Card from '@/src/components/atoms/Card';

interface ListTaskProps {
  onCreateTask: () => void;
  data: {
    todo: Array<any>;
    inProgress: Array<any>;
    done: Array<any>;
  };
}

const ListTask: React.FC<ListTaskProps> = ({ onCreateTask, data }) => {
  return (
    <div className="grid grid-cols-3 mt-8 space-x-6">
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        {data.todo.length > 1 ? (
          data.todo.map((item, index) => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              {...(index % 3 === 0 && { image: '/images/img-dummy-task.png' })}
              description="Fixing bug on layout, when user clicked or scroll layout from main page."
              categories={['published', 'UI Layout']}
              key={item}
            />
          ))
        ) : (
          <Card
            isEmpty={true}
            actButton
            onCreateTask={onCreateTask}
            title="There are no assignments available yet"
          />
        )}
      </div>
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        {data.inProgress.length > 1 ? (
          data.inProgress.map((item, index) => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              {...(index % 1 === 0 && { image: '/images/img-dummy-task.png' })}
              description="Fixing bug on layout, when user clicked or scroll layout from main page."
              categories={['published', 'UI Layout']}
              key={item}
            />
          ))
        ) : (
          <Card isEmpty={true} title="There are no assignments available yet" />
        )}
      </div>
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        {data.done.length > 1 ? (
          data.done.map((item, index) => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              {...(index % 2 === 0 && { image: '/images/img-dummy-task.png' })}
              description="Fixing bug on layout, when user clicked or scroll layout from main page."
              categories={['published', 'UI Layout']}
              key={item}
            />
          ))
        ) : (
          <Card isEmpty={true} title="There are no assignments available yet" />
        )}
      </div>
    </div>
  );
};

export default ListTask;
