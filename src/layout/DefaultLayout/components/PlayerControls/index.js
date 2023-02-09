import classNames from 'classnames/bind';
import styles from './PlayerControls.module.scss';
import Image from '~/component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faRectangleList, faWindowRestore } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis, faVolumeHigh, faVolumeMute } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
import PlayMusic from './PlayMusic';
import { FollowIcon, MVMusicIcon } from '~/component/icons';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function PlayerControls({ setMountMusicList, mountMusicList, Music, indexMusic, setIndexMusic }) {
    const musicVolumeUpdate = useRef();
    const [currentMusic, setCurrentMusic] = useState(Music[0]);
    const [volume, setVolume] = useState(100);
    const [isMute, setIsMute] = useState(false);
    useEffect(() => {
        musicVolumeUpdate.current.style.width = volume + '%';
        if (indexMusic || indexMusic === 0) {
            if (indexMusic < 0) {
                setIndexMusic(Music.length - 1);
            } else if (indexMusic > Music.length - 1) {
                setIndexMusic(0);
            } else {
                setCurrentMusic(Music[indexMusic]);
            }
        }
    }, [indexMusic]);

    return (
        <div className={cx('player_container')}>
            <div className={cx('left')}>
                <Image
                    className={cx('media-img')}
                    src={
                        currentMusic.image ||
                        'https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg'
                    }
                ></Image>
                <div className={cx('media-infor')}>
                    <div className={cx('media-content')}>
                        <div className={cx('title-wrapper')}>
                            <h4 className={cx('media-title')}>{currentMusic.title}</h4>
                            <h4 className={cx('media-title')}>{currentMusic.title} </h4>
                        </div>
                    </div>
                    <span className={cx('media-subtile')}>{currentMusic.subtitle}</span>
                </div>
                <Tippy content="Thêm vào thư viện">
                    <Button className={cx('media-icon')}>
                        <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Button>
                </Tippy>
                <Tippy content="Xem thêm">
                    <Button className={cx('media-icon')}>
                        <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                    </Button>
                </Tippy>
            </div>

            <div className={cx('mid')}>
                <PlayMusic
                    Music={currentMusic}
                    setIndexMusic={setIndexMusic}
                    indexMusic={indexMusic}
                    listMusicLenght={Music.length}
                    volume={volume}
                    isMute={isMute}
                ></PlayMusic>
            </div>

            <div className={cx('right')}>
                <Button className={cx('actionBtn')}>
                    <MVMusicIcon></MVMusicIcon>
                </Button>
                <Tippy content="Xem lời bài hát">
                    <Button className={cx('actionBtn')}>
                        <FollowIcon width="1.8rem" height="1.8rem"></FollowIcon>
                    </Button>
                </Tippy>
                <Tippy content="Chế độ cửa sổ">
                    <Button className={cx('actionBtn')}>
                        <FontAwesomeIcon icon={faWindowRestore}></FontAwesomeIcon>
                    </Button>
                </Tippy>
                <div className={cx('music-volume')}>
                    <Button
                        className={cx('actionBtn')}
                        onClick={() => {
                            setIsMute((prev) => !prev);
                        }}
                    >
                        {!isMute && <FontAwesomeIcon icon={faVolumeHigh}></FontAwesomeIcon>}
                        {isMute && <FontAwesomeIcon icon={faVolumeMute}></FontAwesomeIcon>}
                    </Button>
                    <div className={cx('played-volume', { isMute: isMute })}>
                        <div className={cx('process-track')}>
                            <input
                                className={cx('played-input')}
                                defaultValue={100}
                                onInput={(e) => {
                                    setIsMute((prev) => false);
                                    setVolume(e.target.value);
                                    musicVolumeUpdate.current.style.width = e.target.value + '%';
                                }}
                                type="range"
                            />
                            <div className={cx('process-track-update')} ref={musicVolumeUpdate}></div>
                        </div>
                    </div>
                    <div>
                        <span className={cx('divide')}></span>
                    </div>
                    <Button
                        className={cx('musicList-Btn', { active: mountMusicList })}
                        onClick={() => {
                            setMountMusicList((prev) => !prev);
                        }}
                    >
                        <FontAwesomeIcon icon={faRectangleList}></FontAwesomeIcon>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default PlayerControls;
