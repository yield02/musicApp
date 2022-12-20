import Search from '~/layout/DefaultLayout/components/Search';
import Button from '~/component/Button';
import Image from '~/component/Image';
import Menu from '~/component/Popper/Menu';
import styles from './Header.module.scss';

import classNames from 'classnames/bind';
import { ClothesIconColor } from '~/component/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowRightFromBracket,
    faArrowUpFromBracket,
    faBan,
    faCheck,
    faChevronLeft,
    faChevronRight,
    faCircleInfo,
    faCirclePlay,
    faFileLines,
    faGear,
    faGem,
    faPhone,
    faRectangleAd,
    faShieldHalved,
    faSquareH,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

const settingItem = [
    {
        leftIcon: <FontAwesomeIcon icon={faBan}></FontAwesomeIcon>,
        title: 'Danh sách chặn',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faSquareH}></FontAwesomeIcon>,
        title: 'Chất lượng nhạc',
        placement: 'left-start',
        child: [
            {
                rightIcon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
                title: 'SQ * 128',
                subtitle: 'Giảm sử dụng dữ liệu cho các kết nối chậm hơn',
            },
            {
                rightIcon: <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>,
                title: 'HQ * 320',
                subtitle: 'Kết hợp tốt nhất với việc sử dụng dữ liệu và chất lượng âm thanh',
            },
        ],
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        title: 'Giao diện',
        placement: 'left-start',
        child: [
            {
                rightIcon: 'switchIcon',
                title: 'Luôn phát nhạc toàn màn hình',
            },
            {
                rightIcon: 'switchIcon',
                title: 'Hiệu ứng',
            },
        ],
    },
    {
        leftIcon: <FontAwesomeIcon icon={faCircleInfo}></FontAwesomeIcon>,
        title: 'Giới thiệu',
        borderTop: true,
    },
    {
        leftIcon: <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>,
        title: 'Liên hệ',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faRectangleAd}></FontAwesomeIcon>,
        title: 'Quảng cáo',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faFileLines}></FontAwesomeIcon>,
        title: 'Thỏa thuận sử dụng',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faShieldHalved}></FontAwesomeIcon>,
        title: 'Chính sách bảo mật',
        // borderTop: true,
    },
];

const avatar = [
    {
        leftIcon: <FontAwesomeIcon icon={faGem} />,
        title: 'Nâng Cấp VIP',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faGem} />,
        title: 'Mua Code VIP',
    },
    {
        leftIcon: <FontAwesomeIcon icon={faArrowRightFromBracket} />,
        title: 'Đăng xuất',
        borderTop: true,
    },
];

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header-container')}>
            <div className={cx('left_container')}>
                <Button
                    className={cx('action-btn')}
                    primary
                    disabled
                    leftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                />
                <Button
                    className={cx('action-btn')}
                    primary
                    disabled
                    leftIcon={<FontAwesomeIcon icon={faChevronRight} />}
                />
                <Search className={cx('Search-box')} />
            </div>
            <div className={cx('right_container')}>
                <Tippy content="Chủ đề" placement="bottom">
                    <Button className={cx('action-btn')} round leftIcon={<ClothesIconColor></ClothesIconColor>} />
                </Tippy>
                <Tippy content="Nâng cấp vip" placement="bottom">
                    <Button className={cx('action-btn')} round leftIcon={<FontAwesomeIcon icon={faGem} />}></Button>
                </Tippy>
                <Tippy content="Tải lên" placement="bottom">
                    <Button
                        className={cx('action-btn')}
                        round
                        leftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
                    ></Button>
                </Tippy>
                <Menu key={0} data={settingItem}>
                    <Button className={cx('action-btn')} round leftIcon={<FontAwesomeIcon icon={faGear} />}></Button>
                </Menu>
                <Menu key={1} data={avatar}>
                    <Image
                        className={cx('avatar')}
                        src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/273111333_2180786728742326_4129928184771592829_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DHV1XKOUzRQAX-SCewr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCJdE-mV_9AcJmlHLvyI2JH-SXpLixLnj8fryqxBbpW3A&oe=6395ABE3"
                    ></Image>
                </Menu>
            </div>
        </div>
    );
}

export default Header;
