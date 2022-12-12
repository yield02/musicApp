import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);

const Button = forwardRef(
    (
        {
            children,
            onClick,
            leftIcon,
            rightIcon,
            subtitle,
            className,
            disabled = false,
            primary = false,
            round = false,
            to,
            href,
            ...passProps
        },
        ref,
    ) => {
        let Comp = 'button';

        const props = {
            onClick,
            ...passProps,
        };

        if (disabled) {
            Object.keys(props).forEach((key) => {
                if (key.startsWith('on') && typeof props[key] === 'function') delete props[key];
            });
        }

        if (to) {
            props.to = to;
            Comp = Link;
        } else if (href) {
            props.href = href;
        }

        const classes = cx('wrapper', {
            [className]: className,
            primary,
            round,
            disabled,
        });

        // console.log(rightIcon)
        return (
            <Comp className={classes} {...props} ref={ref}>
                {leftIcon && !subtitle && <span className={cx('Icon', { leftIcon: !!children })}>{leftIcon}</span>}
                {children && !subtitle && <span className={cx('children')}>{children}</span>}
                {rightIcon && !subtitle && (
                    <span className={(cx('Icon'), { leftIcon: !!children })}>
                        {rightIcon === 'switchIcon' ? (
                            <label className={cx('switch')}>
                                <input type="checkbox" />
                                <span className={cx('slider', 'round')}></span>
                            </label>
                        ) : (
                            rightIcon
                        )}
                    </span>
                )}
                {rightIcon && subtitle && !leftIcon && (
                    <div className={cx('flex-box')}>
                        <div className={cx('left')}>
                            <h4 className={cx('title')}>{children}</h4>
                            <span className={cx('sub-title')}>{subtitle}</span>
                        </div>
                        <div className={cx('right')}>{rightIcon}</div>
                    </div>
                )}
            </Comp>
        );
    },
);

export default Button;
