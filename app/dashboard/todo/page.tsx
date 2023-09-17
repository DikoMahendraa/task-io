'use client';

import React, { useState } from 'react';

import Header from '@/src/components/molecules/Header';
import HeaderToDo from '@/src/components/atoms/HeaderToDo';
import ListTask from '@/src/components/molecules/ListTask';
import HeaderBreadCrumb from '@/src/components/molecules/HeaderBreadCrumb';

import Modal from '@/src/components/atoms/Modal';
import CreateTask from '@/src/components/molecules/CreateTask';

export default function ToDo() {
  const [isVisible, setIsVisible] = useState(false);

  const data1: any[] = [1, 2, 3, 4, 5, 6];
  const data2: any[] = [1, 2];
  const data3: any[] = [1, 2, 3, 4];

  return (
    <React.Fragment>
      <Header />
      <HeaderBreadCrumb onCreateTask={() => setIsVisible(true)} />
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
        onCreateTask={() => setIsVisible(true)}
      />

      <Modal
        title="create task"
        onClose={() => setIsVisible(false)}
        isVisible={isVisible}
      >
        <CreateTask
          onCancel={() => setIsVisible(false)}
          onSubmit={() => setIsVisible(false)}
        />
      </Modal>
    </React.Fragment>
  );
}
