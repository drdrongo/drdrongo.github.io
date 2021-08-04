import React, { useMemo, useEffect } from 'react';
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

const drumSounds = [
    { name: 'boom', sound: boom, key: 'a'},
    { name: 'clap', sound: clap, key: 's'},
    { name: 'hihat', sound: hihat, key: 'd'},
    { name: 'kick', sound: kick, key: 'f'},
    { name: 'openhat', sound: openhat, key: 'g'},
    { name: 'ride', sound: ride, key: 'h'},
    { name: 'snare', sound: snare, key: 'j'},
    { name: 'tink', sound: tink, key: 'k'},
    { name: 'tom', sound: tom, key: 'l'}
];

const play = audio => {
    audio.pause();
    audio.currentTime = 0;
    audio.play();      
};

const DrumMachine = () => {
    useEffect(() => {
        const playOnKeyDown = e => {
            const { sound } = drumSounds.find(ds => ds.key === e.key);
            play(new Audio(sound));
            
        };
        document.addEventListener('keydown', playOnKeyDown);
        return () => document.removeEventListener('onkeydown', playOnKeyDown);
    }, []);

    const drumButtons = useMemo(() => (
        drumSounds.map(({ name, sound, key }) => (
            <button
                className="drum-button"
                key={name}
                onClick={() => play(new Audio(sound))}
            >
                <span className="drum-key">{key}</span>
                <span className="drum-name">{name}</span>
            </button>
        ))
    ), []);
    return (
        <div className="DrumMachine-outer">
            {drumButtons}
        </div>
    );
};

export default DrumMachine;
