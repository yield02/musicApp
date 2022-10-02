import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function SideBar() {
    return (
        <div className={cx('nav_container')}>
            <h1>SideBar JS</h1>
        </div>
    );
}

export default SideBar;
