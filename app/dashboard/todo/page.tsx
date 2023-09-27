'use client';

import React, { useState } from 'react';

import Header from '@/src/components/molecules/Header';
import HeaderToDo from '@/src/components/atoms/HeaderToDo';
import ListTask from '@/src/components/molecules/ListTask';
import HeaderBreadCrumb from '@/src/components/molecules/HeaderBreadCrumb';

import Modal from '@/src/components/atoms/Modal';
import CreateTask, {
  InputFormTask
} from '@/src/components/molecules/CreateTask';
import { FormProvider, useForm } from 'react-hook-form';
import EmptyProject from '@/src/components/molecules/EmptyProject';
import CreateProject, {
  InputFormProject
} from '@/src/components/molecules/CreateProject';

export default function ToDo() {
  const [isVisible, setIsVisible] = useState({
    project: false,
    task: false
  });

  const isProjectEmpty = true;

  const methods = useForm<InputFormTask | InputFormProject>();
  const openModal = isVisible.project || isVisible.task;
  const labelModal = isVisible.project ? 'Create Project' : 'Create Task';

  const data1: any[] = [];
  const data2: any[] = [];
  const data3: any[] = [];

  const onSubmit = (data: InputFormTask | InputFormProject) => {};

  const onOpenModal = (type: 'project' | 'task') => {
    if (type === 'project') {
      setIsVisible({ project: true, task: false });
    } else {
      setIsVisible({ project: false, task: true });
    }
  };

  const onCloseModal = () => {
    setIsVisible({ project: false, task: false });
  };

  return (
    <React.Fragment>
      <Header />
      {!isProjectEmpty && (
        <>
          <HeaderBreadCrumb
            onCreateTask={() => setIsVisible({ task: true, project: false })}
          />
          <HeaderToDo
            length={{
              todo: data1.length,
              inProgress: data2.length,
              done: data3.length
            }}
          />
          <ListTask
            data={{
              todo: data1,
              inProgress: data2,
              done: data3
            }}
            onCreateTask={() => setIsVisible({ task: true, project: false })}
          />
        </>
      )}

      {isProjectEmpty && (
        <EmptyProject onClick={() => onOpenModal('project')} />
      )}

      <Modal title={labelModal} onClose={onCloseModal} isVisible={openModal}>
        <FormProvider {...methods}>
          {isVisible.task ? (
            <CreateTask
              onCancel={onCloseModal}
              onSubmit={methods.handleSubmit(onSubmit)}
            />
          ) : (
            <CreateProject
              onCancel={onCloseModal}
              onSubmit={methods.handleSubmit(onSubmit)}
            />
          )}
        </FormProvider>
      </Modal>
    </React.Fragment>
  );
}
