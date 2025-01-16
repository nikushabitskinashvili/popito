'use client';
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Checkbox, Menu } from 'antd';
import styles from './MovieDropDown.module.scss';

const options = ['Movie', 'Tv Show', 'Series'];

const App: React.FC = () => {
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleCheckboxChange = (checkedValue: string) => {
    setCheckedOptions((prev) =>
      prev.includes(checkedValue)
        ? prev.filter((item) => item !== checkedValue)
        : [...prev, checkedValue],
    );
  };

  const handleOpenChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  const menu = (
    <Menu>
      {options.map((option) => (
        <Menu.Item key={option} style={{ padding: '16px' }}>
          <Checkbox
            checked={checkedOptions.includes(option)}
            onChange={() => handleCheckboxChange(option)}
          >
            {option}
          </Checkbox>
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className={styles.dropWrapper}>
      <Dropdown
        overlay={menu}
        trigger={['click']}
        open={isDropdownOpen}
        onOpenChange={handleOpenChange}
      >
        <a
          onClick={(e) => e.preventDefault()}
          className={`${styles.dropdownTrigger} ${
            isDropdownOpen ? styles.active : ''
          }`}
        >
          <Space>
            Movie
            <DownOutlined
              style={{
                transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                transition: 'transform 0.3s',
              }}
            />
          </Space>
        </a>
      </Dropdown>
    </div>
  );
};

export default App;
