'use client';

import React from 'react';

import Header from '@/src/components/molecules/Header';
import HeaderToDo from '@/src/components/atoms/HeaderToDo';
import ListTask from '@/src/components/molecules/ListTask';
import HeaderBreadCrumb from '@/src/components/molecules/HeaderBreadCrumb';

export default function ToDo() {
  return (
    <>
      <Header />
      <HeaderBreadCrumb />
      <HeaderToDo />
      <ListTask />
    </>
  );
}
