import styles from './SideBarItem.module.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function SideBarItem({ children, to }) {
    return (
        <NavLink className={(nav) => cx('SideBarItem', { active: nav.isActive })} to={to}>
            {children}
        </NavLink>
    );
}

export default SideBarItem;
