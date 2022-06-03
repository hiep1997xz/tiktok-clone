import React from 'react';
import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';

// bind styles tra ra func cx
const cx = classNames.bind(styles);

const Sidebar = () => {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sidebar</h2>
    </aside>
  );
};

export default Sidebar;
