import styles from './SideBar.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faPenClip, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';
import Image from '~/component/Image';
import MenuItem from '~/component/Popper/Menu/MenuItem';
import {
    AlbumIconColor,
    CdIcon,
    FollowIcon,
    HistoryIconColor,
    MusicIcon,
    MusicIconColor,
    MusicUploadIconColor,
    MVMusicIcon,
    NewMusicIcon,
    PlaylistIconColor,
    RadioIcon,
    TopMusicIcon,
    TypeMusicIcon,
    ZingChartIcon,
} from '~/component/icons';
import { useState } from 'react';
import ModalBox from '~/component/ModalBox';
import Button from '~/component/Button';
import { publicRoutes } from '~/routes';
import SideBarItem from './SideBarItem';
const cx = classNames.bind(styles);

const actionBtns = [
    {
        leftIcon: <MusicIcon></MusicIcon>,
        title: 'Cá Nhân',
        to: publicRoutes[1].path,
        rightIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        rightIconHover: true,
    },
    {
        leftIcon: <CdIcon></CdIcon>,
        title: 'Khám Phá',
        to: publicRoutes[0].path,
    },
    {
        leftIcon: <ZingChartIcon></ZingChartIcon>,
        title: '#zingchart',
        rightIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        rightIconHover: true,
        to: publicRoutes[2].path,
    },
    {
        leftIcon: <RadioIcon></RadioIcon>,
        title: 'Radio',
        rightIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        rightIconHover: true,
        to: publicRoutes[3].path,
    },
    {
        leftIcon: <FollowIcon></FollowIcon>,
        title: 'Theo dõi',
        rightIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        rightIconHover: true,
        to: publicRoutes[4].path,
    },
    {
        leftIcon: <NewMusicIcon></NewMusicIcon>,
        title: 'Nhạc mới',
        borderTop: true,
        to: publicRoutes[5].path,
    },
    {
        leftIcon: <TypeMusicIcon></TypeMusicIcon>,
        title: 'Thể loại',
        to: publicRoutes[6].path,
    },
    {
        leftIcon: <TopMusicIcon></TopMusicIcon>,
        title: 'Top 100',
        to: publicRoutes[7].path,
    },
    {
        leftIcon: <MVMusicIcon></MVMusicIcon>,
        title: 'MV',
        to: publicRoutes[8].path,
    },
];

const library = [
    {
        id: 0,
        leftIcon: MusicIconColor,
        title: 'Bài hát',
        to: '#',
        rightIcon: <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>,
        rightIconHover: true,
        display: false,
    },
    { id: 1, leftIcon: PlaylistIconColor, title: 'Playlist', to: '#', display: true },
    { id: 2, leftIcon: AlbumIconColor, title: 'Album', to: '#', display: true },
    {
        id: 3,
        leftIcon: MusicUploadIconColor,
        title: 'Nhạc tải lên',
        to: '#',
        display: true,
    },
    { id: 4, leftIcon: HistoryIconColor, title: 'Gần đây', to: '#', display: true },
];

function SideBar({ playerControls }) {
    console.log({ playerControls: playerControls });
    const [moduleMount, setModuleMount] = useState(false);
    const [playListValue, setPlayListValue] = useState('');
    const [libraryValue, setLibraryValue] = useState(library);
    const [privateLibrary, setPrivateLibrary] = useState(false);
    return (
        <div className={cx('wrapper', { playerControls: playerControls })}>
            <Image
                className={cx('logo')}
                src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.18169-9/13263679_651169215037426_5666160671602828234_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=FG4gdrG_lMMAX864Q96&_nc_oc=AQl192_Cm2iBF_OP1fompYl6s0GnHgm_8lJNoTxX3-c2KJOcxUGSJmjgghuKPY4NXCpjegkOlZ4qN2mwZ-gNaG5R&_nc_ht=scontent.fsgn2-2.fna&oh=00_AfC_E0ZXW4yHkl0abA4G3SKELp3AuQXOJXe8qHba_77nyQ&oe=63BF6EED"
            ></Image>
            {actionBtns.map((item, index) => (
                <SideBarItem key={index} to={item.to}>
                    <MenuItem
                        className={cx('action-Btn')}
                        borderTop={item.borderTop}
                        active={item.active}
                        leftIconClass={'iSize17'}
                        rightIconClass={'iSize20'}
                        leftIcon={item.leftIcon}
                        rightIcon={item.rightIcon}
                        rightIconHover={item.rightIconHover}
                    >
                        {item.title}
                    </MenuItem>
                </SideBarItem>
            ))}
            <div className={cx('library')}>
                <h3 className={cx('libraryTitle')}>
                    THƯ VIỆN
                    <ModalBox
                        className={cx('playListModal')}
                        visible={privateLibrary}
                        render={(attrs) => (
                            <div className={cx('module', 'private-library')} tabIndex="-1" {...attrs}>
                                <FontAwesomeIcon
                                    className={cx('closeBtn')}
                                    onClick={() => {
                                        setPrivateLibrary(false);
                                    }}
                                    icon={faXmark}
                                ></FontAwesomeIcon>
                                <h2 className={cx('private-title')}>Thư Viện Cá Nhân</h2>
                                <span className={cx('private-subtitle')}>
                                    Bạn có thể tùy chỉnh danh sách thư viện cá nhân.
                                </span>
                                {libraryValue.map((item, index) => {
                                    return (
                                        <div
                                            className={cx('item')}
                                            key={index}
                                            onClick={(e) => {
                                                let newValue = libraryValue;
                                                newValue[index].display = !e.currentTarget.firstChild.checked;
                                                setLibraryValue([...newValue]);
                                            }}
                                        >
                                            <input
                                                className={cx('privateCheckBox')}
                                                type="checkbox"
                                                onChange={(e) => {
                                                    let newValue = libraryValue;
                                                    newValue[index].display = e.target.checked;
                                                    setLibraryValue([...newValue]);
                                                }}
                                                checked={item.display}
                                            />
                                            <Button
                                                className={cx('action-btn')}
                                                leftIcon={
                                                    <item.leftIcon width="2.4rem" height="2.4rem"></item.leftIcon>
                                                }
                                            >
                                                {item.title}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        )}
                    >
                        {/* <Tippy content="Chỉnh sửa" placement="top"> */}
                        <FontAwesomeIcon
                            className={cx('libraryTitleIcon')}
                            onClick={() => {
                                setPrivateLibrary(true);
                            }}
                            icon={faPenClip}
                        ></FontAwesomeIcon>
                        {/* </Tippy> */}
                    </ModalBox>
                </h3>
                {libraryValue.map((item, index) => {
                    return (
                        item.display && (
                            <MenuItem
                                className={cx('library-Btn')}
                                borderTop={item.borderTop}
                                active={item.active}
                                key={index}
                                leftIconClass={'iSize17'}
                                rightIconClass={'iSize20'}
                                leftIcon={<item.leftIcon></item.leftIcon>}
                                rightIcon={item.rightIcon}
                                rightIconHover={item.rightIconHover}
                                to={item.to}
                            >
                                {item.title}
                            </MenuItem>
                        )
                    );
                })}
            </div>
            <ModalBox
                className={cx('playListModal')}
                visible={moduleMount}
                render={(attrs) => (
                    <div className={cx('module')} tabIndex="-1" {...attrs}>
                        <FontAwesomeIcon
                            className={cx('closeBtn')}
                            onClick={() => {
                                setModuleMount(false);
                                setPlayListValue('');
                            }}
                            icon={faXmark}
                        ></FontAwesomeIcon>

                        <h3 className={cx('heading')}>Tạo playlist mới</h3>

                        <input
                            className={cx('playlistInput')}
                            placeholder="Nhập tên playlist"
                            value={playListValue}
                            onChange={(e) => {
                                setPlayListValue(e.target.value);
                            }}
                        />

                        <Button
                            className={cx('playListSwitch')}
                            subtitle={'Mọi người có thể nhìn thấy playlist này'}
                            rightIcon={'switchIcon'}
                        >
                            Công Khai
                        </Button>
                        <Button
                            className={cx('playListSwitch')}
                            subtitle={'Luôn phát ngẫu nhiên'}
                            rightIcon={'switchIcon'}
                        >
                            Phát ngẫu nhiên
                        </Button>
                        <Button disabled={!playListValue} type="submit" className={cx('playListBtn')}>
                            TẠO MỚI
                        </Button>
                    </div>
                )}
            >
                <div className={cx('add-play-list')}>
                    <MenuItem
                        onClick={() => {
                            setModuleMount(true);
                        }}
                        className={cx('add-play-list-button')}
                        borderTop
                        leftIcon={<FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>}
                    >
                        Tạo playlist mới
                    </MenuItem>
                </div>
            </ModalBox>
        </div>
    );
}

export default SideBar;
