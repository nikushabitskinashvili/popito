'use client'
import React, { useState } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Input, Checkbox, Menu } from 'antd';
import styles from './GenreDropDown.module.scss';
import Image from 'next/image';

const options = ['Animation', 'Horror', 'Action', 'Comedy', 'Drama'];

const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [checkedOptions, setCheckedOptions] = useState<string[]>([]);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleCheckboxChange = (checkedValue: string) => {
    setCheckedOptions((prev) =>
      prev.includes(checkedValue)
        ? prev.filter((item) => item !== checkedValue)
        : [...prev, checkedValue],
    );
  };

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const handleOpenChange = (open: boolean) => {
    setIsDropdownOpen(open);
  };

  const menu = (
    <Menu>
      <Menu.Item key="search" disabled style={{ padding: '8px' }}>
        <Input
          prefix={
            <Image
              src={'/icons/search.svg'}
              alt={'search'}
              width={16}
              height={16}
            />
          }
          placeholder="Search a genre"
          value={searchTerm}
          onChange={handleSearch}
          allowClear
        />
      </Menu.Item>
      {filteredOptions.map((option) => (
        <Menu.Item key={option} style={{ padding: '8px' }}>
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
            Genre
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
