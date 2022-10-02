import Header from './Header';
import PlayerControls from './PlayerControls';
import SideBar from './SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <SideBar />
                <div className={cx('zm-box')}>{children}</div>
            </div>
            <PlayerControls />
        </div>
    );
}

export default DefaultLayout;
