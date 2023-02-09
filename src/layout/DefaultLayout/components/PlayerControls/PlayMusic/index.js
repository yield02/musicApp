import classNames from 'classnames/bind';
import styles from './PlayMusic.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay, faCirclePause } from '@fortawesome/free-regular-svg-icons';
import { faBackwardStep, faForwardStep, faShuffle, faRepeat, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Button from '~/component/Button';
import { useEffect, useRef, useState } from 'react';

const cx = classNames.bind(styles);

function PlayMusic({ Music, setIndexMusic, indexMusic, listMusicLenght, volume, isMute }) {
    const musicUpdate = useRef();
    const audio = useRef();
    const input = useRef();
    const [musicAction, setMusicAction] = useState({ played: false, repeat: false, mixed: false });
    const [duration, setDuration] = useState('00:00');
    const [currentDuration, setCurrentDuration] = useState('00:00');
    const [prevMusic, setPrevMusic] = useState([indexMusic]);
    //set isMute

    useEffect(() => {
        audio.current.muted = isMute;
    }, [isMute]);

    //set volumne
    useEffect(() => {
        audio.current.volume = volume / 100;
    }, [volume]);
    //Chỉnh nút played
    const setPlayed = (value) => {
        if (value) {
            let newMusicAction = { ...musicAction, played: value };
            setMusicAction({ ...newMusicAction });
        } else {
            let newMusicAction = { ...musicAction, played: !musicAction.played };
            setMusicAction({ ...newMusicAction });
        }
    };

    const random = (max) => {
        return Math.floor(Math.random() * max);
    };

    const nextMusicAction = (e) => {
        if (musicAction.mixed) {
            if (prevMusic.length <= listMusicLenght - 1) {
                let randomIndex = random(listMusicLenght - 1);
                while (
                    // eslint-disable-next-line no-loop-func
                    prevMusic.some((value) => value === randomIndex)
                ) {
                    randomIndex = random(listMusicLenght);
                }
                setPrevMusic([...prevMusic, randomIndex]);
                setIndexMusic(randomIndex);
            } else {
                const randomIndex = random(listMusicLenght);
                setIndexMusic(randomIndex);
                setPrevMusic([randomIndex]);
            }
        } else {
            setIndexMusic((prev) => ++prev);
        }
    };

    //Xử lý thời gian
    const handdleFormatTime = (time) => {
        let minutes = Math.floor(time / 60);
        let seconds = time - minutes * 60;
        seconds = seconds.toFixed(0);
        let endTime = `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
        return endTime;
    };

    //render duration time
    const handdleOnloadedData = () => {
        setDuration(handdleFormatTime(audio.current.duration));
    };

    //handdle nút played
    const handdlePlayedMusic = () => {
        if (musicAction.played) {
            audio.current.pause();
        } else {
            audio.current.play();
        }
        //Xử lý pause icon
        setPlayed();
    };

    //update progressbar
    const updateProgress = (e) => {
        musicUpdate.current.style.width = e.target.value + '%';
    };

    //time update progressbar
    const timeUpdate = (e) => {
        let value = (e.target.currentTime / e.target.duration) * 100;
        input.current.value = value;

        musicUpdate.current.style.width = value + '%';
        setCurrentDuration(handdleFormatTime(e.target.currentTime));
        updateProgress(e);
    };

    //handdleRepeatOnClick

    const repeatOnClick = (e) => {
        if (musicAction.repeat === true) {
            setMusicAction((prev) => ({ ...prev, repeat: 'one' }));
        } else if (musicAction.repeat === 'one') {
            setMusicAction((prev) => ({ ...prev, repeat: false }));
        } else {
            setMusicAction((prev) => ({ ...prev, repeat: true }));
        }
    };
    //handdle mixedOnClick

    const mixedOnClick = (e) => {
        setMusicAction((prev) => ({ ...prev, mixed: !prev.mixed }));
    };

    //handdle input progressbar
    const handdleOnInput = (e) => {
        const current = (e.target.value * audio.current.duration) / 100;
        audio.current.currentTime = current;
    };

    //handdle onEnded

    const handdleOnEnded = () => {
        if (musicAction.repeat === false && musicAction.mixed) {
            if (prevMusic.length <= listMusicLenght - 1) {
                let randomIndex = random(listMusicLenght - 1);
                while (
                    // eslint-disable-next-line no-loop-func
                    prevMusic.some((value) => value === randomIndex)
                ) {
                    randomIndex = random(listMusicLenght);
                }
                setPrevMusic([...prevMusic, randomIndex]);
                setIndexMusic(randomIndex);
            } else {
                setPrevMusic([]);
                setPlayed(false);
            }
        } else if (musicAction.repeat === true && musicAction.mixed) {
            //Chưa hoàn thiện
            if (prevMusic.length <= listMusicLenght - 1) {
                let randomIndex = random(listMusicLenght - 1);
                while (
                    // eslint-disable-next-line no-loop-func
                    prevMusic.some((value) => value === randomIndex)
                ) {
                    randomIndex = random(listMusicLenght);
                }
                setPrevMusic([...prevMusic, randomIndex]);
                setIndexMusic(randomIndex);
            } else {
                const randomIndex = random(listMusicLenght);
                setIndexMusic(randomIndex);
                setPrevMusic([randomIndex]);
            }
        } else if (musicAction.repeat === false) {
            if (indexMusic < listMusicLenght - 1) {
                setIndexMusic((prev) => ++prev);
            } else {
                setPlayed(false);
            }
        } else if (musicAction.repeat === 'one') {
            audio.current.load();
        } else {
            setIndexMusic((prev) => ++prev);
        }
    };

    return (
        <>
            <div className={cx('player-control')}>
                <audio
                    src={Music.src}
                    ref={audio}
                    onLoadedData={handdleOnloadedData}
                    onTimeUpdate={timeUpdate}
                    autoPlay={musicAction.played}
                    onEnded={handdleOnEnded}
                ></audio>
                <Button className={cx('played-btn', { active: musicAction.mixed })} onClick={mixedOnClick}>
                    <FontAwesomeIcon icon={faShuffle}></FontAwesomeIcon>
                </Button>
                <Button
                    className={cx('played-btn')}
                    onClick={() => {
                        setIndexMusic((prev) => --prev);
                        audio.current.play();
                    }}
                >
                    <FontAwesomeIcon icon={faBackwardStep}></FontAwesomeIcon>
                </Button>
                <Button className={cx('play-action')} onClick={handdlePlayedMusic}>
                    {!musicAction.played && <FontAwesomeIcon icon={faCirclePlay}></FontAwesomeIcon>}
                    {musicAction.played && Music && (
                        <FontAwesomeIcon className={cx('playedBtn')} icon={faCirclePause}></FontAwesomeIcon>
                    )}
                    {!Music && <FontAwesomeIcon icon={faSpinner} className={cx('Spinner')}></FontAwesomeIcon>}
                </Button>
                <Button className={cx('played-btn')} onClick={nextMusicAction}>
                    <FontAwesomeIcon icon={faForwardStep}></FontAwesomeIcon>
                </Button>
                <Button className={cx('played-btn', { active: !!musicAction.repeat })} onClick={repeatOnClick}>
                    <FontAwesomeIcon icon={faRepeat}></FontAwesomeIcon>
                    {musicAction.repeat === 'one' && <span className={cx('repeat')}>1</span>}
                </Button>
            </div>

            <div className={cx('played-duration')}>
                <span className={cx('start-time')}>{currentDuration}</span>
                <div className={cx('process-track')}>
                    <input className={cx('played-input')} ref={input} onInput={handdleOnInput} type="range" />
                    <div className={cx('process-track-update')} ref={musicUpdate}></div>
                </div>
                <span className={cx('end-time')}>{duration || '00:00'}</span>
            </div>
        </>
    );
}

export default PlayMusic;
