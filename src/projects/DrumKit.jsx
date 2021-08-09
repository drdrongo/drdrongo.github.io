import React, { useEffect, useCallback } from 'react'

import 'styles/projects/DrumKit.scss';
import DrumKitSvgs from 'components/DrumKitSvgs.jsx';

import HiHat from 'assets/sounds/DrumKit/HiHat.wav';
import Snare from 'assets/sounds/DrumKit/Snare.wav';
import Kick from 'assets/sounds/DrumKit/Kick.wav';
import Ride from 'assets/sounds/DrumKit/Ride.wav';
import TomFloor from 'assets/sounds/DrumKit/TomFloor.wav';
import TomMid from 'assets/sounds/DrumKit/TomMid.wav';
import TomHigh from 'assets/sounds/DrumKit/TomHigh.wav';

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
            const drum = document.getElementById(id);
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

    return (
        <div
            className="DrumKit-outer"
            style={{backgroundColor: 'rgba(140,140,200,0.2)'}}
        >
            <DrumKitSvgs />
        </div>
    );
};

const play = audio => {
    if (!audio) return;

    audio.pause();
    audio.currentTime = 0;
    audio.play();    
};

const drums = {
    k: {key: 'k', id: 'Anim-Hihat', audio: new Audio(HiHat)},
    s: {key: 's', id: 'Anim-Ride', audio: new Audio(Ride)},
    g: {key: 'g', id: 'Anim-Bass', audio: new Audio(Kick)},
    j: {key: 'j', id: 'Anim-Snare', audio: new Audio(Snare)},
    d: {key: 'd', id: 'Anim-FloorTom', audio: new Audio(TomFloor)},
    h: {key: 'h', id: 'Anim-RightTom', audio: new Audio(TomHigh)},
    f: {key: 'f', id: 'Anim-LeftTom', audio: new Audio(TomMid)},
};

export default DrumKit
