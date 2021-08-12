import React, { useEffect, useCallback, useState, useMemo, useRef } from 'react'

import 'styles/projects/DrumKit.scss';
import DrumKitSvgs from 'components/DrumKitSvgs.jsx';

// Sound Clips
import HiHat from 'assets/sounds/DrumKit/HiHat.wav';
import Snare from 'assets/sounds/DrumKit/Snare.wav';
import Kick from 'assets/sounds/DrumKit/Kick.wav';
import Ride from 'assets/sounds/DrumKit/Ride.wav';
import TomFloor from 'assets/sounds/DrumKit/TomFloor.wav';
import TomMid from 'assets/sounds/DrumKit/TomMid.wav';
import TomHigh from 'assets/sounds/DrumKit/TomHigh.wav';

// Images
import ImgHiHat from 'assets/images/DrumKit/HiHat.png';
import ImgSnare from 'assets/images/DrumKit/Snare.png';
import ImgKick from 'assets/images/DrumKit/Kick.png';
import ImgRide from 'assets/images/DrumKit/Ride.png';
import ImgTomFloor from 'assets/images/DrumKit/TomFloor.png';
import ImgTomMid from 'assets/images/DrumKit/TomMid.png';
import ImgTomHigh from 'assets/images/DrumKit/TomHigh.png';

import imgPlay from 'assets/images/play.png';
import imgPause from 'assets/images/pause.png';

const DrumKit = () => {
    const onKeyDown = useCallback(({e, key, drum, audio}) => {
        if (e.repeat || !drums[e.key] || e.key !== key) return;

        drum.classList.add('animating');
        play(audio);
    }, []);

    const onKeyUp = useCallback(({e, key, drum}) => {
        if (drums[e.key] && e.key === key) drum.classList.remove('animating');
    }, [])

    const addAnimations = useCallback(() => {
        Object.values(drums).forEach(({ id, key, audio }) => {
            console.log('id id', id)
            const drum = document.getElementById(`Anim-${id}`);
            drum.classList.add('animated');
            document.addEventListener('keydown', e => onKeyDown({e, key, drum, audio}));
            document.addEventListener('keyup', e => onKeyUp({e, key, drum}));
        });
    }, [onKeyDown, onKeyUp]);

    useEffect(() => {
        addAnimations();
        return () => {
            Object.values(drums).forEach(({ id, key, audio }) => {
                const drum = document.getElementById(id);
                document.removeEventListener('keydown', e => onKeyDown({e, key, drum, audio}));
                document.removeEventListener('keyup', e => onKeyUp({e, key, drum}));
            });
        }
    }, [addAnimations, onKeyDown, onKeyUp]);

    const sequencer = () => {
        const soundButtons = onlySounds.map(({id, audio}, idx) => {
            const buttons = [];
            for (let i=0; i<8; i++) {
                buttons.push(
                    <button
                        className={
                            `sequencer-btn sequence-${i} ${soundSlots[i].some(ss => ss.id === id) ? 'active' : ''}`}


                        number={i}
                        onClick={e => {
                            const active = soundSlots[i].some(ss => ss.id === id);
                            if (active) {
                                e.currentTarget.classList.remove('active');
                                soundSlots[i] = soundSlots[i].filter(ss => ss.id !== id);
                            } else {
                                e.currentTarget.classList.add('active');
                                soundSlots[i].push({id, audio});
                            }
                        }}
                    />
                );
            };
            return buttons;
        });

        return soundButtons.map((sb, idx) => {
            const drumName = onlySounds[idx].id;
            return (
            <div className="sequencer-row">
                <img
                    className="sequencer-img"
                    src={images[drumName]}
                    alt={drumName}
                />
                {sb.map(sb => sb)}
            </div>
            )
        })
    };

    const currentlyPlaying = useRef(0);

    const intervalActions = useCallback(() => {
        const curr = currentlyPlaying.current;
        document.querySelectorAll('.sequencer-btn').forEach(btn => btn.classList.remove('glowing'));
        document.querySelectorAll(`.sequence-${curr}`).forEach(btn => btn && btn.classList.add('glowing'));
        if (soundSlots[curr].length > 0) {
            const audios = soundSlots[curr].map(({audio}) => audio);
            audios.forEach(aud => play(aud));
        }
        currentlyPlaying.current = curr === 7 ? 0 : curr + 1;
    }, [currentlyPlaying]);

    const [playing, setPlaying] = useState(false);
    const toggleSequencer = useCallback(() => {
        if (playing) {
            clearInterval(window.playInterval);
            setPlaying(false);
            return;
        }

        setPlaying(true);
        window.playInterval = setInterval(intervalActions, 400);
    }, [playing, intervalActions]);

    return (
        <div className="drum-project-container">
            <div className="sequencer-container">
                {sequencer()}
                <button
                    onClick={toggleSequencer}
                    className="play-button"
                >
                    <img
                        className="play-button-img"
                        src={playing ? imgPause : imgPlay}
                        alt='playing or pausing'
                    />
                </button>
            </div>
            <div
                className="DrumKit-outer"
            >
                <DrumKitSvgs />
            </div>
        </div>
    );
};

const soundSlots = [[], [], [], [], [], [], [], []]

const play = audio => {
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play();    
};

const images = {
    HiHat: ImgHiHat,
    Snare: ImgSnare,
    Kick: ImgKick,
    Ride: ImgRide,
    TomFloor: ImgTomFloor,
    TomMid: ImgTomMid,
    TomHigh: ImgTomHigh,
};

const drums = {
    k: {key: 'k', id: 'HiHat', audio: new Audio(HiHat)},
    s: {key: 's', id: 'Ride', audio: new Audio(Ride)},
    g: {key: 'g', id: 'Kick', audio: new Audio(Kick)},
    j: {key: 'j', id: 'Snare', audio: new Audio(Snare)},
    d: {key: 'd', id: 'TomFloor', audio: new Audio(TomFloor)},
    h: {key: 'h', id: 'TomHigh', audio: new Audio(TomHigh)},
    f: {key: 'f', id: 'TomMid', audio: new Audio(TomMid)},
};

const onlySounds = Object.values(drums).map(({ id, audio }) => ({ id, audio }));

export default DrumKit
