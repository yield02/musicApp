import classNames from 'classnames/bind';
import styles from './PlayerControls.module.scss';

const cx = classNames.bind(styles);

function PlayerControls() {
    return (
        <div className={cx('player_container')}>
            <h1>test</h1>
        </div>
    );
}

export default PlayerControls;
