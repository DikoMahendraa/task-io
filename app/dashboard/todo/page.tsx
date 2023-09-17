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
  return (
    <React.Fragment>
      <Header />
      <HeaderBreadCrumb onCreateTask={() => setIsVisible(true)} />
      <HeaderToDo />
      <ListTask onCreateTask={() => setIsVisible(true)} />

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
