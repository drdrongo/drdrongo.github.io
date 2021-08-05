import React, { useMemo, useEffect, useCallback, useState } from 'react';
import 'styles/projects/DrumMachine.scss';
import boom from 'assets/sounds/DrumMachine/boom.wav';
import clap from 'assets/sounds/DrumMachine/clap.wav';
import hihat from 'assets/sounds/DrumMachine/hihat.wav';
import kick from 'assets/sounds/DrumMachine/kick.wav';
import openhat from 'assets/sounds/DrumMachine/openhat.wav';
import ride from 'assets/sounds/DrumMachine/ride.wav';
import snare from 'assets/sounds/DrumMachine/snare.wav';
import tink from 'assets/sounds/DrumMachine/tink.wav';
import tom from 'assets/sounds/DrumMachine/tom.wav';

let pressedKeys = [];

const DrumMachine = () => {
    const drumSounds = useMemo(() => [
        { name: 'boom', sound: new Audio(boom), key: 'a'},
        { name: 'clap', sound: new Audio(clap), key: 's'},
        { name: 'hihat', sound: new Audio(hihat), key: 'd'},
        { name: 'kick', sound: new Audio(kick), key: 'f'},
        { name: 'openhat', sound: new Audio(openhat), key: 'g'},
        { name: 'ride', sound: new Audio(ride), key: 'h'},
        { name: 'snare', sound: new Audio(snare), key: 'j'},
        { name: 'tink', sound: new Audio(tink), key: 'k'},
        { name: 'tom', sound: new Audio(tom), key: 'l'}
    ], []);

    
    const play = useCallback(audio => {
        audio.pause();
        audio.currentTime = 0;
        audio.play();    
    }, []);

    const [pressed, setPressed] = useState([]);
    useEffect(() => {
        console.log('running useeffect');
        const keys = drumSounds.map(ds => ds.key);
        const playOnKeyDown = e => {
            const { sound } = drumSounds.find(ds => ds.key === e.key.toLowerCase());
            play(sound);
        };
        const onKeyDown = e => {
            if (e.repeat || !keys.includes(e.key.toLowerCase())) return;
            playOnKeyDown(e);
            pressedKeys.push(e.key.toLowerCase());
            setPressed(pressedKeys);
        };
        const onKeyUp = e => {
            pressedKeys = pressedKeys.filter(key => e.key.toLowerCase() !== key)
            setPressed(pressedKeys);
        }
        document.addEventListener('keydown', onKeyDown);
        document.addEventListener('keyup', onKeyUp);
        return () => document.removeEventListener('onkeydown', playOnKeyDown);
    }, [drumSounds, play]);

    const drumButtons = useMemo(() => (
        drumSounds.map(({ name, sound, key }) => (
            <button
                className={`drum-button ${pressed.includes(key) ? 'pressed' : ''}`}
                key={name}
                onClick={() => {
                    play(sound);
                }}
            >
                <span className="drum-key">{key}</span>
                <span className="drum-name">{name}</span>
            </button>
        ))
    ), [pressed, drumSounds, play]);
    return (
        <div className="DrumMachine-outer">
            {drumButtons}
        </div>
    );
};

export default DrumMachine;
