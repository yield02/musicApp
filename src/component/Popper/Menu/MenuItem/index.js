import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import styles from './MenuItem.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const MenuItem = forwardRef(
    (
        {
            children,
            borderTop,
            leftIcon,
            subtitle,
            rightIcon,
            data = [],
            className,
            placement,
            leftIconClass,
            rightIconClass,
            rightIconHover,
            onClick,
            ...props
        },
        ref,
    ) => {
        return (
            <div className={cx('wrapper', { borderTop })}>
                {data.length > 0 ? (
                    <Menu data={data} offset={[0, 0]} placement={placement}>
                        <Button
                            leftIconClass={leftIconClass}
                            rightIconClass={rightIconClass}
                            leftIcon={leftIcon}
                            subtitle={subtitle}
                            rightIconHover={rightIconHover}
                            rightIcon={<FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>}
                            className={className}
                            onClick={onClick}
                            {...props}
                        >
                            {children}
                        </Button>
                    </Menu>
                ) : (
                    <Button
                        leftIconClass={leftIconClass}
                        rightIconClass={rightIconClass}
                        leftIcon={leftIcon}
                        subtitle={subtitle}
                        rightIconHover={rightIconHover}
                        rightIcon={rightIcon}
                        className={className}
                        onClick={onClick}
                        {...props}
                    >
                        {children}
                    </Button>
                )}
            </div>
        );
    },
);

export default MenuItem;
