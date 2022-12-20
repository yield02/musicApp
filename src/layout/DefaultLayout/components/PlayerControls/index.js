import classNames from 'classnames/bind';
import styles from './PlayerControls.module.scss';
import Image from '~/component/Image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import Button from '~/component/Button';
const cx = classNames.bind(styles);

function PlayerControls() {
    return (
        <div className={cx('player_container')}>
            <div className={cx('left')}>
                <Image
                    className={cx('media-img')}
                    src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_webp/cover/3/2/a/3/32a35f4d26ee56366397c09953f6c269.jpg"
                ></Image>
                <div className={cx('media-infor')}>
                    <h4 className={cx('media-title')}>Nhạc sóng não thư giãn </h4>
                    <span className={cx('media-subtile')}>Nhạc Không Lời</span>
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
            <div className={cx('mid')}></div>
            <div className={cx('right')}></div>
        </div>
    );
}

export default PlayerControls;
