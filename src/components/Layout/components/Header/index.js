import classNames from 'classnames/bind';
import React from 'react';
import images from '~/assets/images';
import styles from './Header.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

// bind styles tra ra func cx
const cx = classNames.bind(styles);

const Header = () => {
  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="" />
        </div>

        {/* search */}
        <div className={cx('search')}>
          <input placeholder="Search accounts and videos" spellCheck={false} />

          {/* icon clear input */}
          <button className={cx('clear')}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>

          {/* loading */}
          <FontAwesomeIcon icon={faSpinner} className={cx('loading')} />

          {/* button searh */}
          <button className={cx('search-btn')}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </div>
        <div className={cx('actions')}></div>
      </div>
    </header>
  );
};

export default Header;
