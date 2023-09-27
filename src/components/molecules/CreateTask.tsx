import React, { memo } from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { ICCalender } from '@/src/assets/svg';
import { useFormContext } from 'react-hook-form';

export interface InputFormTask {
  date_task: string;
  task_name: string;
  description: string;
  category: string;
}

interface CreateTaskProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onSubmit, onCancel }) => {
  const { register } = useFormContext<InputFormTask>();

  return (
    <div className="flex justify-center items-center">
      <div className="bg-primary-white min-w-[30rem] p-4 rounded-md">
        <div className="flex-col space-y-4">
          <TextField
            register={{
              ...register('task_name', {
                required: 'project name is required'
              })
            }}
            label="Your Project"
            placeholder="Ex.  Financial Planner"
          />
          <TextField
            register={{
              ...register('description')
            }}
            label="Description"
            placeholder="Ex. manage your money"
          />
          <TextField
            register={{
              ...register('date_task')
            }}
            variant="suffix"
            type="date"
            suffix={<ICCalender />}
            label="Start Date"
            placeholder="15, May 2023"
          />
          <TextField
            register={{
              ...register('category')
            }}
            label="Category"
            placeholder="Ex. Development"
          />
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <Button onClick={onCancel} color="gray">
            Cancel
          </Button>
          <Button onClick={onSubmit} color="orange" variant="outline">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(CreateTask);
