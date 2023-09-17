import React from 'react';
import Card from '@/src/components/atoms/Card';

interface ListTaskProps {
  onCreateTask: () => void;
}

const ListTask: React.FC<ListTaskProps> = ({ onCreateTask }) => {
  const data1: any[] = [];
  const data2: any[] = [];
  const data3: any[] = [];

  return (
    <div className="grid grid-cols-3 mt-8 space-x-6">
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        {data1.length > 1 ? (
          data1.map(item => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              image="/images/img-dummy-task.png"
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
        {data2.length > 1 ? (
          data2.map(item => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              image="/images/img-dummy-task.png"
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
        {data3.length > 1 ? (
          data3.map(item => (
            <Card
              date="12 jan 2023"
              title="[FE] - Adjustment Layout - Homepage"
              image="/images/img-dummy-task.png"
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
