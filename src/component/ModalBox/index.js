import styles from './ModalBox.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);
const ModalBox = forwardRef(({ className, children, render, visible }, ref) => {
    return (
        <div className={cx('wrapper')} ref={ref}>
            {children} {visible && <div className={cx('modalBox', className)}>{render()}</div>}
        </div>
    );
});

export default ModalBox;
