import React from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { ICCalender } from '@/src/assets/svg';

interface CreateTaskProps {
  onSubmit: () => void;
  onCancel: () => void;
}

const CreateTask: React.FC<CreateTaskProps> = ({ onSubmit, onCancel }) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-primary-white min-w-[30rem] p-4 rounded-md">
        <div className="flex-col space-y-4">
          <TextField
            label="Your Project"
            placeholder="Ex.  Financial Planner"
          />
          <TextField label="Description" placeholder="Ex. manage your money" />
          <TextField
            variant="suffix"
            type="date"
            suffix={<ICCalender />}
            label="Start Date"
            placeholder="15, May 2023"
          />
          <TextField label="Category" placeholder="Ex. Development" />
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

export default CreateTask;
