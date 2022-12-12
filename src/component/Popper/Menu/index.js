import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import Wrapper from '..';
import styles from './Menu.module.scss';
import MenuItem from './MenuItem';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Menu({ children, data = [], hideOnClick = false, offset = [12, 8], className, placement = 'bottom-end' }) {
    const [mount, setMount] = useState(false);
    const renderData = (data) => {
        return data.map((item, index) => {
            return item.borderTop ? (
                <div className={cx('last-container')} key={index}>
                    <MenuItem
                        key={index}
                        subtitle={item.subtitle}
                        leftIcon={item.leftIcon}
                        rightIcon={item.rightIcon}
                        placement={item.placement}
                        data={item.child}
                        className={cx('btn')}
                    >
                        {item.title}
                    </MenuItem>
                </div>
            ) : (
                <MenuItem
                    className={cx('btn')}
                    key={index}
                    subtitle={item.subtitle}
                    placement={item.placement}
                    data={item.child}
                    rightIcon={item.rightIcon}
                    leftIcon={item.leftIcon}
                >
                    {item.title}
                </MenuItem>
            );
        });
    };

    const renderResult = (attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <Wrapper className={cx('menu-popper', className)}>{renderData(data)}</Wrapper>
        </div>
    );

    return (
        <div>
            <Tippy
                interactive
                visible={mount}
                delay={[0, 500]}
                offset={offset}
                placement={placement}
                render={renderResult}
                onClickOutside={() => {
                    setMount(false);
                }}
            >
                <div
                    onClick={() => {
                        setMount(true);
                    }}
                >
                    {children}
                </div>
            </Tippy>
        </div>
    );
}
export default Menu;
