import classNames from 'classnames/bind';
import styles from './Search.module.scss';

import HeadedlessTippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faXmark, faArrowTrendUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import SuggestItem from '../SuggestItem';

const cx = classNames.bind(styles);

function Search({ className }) {
    const [isSearch, setIsSearch] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const classes = cx('wrapper', { isSearch });

    const clearSearchValue = (e) => {
        setSearchValue('');
    };

    return (
        <HeadedlessTippy
            visible={isSearch}
            onShow={({ popper, reference }) => {
                popper.style.width = reference.getBoundingClientRect().width + 'px';
            }}
            render={(attrs) => (
                <div className={cx('search-result')} {...attrs}>
                    {!searchValue && (
                        <>
                            <h3 className={cx('search-title')}>Đề xuất cho bạn</h3>
                            <SuggestItem Icons={<FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>}>
                                ngủ một mình
                            </SuggestItem>
                            <SuggestItem Icons={<FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>}>
                                tất cả đứng im
                            </SuggestItem>
                            <SuggestItem Icons={<FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>}>
                                hạnh phúc chẳng
                            </SuggestItem>
                            <SuggestItem Icons={<FontAwesomeIcon icon={faArrowTrendUp}></FontAwesomeIcon>}>
                                karaoke
                            </SuggestItem>
                        </>
                    )}
                    {!!searchValue && <h3 className={cx('search-title')}>Từ khóa liên quan</h3>}
                </div>
            )}
            onClickOutside={() => {
                setIsSearch(false);
            }}
        >
            <div className={classes}>
                <div className={cx('search-icon')}>
                    <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                </div>
                <input
                    type="text"
                    value={searchValue}
                    className={cx('search_input', className)}
                    placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
                    onFocus={() => {
                        setIsSearch(true);
                    }}
                    onChange={(e) => {
                        setSearchValue(e.target.value);
                    }}
                />
                {!!searchValue && isSearch && (
                    <div className={cx('close-icon')} onClick={clearSearchValue}>
                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                    </div>
                )}
            </div>
        </HeadedlessTippy>
    );
}

export default Search;
