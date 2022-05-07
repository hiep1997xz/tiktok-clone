import React from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

// bind styles tra ra func cx
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        {/* search */}
      </div>
    </header>
  );
};

export default Header;
