import React from 'react';

import Card from '@/src/components/atoms/Card';

export default function ListTask() {
  return (
    <div className="grid grid-cols-3 mt-8 space-x-6">
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          image="/images/img-dummy-task.png"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          image="/images/img-dummy-task.png"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          image="/images/img-dummy-task.png"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          image="/images/img-dummy-task.png"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
      </div>
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
      </div>
      <div className="col-span-1 overflow-y-auto max-h-screen space-y-6">
        <Card
          date="12 jan 2023"
          title="[FE] - Adjustment Layout - Homepage"
          description="Fixing bug on layout, when user clicked or scroll layout from main page."
          categories={['published', 'UI Layout']}
        />
      </div>
    </div>
  );
}
