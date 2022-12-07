import styles from './SuggestItem.module.scss';
import classNames from 'classnames/bind';
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function SuggestItem({ Icons, children }) {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('icons')}>{Icons}</span>
            <h4 className={cx('title')}>{children}</h4>
        </div>
    );
}

export default SuggestItem;
