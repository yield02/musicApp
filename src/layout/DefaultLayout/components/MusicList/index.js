import styles from './MusicList.module.scss';
import classNames from 'classnames/bind';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis, faL, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const cx = classNames.bind(styles);

function MusicList() {
    const [isList, setIsList] = useState(true);
    return (
        <div className={cx('musicListContainer')}>
            <div className={cx('header')}>
                <div className={cx('button-wapper')}>
                    <Button
                        className={cx('list-btn', { active: isList })}
                        onClick={() => {
                            setIsList(true);
                        }}
                    >
                        Danh sách phát
                    </Button>
                    <Button
                        className={cx('list-btn', { active: !isList })}
                        onClick={() => {
                            setIsList(false);
                        }}
                    >
                        Nghe gần đây
                    </Button>
                </div>
                <Button className={cx('action-btn')}>
                    <FontAwesomeIcon round icon={faStopwatch}></FontAwesomeIcon>
                </Button>
                <Button className={cx('action-btn')}>
                    <FontAwesomeIcon round icon={faEllipsis}></FontAwesomeIcon>
                </Button>
            </div>
            <div className={cx('list')}></div>
        </div>
    );
}

export default MusicList;
