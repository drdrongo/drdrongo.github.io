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
    const currentlyPlaying = useRef(0);
    const [renderAgain, setRenderAgain] = useState(false);

    const onKeyDown = useCallback(({e, key, drum, audio}) => {
        if (e.repeat || !drums[e.key] || e.key !== key) return;

        drum.classList.add('animating');
        play(audio);
    }, []);

    const onKeyUp = useCallback(({e, key, drum}) => {
        if (drums[e.key] && e.key === key) drum.classList.remove('animating');
    }, []);

    // Animation listeners.
    const addAnimations = useCallback(() => {
        Object.values(drums).forEach(({ id, key, audio }) => {
            console.log('id id', id)
            const drum = document.getElementById(`Anim-${id}`);
            drum.classList.add('animated');
            document.addEventListener('keydown', e => onKeyDown({e, key, drum, audio}));
            document.addEventListener('keyup', e => onKeyUp({e, key, drum}));
        });
    }, [onKeyDown, onKeyUp]);

    // Add drumkit animations on Render. Removes listeners.
    useEffect(() => {
        addAnimations();
        return () => {
            Object.values(drums).forEach(({ id, key, audio }) => {
                const drum = document.getElementById(id);
                document.removeEventListener('keydown', e => onKeyDown({e, key, drum, audio}));
                document.removeEventListener('keyup', e => onKeyUp({e, key, drum}));
            });
        };
    }, [addAnimations, onKeyDown, onKeyUp]);

    // Sequencer Button Rows
    const soundButtonRows = useMemo(() => {
        return onlySounds.map(({ id, audio }) => {
            const buttons = [];
            for (let i=0; i<8; i++) {
                buttons.push(
                    <button
                        className={`sequencer-btn sequence-${i} ${soundSlots[i].some(ss => ss.id === id) ? 'active' : ''}`}
                        id={id}
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
    }, []);

    // Sequencer: Images and Rows of sequencer btns
    const sequencer = useMemo(() => soundButtonRows.map((row, idx) => {
        const { id } = onlySounds[idx];
        return (
            <div className="sequencer-row">
                <img
                    className="sequencer-img"
                    src={images[id]}
                    alt={id}
                />
                {row}
            </div>
        );
    }), [soundButtonRows]);

    // Highlights and plays sequencer row buttons
    const intervalActions = useCallback(() => {
        const curr = currentlyPlaying.current;
        document.querySelectorAll('.sequencer-btn').forEach(btn => btn.classList.remove('glowing'));
        document.querySelectorAll(`.sequence-${curr}`).forEach(btn => {
            btn.classList.add('glowing');
            if (btn.classList.contains('active')) {
                const drumEl = document.getElementById(`Anim-${btn.id}`);
                drumEl.classList.add('animating');
                setTimeout(() => drumEl.classList.remove('animating'), 100);
            }
        });
        if (soundSlots[curr].length > 0) {
            const audios = soundSlots[curr].map(({audio}) => audio);
            audios.forEach(aud => play(aud));
        }
        currentlyPlaying.current = curr === 7 ? 0 : curr + 1;
    }, [currentlyPlaying]);

    // Custom interval to allow for changing BPM
    const playInterval = useCallback((cb, int) => {
        if (!playing) return;

        setTimeout(() => {
            cb();
            playInterval(cb, (60/bpm) * 1000);
        }, int);
    }, []);

    // BPM change button actions
    const onBpmChange = useCallback(dir => {
        if (dir === '+') {
            bpm = bpm + 5;
            setRenderAgain(!renderAgain);
        } else if (dir === '-' && bpm - 1 > 0) {
            bpm = bpm - 5;
            setRenderAgain(!renderAgain);
        }
    }, [renderAgain]);

    // Actions when "PLAY" is clicked
    const onPlayClick = useCallback(() => {
        setRenderAgain(!renderAgain);
        playing = !playing;
        playInterval(intervalActions, (60/bpm) * 1000);
    }, [renderAgain, intervalActions, playInterval]);

    return (
        <div className="drum-project-container">
            {/* --- Sequencer --- */}
            <div className="sequencer-container">
                {/* Sequencer Drums */}
                {sequencer}
                {/* Sequencer Option Buttons */}
                <div className="sequencer-options">
                    {/* Sequencer Play Button */}
                    <button
                        onClick={onPlayClick}
                        className="play-button"
                    >
                        <img
                            className="play-button-img"
                            src={playing ? imgPause : imgPlay}
                            alt='playing or pausing'
                        />
                    </button>
                    {/* Sequencer Speed Buttons */}
                    <div className="bpm-options">
                        <button onClick={() => onBpmChange('-')}>-</button>
                        <span>{bpm}</span>
                        <button onClick={() => onBpmChange('+')}>+</button>
                    </div>
                </div>
            </div>
            {/* --- DrumKit --- */}
            <div className="DrumKit-outer">
                <DrumKitSvgs />
            </div>
        </div>
    );
};

// -------- Variables --------
let bpm = 180;
let playing = false;

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

const onlySounds = Object.values(drums).map(({ id, audio, key }) => ({ id, audio, key }));

export default DrumKit
