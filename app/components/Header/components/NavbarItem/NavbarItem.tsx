import React from 'react';
import Link from 'next/link';
import styles from './NavbarItem.module.scss';
import { navbarItemProps } from '../Interface/Interface';
const NavbarItem = (props: navbarItemProps) => {
  return (
    <li>
      <Link
        href={props.pathname}
        className={`${styles.defaultLink} ${props.active ? styles.active : ''}`}
      >
        {props.title}
      </Link>
    </li>
  );
};
export default NavbarItem;
