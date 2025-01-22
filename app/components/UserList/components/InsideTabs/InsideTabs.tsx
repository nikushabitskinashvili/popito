'use client';
import React from 'react';
import { Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styles from './InsideTabs.module.scss';

const onChange = () => {};

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'List',
  },
  {
    key: '2',
    label: 'Saved',
  },
  {
    key: '3',
    label: 'Seen',
  },
  {
    key: '4',
    label: 'Liked',
  },
];

const InsideTabs: React.FC = () => (
  <div className={styles.container}>
    <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
  </div>
);

export default InsideTabs;
