import styles from './SideBarItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SideBarItem({ children, to, borderTop }) {
    return (
        <NavLink className={(nav) => cx('SideBarItem', { active: nav.isActive, borderTop })} to={to}>
            <div className={cx('chil')}>{children}</div>
        </NavLink>
    );
}

export default SideBarItem;
