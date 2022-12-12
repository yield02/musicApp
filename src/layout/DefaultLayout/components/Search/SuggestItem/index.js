import styles from './SuggestItem.module.scss';
import classNames from 'classnames/bind';
import Image from '~/component/Image';

const cx = classNames.bind(styles);

function SuggestItem({ Icons, children, subtitle, avatarsrc, round, musiclink }) {
    return (
        <div className={cx('wrapper')}>
            {!!Icons && !!children && (
                <>
                    <span className={cx('icons')}>{Icons}</span>
                    <h4 className={cx('title')}>{children}</h4>
                </>
            )}

            {subtitle && (
                <>
                    <Image className={cx('avatar', { round })} src={avatarsrc}></Image>
                    <div className={cx('flex-container')}>
                        <a href={musiclink}>
                            <h4 className={cx('title')}>{children}</h4>
                        </a>
                        <span className={cx('subtitle')}>{subtitle}</span>
                    </div>
                </>
            )}
        </div>
    );
}

export default SuggestItem;
