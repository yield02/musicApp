import Header from './components/Header';
import PlayerControls from './components/PlayerControls';
import SideBar from './components/SideBar';
import styles from './DefaultLayout.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import Music from '~/musicmp3';
import MusicList from './components/MusicList';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    const [playerControls, setPlayerControls] = useState(true);
    const [mountMusicList, setMountMusicList] = useState(false);
    const [indexMusic, setIndexMusic] = useState(0);

    console.log(mountMusicList);
    return (
        <div className={cx('default-container')}>
            <Header />
            <div className={cx('container')}>
                <SideBar playerControls={playerControls} />
                <div className={cx('zm-box', { collapsed: mountMusicList })}>{children}</div>
            </div>
            {playerControls && (
                <PlayerControls
                    mountMusicList={mountMusicList}
                    setMountMusicList={setMountMusicList}
                    Music={Music}
                    indexMusic={indexMusic}
                    setIndexMusic={setIndexMusic}
                />
            )}
            {mountMusicList && <MusicList></MusicList>}
        </div>
    );
}

export default DefaultLayout;
