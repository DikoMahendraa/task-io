import React from 'react';
import TextField from '@/src/components/atoms/TextField';
import Button from '@/src/components/atoms/Button';
import { ICCalender } from '@/src/assets/svg';

export default function CreateProject() {
  return (
    <div className="flex justify-center items-center mt-16">
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
          <TextField
            variant="suffix"
            type="date"
            suffix={<ICCalender />}
            label="End Date"
            placeholder="17, Agustus 2023"
          />
        </div>
        <div className="flex items-center space-x-4 mt-10">
          <Button color="gray">Cancel</Button>
          <Button color="orange" variant="outline">
            Create
          </Button>
        </div>
      </div>
    </div>
  );
}
