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
            LeftIcon,
            RightIcon,
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
        return (
            <Comp className={classes} {...props} ref={ref}>
                {LeftIcon && <span className={cx('icons')}>{LeftIcon}</span>}
                {children}
                {RightIcon && <span className={cx('icons')}>{RightIcon}</span>}
            </Comp>
        );
    },
);

export default Button;
