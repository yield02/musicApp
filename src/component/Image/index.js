import styles from './Image.module.scss';
import classNames from 'classnames/bind';
import { forwardRef } from 'react';

const cx = classNames.bind(styles);
const Image = forwardRef(({ src, alt, className }, ref) => {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('image', className)} src={src} alt={alt} ref={ref} />
        </div>
    );
});

export default Image;
