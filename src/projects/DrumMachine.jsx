import React, { useMemo, useEffect, useCallback, useState, useRef } from 'react';
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
import background from 'assets/images/view-from-stage.jpeg';

import DrumKit from 'components/DrumKit';

const DrumMachine = () => {
    const drumSounds = useMemo(() => [
        { name: 'boom', sound: new Audio(boom), key: 'a'},
        { name: 'clap', sound: new Audio(clap), key: 's'},
        { name: 'hihat', sound: new Audio(hihat), key: 'd'},
        { name: 'kick', sound: new Audio(kick), key: 'f'},
        { name: 'open-hat', sound: new Audio(openhat), key: 'g'},
        { name: 'ride', sound: new Audio(ride), key: 'h'},
        { name: 'snare', sound: new Audio(snare), key: 'j'},
        { name: 'tink', sound: new Audio(tink), key: 'k'},
        { name: 'tom', sound: new Audio(tom), key: 'l'}
    ], []);
    
    const play = useCallback(audio => {
        if (!audio) return;

        audio.pause();
        audio.currentTime = 0;
        audio.play();    
    }, []);

    // useEffect(() => {
    //     const keys = drumSounds.map(ds => ds.key);
    //     const playOnKeyDown = e => {
    //         const { sound } = drumSounds.find(ds => ds.key === e.key.toLowerCase());
    //         play(sound);
    //     };

    //     const onKeyDown = e => {
    //         if (e.repeat || !keys.includes(e.key.toLowerCase())) return;

    //         playOnKeyDown(e);
    //         document.getElementById(`${e.key.toLowerCase()}-key`).classList.add('pressed');
    //     };
    //     const onKeyUp = e => {
    //         if (e.repeat || !keys.includes(e.key.toLowerCase())) return;

    //         document.getElementById(`${e.key.toLowerCase()}-key`).classList.remove('pressed');
    //     };
        
    //     document.addEventListener('keydown', onKeyDown);
    //     document.addEventListener('keyup', onKeyUp);

    //     return () => {
    //         document.removeEventListener('keydown', onKeyDown);
    //         document.removeEventListener('keyup', onKeyUp);
    //     };
    // }, [drumSounds, play]);


    const drumContainer = useRef(null);
    const [containerWidth, setContainerWidth] = useState(window.innerWidth * 0.9);

    // useEffect(() => {
    //     window.addEventListener('resize', () => {
    //         console.log("resizing!", drumContainer.current.offsetWidth)
    //         setContainerWidth(drumContainer.current.offsetWidth * .9);
    //     });
    // }, []);

    // const drumButtons = useMemo(() => {
    //     const startAngle = (Math.PI / drumSounds.length),
    //           radius = 260,
    //           offset = containerWidth / 2;

    //     let angle = startAngle + 5.8;
    //     return drumSounds.map(({ name, sound, key }) => {
    //         angle += startAngle;
    //         return (
    //             <button
    //                 id={`${key}-key`}
    //                 className={`drum-button`}
    //                 style={{
    //                     position: 'absolute',
    //                     right: radius * Math.cos( angle ) + offset + "px",
    //                     bottom: (radius * Math.sin( angle ) + 120) + "px"
    //                 }}
    //                 key={name}
    //                 onMouseDown={e => {
    //                     play(sound);
    //                     e.currentTarget.classList.add('pressed');
    //                 }}
    //                 onMouseUp={e => e.currentTarget.classList.remove('pressed')}
    //                 onMouseOut={e => e.currentTarget.classList.remove('pressed')}
    //             >
    //                 <span className="drum-key">{key}</span>
    //                 <span className="drum-name">{name}</span>
    //             </button>


                





    //         );
    //     }
    // )}, [containerWidth, drumSounds, play]);


    return (
        <div
            className="DrumMachine-outer"
            ref={drumContainer}
            style={{backgroundColor: 'rgba(140,140,200,0.2)'}}
            // style={{ backgroundImage: `url(${background})` }}
        >
        {/* //     <div
        //         style={{
        //             position: 'relative',
        //             width: containerWidth,
        //             height: '100%',
        //             border: '1px solid red'
        //         }}
        //     >
        //         {drumButtons}
        //     </div> */}

            <DrumKit/>
        </div>
    );
};

export default DrumMachine;
