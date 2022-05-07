import Header from '~/components/Layout/components/Header';
import Sidebar from './Sidebar';
import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';

// bind styles tra ra func cx
const cx = classNames.bind(styles);

const DefaultLayout = ({ children }) => {
  return (
    <div className={cx('wrapper')}>
      <Header />
      <div className={cx('container')}>
        <Sidebar />
        <div className={cx('content')}>{children}</div>
      </div>
    </div>
  );
};

export default DefaultLayout;
