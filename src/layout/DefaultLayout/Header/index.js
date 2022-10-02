import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);
function Header() {
    return (
        <div className={cx('header-container')}>
            <h1>test content</h1>
        </div>
    );
}

export default Header;
