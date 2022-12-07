import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import Search from '~/layout/DefaultLayout/components/Search';
import Button from '~/component/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowUpFromBracket,
    faChevronLeft,
    faChevronRight,
    faGear,
    faGem,
    faShirt,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Image from '~/component/Image';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header-container')}>
            <div className={cx('left_container')}>
                <Button
                    className={cx('action-btn')}
                    primary
                    disabled
                    LeftIcon={<FontAwesomeIcon icon={faChevronLeft} />}
                />
                <Button
                    className={cx('action-btn')}
                    primary
                    disabled
                    LeftIcon={<FontAwesomeIcon icon={faChevronRight} />}
                />
                <Search className={cx('Search-box')} />
            </div>
            <div className={cx('right_container')}>
                <Tippy content="Chủ đề" placement="bottom">
                    <Button className={cx('action-btn')} round LeftIcon={<FontAwesomeIcon icon={faShirt} />} />
                </Tippy>
                <Tippy content="Nâng cấp vip" placement="bottom">
                    <Button className={cx('action-btn')} round LeftIcon={<FontAwesomeIcon icon={faGem} />}></Button>
                </Tippy>
                <Tippy content="Tải lên" placement="bottom">
                    <Button
                        className={cx('action-btn')}
                        round
                        LeftIcon={<FontAwesomeIcon icon={faArrowUpFromBracket} />}
                    ></Button>
                </Tippy>
                <Tippy content="Cài đặt" placement="bottom">
                    <Button className={cx('action-btn')} round LeftIcon={<FontAwesomeIcon icon={faGear} />}></Button>
                </Tippy>

                <Image
                    className={cx('avatar')}
                    src="https://scontent.fsgn2-4.fna.fbcdn.net/v/t39.30808-6/273111333_2180786728742326_4129928184771592829_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=DHV1XKOUzRQAX-SCewr&_nc_ht=scontent.fsgn2-4.fna&oh=00_AfCJdE-mV_9AcJmlHLvyI2JH-SXpLixLnj8fryqxBbpW3A&oe=6395ABE3"
                ></Image>
            </div>
        </div>
    );
}

export default Header;
