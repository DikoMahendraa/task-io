import React, { memo } from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { ICCalender } from '@/src/assets/svg';
import { useFormContext } from 'react-hook-form';

interface CreateProjectProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export interface InputFormProject {
  project_name: string;
  description: string;
  start_date: string;
  end_date: string;
}

const CreateProject: React.FC<CreateProjectProps> = ({
  onSubmit,
  onCancel
}) => {
  const { register } = useFormContext<InputFormProject>();

  return (
    <div className="flex justify-center items-center">
      <div className="bg-primary-white min-w-[30rem] p-4 rounded-md">
        <div className="flex-col space-y-4">
          <TextField
            label="Your Project"
            placeholder="Ex.  Financial Planner"
            register={{
              ...register('project_name')
            }}
          />
          <TextField
            register={{
              ...register('description')
            }}
            label="Description"
            placeholder="Ex. manage your money"
          />
          <TextField
            variant="suffix"
            type="date"
            register={{
              ...register('start_date')
            }}
            suffix={<ICCalender />}
            label="Start Date"
            placeholder="15, May 2023"
          />
          <TextField
            register={{
              ...register('end_date')
            }}
            variant="suffix"
            type="date"
            suffix={<ICCalender />}
            label="End Date"
            placeholder="17, Agustus 2023"
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

export default memo(CreateProject);
