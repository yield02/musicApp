import Header from './components/Header';
import PlayerControls from './components/PlayerControls';
import SideBar from './components/SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [playerControls, setPlayerControls] = useState(true);

    return (
        <div className={cx('default-container')}>
            <Header />
            <div className={cx('container')}>
                <SideBar playerControls={playerControls} />
                <div className={cx('zm-box')}>{children}</div>
            </div>
            {playerControls && <PlayerControls />}
        </div>
    );
}

export default DefaultLayout;
