import React, { useEffect, useCallback, useMemo } from 'react'

const DrumKit = () => {

    const names = useMemo(() => ([
        'Anim-Hihat',
        'Anim-Ride',
        'Anim-Bass',
        'Anim-Snare',
        'Anim-FloorTom',
        'Anim-RightTom',
        'Anim-LeftTom',
    ]), []);

    const addAnimations = useCallback(() => {
        names.forEach(name => {
            document.getElementById(name).classList.add('animated');
        })
    }, [names]);

    useEffect(() => {
        addAnimations();
    }, [addAnimations]);

    return (
        <svg width="1542" height="894" viewBox="0 0 1542 894" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g id="DrumKit">
                <path id="Shadow"
                    d="M1542 807C1542 855.049 1196.81 894 771 894C345.188 894 0 855.049 0 807C0 758.951 345.188 720 771 720C1196.81 720 1542 758.951 1542 807Z"
                    fill="#1A1A1A" fill-opacity="0.3" />
                <g 
                    id="Anim-LeftTom"
                    className="animated"
                    // onClick={() => {
                    //     console.log('animating leftTom')
                    // }}
                >
                    <rect id="Rectangle 18" x="447" y="172" width="233" height="125" fill="#3595FF" stroke="black"
                        stroke-width="4" />
                    <g id="Bottom Section">
                        <rect id="Rectangle 17" x="441" y="296" width="245" height="13" rx="2" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 23" x="442" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 24" x="598" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 25" x="520" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 26" x="675" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <line id="Line 16" x1="525" y1="296" x2="525" y2="285" stroke="black" stroke-width="4" />
                        <line id="Line 17" x1="603" y1="295" x2="603" y2="286" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 28" x="443" y="304" width="241" height="3" rx="1.5" fill="#87FFFF"
                            fill-opacity="0.5" />
                    </g>
                    <g id="Top Section">
                        <rect id="Rectangle 16" x="441" y="159" width="245" height="13" rx="2" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 19" x="442" y="181" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 22" x="598" y="181" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 21" x="520" y="182" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 20" x="675" y="182" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <line id="Line 12" x1="525" y1="182" x2="525" y2="172" stroke="black" stroke-width="4" />
                        <line id="Line 13" x1="603" y1="181" x2="603" y2="172" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 27" x="443" y="167" width="241" height="3" rx="1.5" fill="#87FFFF"
                            fill-opacity="0.5" />
                    </g>
                </g>
                <g id="Anim-RightTom">
                    <rect id="Rectangle 18_2" x="837" y="172" width="233" height="125" fill="#3595FF" stroke="black"
                        stroke-width="4" />
                    <g id="Bottom Section_2">
                        <rect id="Rectangle 17_2" x="831" y="296" width="245" height="13" rx="2" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 23_2" x="832" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 24_2" x="988" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 25_2" x="910" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 26_2" x="1065" y="267" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <line id="Line 16_2" x1="915" y1="296" x2="915" y2="285" stroke="black" stroke-width="4" />
                        <line id="Line 17_2" x1="993" y1="295" x2="993" y2="286" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 28_2" x="833" y="304" width="241" height="3" rx="1.5" fill="#87FFFF"
                            fill-opacity="0.5" />
                    </g>
                    <g id="Top Section_2">
                        <rect id="Rectangle 16_2" x="831" y="159" width="245" height="13" rx="2" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 19_2" x="832" y="181" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 22_2" x="988" y="181" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 21_2" x="910" y="182" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 20_2" x="1065" y="182" width="10" height="19" rx="5" fill="white" stroke="black"
                            stroke-width="4" />
                        <line id="Line 12_2" x1="915" y1="182" x2="915" y2="172" stroke="black" stroke-width="4" />
                        <line id="Line 13_2" x1="993" y1="181" x2="993" y2="172" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 27_2" x="833" y="167" width="241" height="3" rx="1.5" fill="#87FFFF"
                            fill-opacity="0.5" />
                    </g>
                </g>
                <g id="FloorTom">
                    <g id="Anim-FloorTom">
                        <rect id="Rectangle 18_3" x="309.169" y="406.39" width="318.663" height="297.558" fill="#3595FF"
                            stroke="black" stroke-width="4" />
                        <g id="Bottom Section_3">
                            <rect id="Rectangle 17_3" x="301" y="696.26" width="335" height="35.7403" rx="2" fill="white"
                                stroke="black" stroke-width="4" />
                            <rect id="Rectangle 23_3" x="303" y="635" width="15" height="41" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 24_3" x="516" y="635" width="15" height="41" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 25_3" x="410" y="635" width="15" height="41" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 26_3" x="621" y="635" width="15" height="41" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <line id="Line 16_3" x1="416.807" y1="697.917" x2="417" y2="676.982" stroke="black"
                                stroke-width="4" />
                            <line id="Line 17_3" x1="523" y1="696.597" x2="523" y2="675.558" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 28_3" x="304.446" y="721.636" width="328.108" height="7.01299" rx="3.50649"
                                fill="#87FFFF" fill-opacity="0.5" />
                        </g>
                        <g id="Top Section_3">
                            <rect id="Rectangle 16_3" x="301" y="376" width="335" height="35.7403" rx="2" fill="white"
                                stroke="black" stroke-width="4" />
                            <rect id="Rectangle 19_3" x="302" y="429" width="15" height="40" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 22_3" x="515" y="429" width="15" height="40" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 21_3" x="409" y="431" width="15" height="40" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 20_3" x="620" y="431" width="15" height="40" rx="6" fill="white" stroke="black"
                                stroke-width="4" />
                            <line id="Line 12_3" x1="416.807" y1="432.421" x2="417" y2="413.979" stroke="black"
                                stroke-width="4" />
                            <path id="Line 13_3" d="M523 430.104V411.5" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 27_3" x="304.446" y="402.377" width="328.108" height="7.01299" rx="3.50649"
                                fill="#87FFFF" fill-opacity="0.5" />
                        </g>
                    </g>
                    <g id="Static-FloorTom">
                        <g id="Right Leg">
                            <path id="Ellipse 3"
                                d="M696 780C696 791.331 688.124 800 679 800C669.876 800 662 791.331 662 780C662 768.669 669.876 760 679 760C688.124 760 696 768.669 696 780Z"
                                fill="#878787" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 33" x="629.372" y="582.867" width="12" height="184"
                                transform="rotate(-12 629.372 582.867)" fill="white" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 34" x="614" y="522" width="28" height="66" rx="14" fill="white" stroke="black"
                                stroke-width="4" />
                        </g>
                        <g id="Left Leg">
                            <path id="Ellipse 2"
                                d="M278 782C278 793.331 270.124 802 261 802C251.876 802 244 793.331 244 782C244 770.669 251.876 762 261 762C270.124 762 278 770.669 278 782Z"
                                fill="#414141" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 31" x="297.259" y="582.763" width="12" height="184"
                                transform="rotate(12 297.259 582.763)" fill="white" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 32" x="293" y="522" width="28" height="66" rx="14" fill="white" stroke="black"
                                stroke-width="4" />
                        </g>
                        <g id="Center Leg">
                            <path id="Ellipse 1"
                                d="M486 782C486 793.331 478.124 802 469 802C459.876 802 452 793.331 452 782C452 770.669 459.876 762 469 762C478.124 762 486 770.669 486 782Z"
                                fill="#414141" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 30" x="463" y="580" width="12" height="184" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 29" x="455" y="522" width="28" height="66" rx="14" fill="white" stroke="black"
                                stroke-width="4" />
                        </g>
                    </g>
                </g>
                <g id="Snare">
                    <g id="Static-Snare">
                        <rect id="Rectangle 47" x="0.7691" y="2.8951" width="10.8198" height="115.447"
                            transform="matrix(-0.448216 0.893925 0.832766 0.553625 1003.55 517.909)" fill="white" stroke="black"
                            stroke-width="4" />
                        <rect id="Rectangle 48" x="-2.56196" y="-0.680601" width="10.8198" height="115.447"
                            transform="matrix(-0.448216 -0.893925 -0.832766 0.553625 1209.46 527.958)" fill="white"
                            stroke="black" stroke-width="4" />
                        <g id="Left Foot">
                            <path id="Rectangle 45"
                                d="M1012.19 798.636C1012.19 788.695 1020.25 780.636 1030.19 780.636H1050.19C1051.3 780.636 1052.19 781.532 1052.19 782.636V806C1052.19 807.105 1051.29 808 1050.19 808H1014.19C1013.09 808 1012.19 807.105 1012.19 806V798.636Z"
                                fill="#414141" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 33_2" x="-0.7691" y="2.8951" width="13.7055" height="61.7605"
                                transform="matrix(0.448216 0.893925 -0.832766 0.553625 1100.46 745.633)" fill="white"
                                stroke="black" stroke-width="4" />
                        </g>
                        <g id="Right Foot">
                            <path id="Rectangle 45_2"
                                d="M1197.65 798.636C1197.65 788.695 1189.59 780.636 1179.65 780.636H1159.65C1158.55 780.636 1157.65 781.532 1157.65 782.636V806C1157.65 807.105 1158.55 808 1159.65 808H1195.65C1196.76 808 1197.65 807.105 1197.65 806V798.636Z"
                                fill="#414141" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 33_3" x="0.7691" y="2.8951" width="13.7055" height="61.7605"
                                transform="matrix(-0.448216 0.893925 0.832766 0.553625 1110.07 744.258)" fill="white"
                                stroke="black" stroke-width="4" />
                            <rect id="Rectangle 29_2" width="101.419" height="1.35424" rx="0.677122"
                                transform="matrix(0.832766 -0.553625 0.448216 0.893925 1117.05 587.492)" fill="#87FFFF"
                                fill-opacity="0.5" />
                        </g>
                        <g id="Bottom Joint">
                            <path id="Ellipse 10"
                                d="M1111.9 753.304C1111.9 758.469 1108.32 762.16 1104.48 762.16C1100.63 762.16 1097.05 758.469 1097.05 753.304C1097.05 748.138 1100.63 744.447 1104.48 744.447C1108.32 744.447 1111.9 748.138 1111.9 753.304Z"
                                fill="white" stroke="black" stroke-width="4" />
                            <ellipse id="Ellipse 11" cx="1104.48" cy="753.304" rx="1.04762" ry="1.2063" fill="black" />
                        </g>
                        <g id="Top Part">
                            <path id="Rectangle 41"
                                d="M964 496.615C964 494.248 965.919 492.33 968.286 492.33C970.653 492.33 972.571 494.248 972.571 496.615V517.281H964V496.615Z"
                                fill="#AFAFAF" stroke="black" stroke-width="4" />
                            <path id="Rectangle 42"
                                d="M1237.43 496.615C1237.43 494.248 1239.35 492.33 1241.71 492.33C1244.08 492.33 1246 494.248 1246 496.615V517.281H1237.43V496.615Z"
                                fill="#AFAFAF" stroke="black" stroke-width="4" />
                            <path id="Rectangle 43"
                                d="M964 517.662H1246V522.138C1246 525.451 1243.31 528.138 1240 528.138H970C966.686 528.138 964 525.451 964 522.138V517.662Z"
                                fill="white" stroke="black" stroke-width="4" />
                            <rect id="Stem" x="1100.19" y="532.138" width="9.61905" height="214.341" fill="white" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 46" x="1093.9" y="585.215" width="22.1905" height="16.5072" rx="6" fill="white"
                                stroke="black" stroke-width="4" />
                            <rect id="Rectangle 30_2" width="101.419" height="1.35424" rx="0.677122"
                                transform="matrix(-0.832766 -0.553625 -0.448216 0.893925 1093.16 586.285)" fill="#87FFFF"
                                fill-opacity="0.5" />
                            <rect id="Rectangle 47_2" width="51.1549" height="1.73584" rx="0.867919"
                                transform="matrix(-0.832766 -0.553625 -0.448216 0.893925 1156.19 786.191)" fill="#87FFFF"
                                fill-opacity="0.5" />
                            <rect id="Rectangle 48_2" width="51.1549" height="1.92132" rx="0.960661"
                                transform="matrix(0.832766 -0.553625 0.448216 0.893925 1053.64 786.549)" fill="#87FFFF"
                                fill-opacity="0.5" />
                            <g id="Top Joint">
                                <path id="Ellipse 8"
                                    d="M1111.9 525.312C1111.9 530.478 1108.32 534.169 1104.48 534.169C1100.63 534.169 1097.05 530.478 1097.05 525.312C1097.05 520.147 1100.63 516.456 1104.48 516.456C1108.32 516.456 1111.9 520.147 1111.9 525.312Z"
                                    fill="white" stroke="black" stroke-width="4" />
                                <ellipse id="Ellipse 9" cx="1104.48" cy="525.312" rx="1.04762" ry="1.2063" fill="black" />
                            </g>
                        </g>
                    </g>
                    <g id="Anim-Snare">
                        <rect id="Rectangle 18_4" x="982.857" y="406.682" width="244.286" height="90.0917" fill="#3595FF"
                            stroke="black" stroke-width="4" />
                        <g id="Bottom Section_4">
                            <rect id="Rectangle 17_4" x="976.571" y="495.948" width="256.857" height="16.5072" rx="2"
                                fill="white" stroke="black" stroke-width="4" />
                            <line id="Line 16_4" x1="1064.76" y1="496.361" x2="1064.76" y2="472.235" stroke="black"
                                stroke-width="4" />
                            <line id="Line 17_4" x1="1146.48" y1="493.948" x2="1146.48" y2="472.235" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 29_3" x="978.762" y="506.011" width="252.476" height="3.61891" rx="1.80946"
                                fill="#87FFFF" fill-opacity="0.5" />
                        </g>
                        <g id="Top Section_4">
                            <rect id="Rectangle 16_4" x="976.571" y="391" width="256.857" height="16.5072" rx="2" fill="white"
                                stroke="black" stroke-width="4" />
                            <rect id="Rectangle 19_4" x="977.619" y="429.602" width="10.6667" height="43.0458" rx="5.33333"
                                fill="white" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 22_4" x="1141.05" y="429.602" width="10.6667" height="43.0458" rx="5.33333"
                                fill="white" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 21_4" x="1059.33" y="432.014" width="10.6667" height="41.8395" rx="5.33333"
                                fill="white" stroke="black" stroke-width="4" />
                            <rect id="Rectangle 20_4" x="1221.71" y="432.014" width="10.6667" height="41.8395" rx="5.33333"
                                fill="white" stroke="black" stroke-width="4" />
                            <path id="Line 12_4" d="M1064.67 433.03V407.095" stroke="black" stroke-width="4" />
                            <line id="Line 13_4" x1="1146.48" y1="430.014" x2="1146.48" y2="407.095" stroke="black"
                                stroke-width="4" />
                            <rect id="Rectangle 27_4" x="978.762" y="401.063" width="252.476" height="3.61891" rx="1.80946"
                                fill="#87FFFF" fill-opacity="0.5" />
                        </g>
                    </g>
                </g>
                <g id="Tom-Holders">
                    <rect id="Rectangle 59" x="696.587" y="315" width="132" height="28" rx="14" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 60" x="717.587" y="246" width="18" height="68" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 61" x="788.587" y="246" width="18" height="68" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 64" x="626.587" y="210" width="31" height="48" rx="15.5" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 65" x="862.587" y="210" width="31" height="48" rx="15.5" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 62" x="653" y="225" width="82" height="18" rx="9" fill="white" stroke="black"
                        stroke-width="6" />
                    <rect id="Rectangle 63" x="799" y="225" width="82" height="18" rx="9" fill="white" stroke="black"
                        stroke-width="6" />
                    <circle id="Ellipse 13" cx="726.587" cy="234" r="16" fill="white" stroke="black" stroke-width="6" />
                    <circle id="Ellipse 14" cx="797.587" cy="234" r="16" fill="white" stroke="black" stroke-width="6" />
                    <circle id="Ellipse 15" cx="726.587" cy="234" r="4" fill="black" />
                    <circle id="Ellipse 16" cx="797.587" cy="234" r="4" fill="black" />
                </g>
                <g id="Bass">
                    <g id="Static-Bass">
                        <g id="Bass Right Leg">
                            <path id="Ellipse 4"
                                d="M1039.59 799C1039.59 809.921 1032.03 818 1023.59 818C1015.15 818 1007.59 809.921 1007.59 799C1007.59 788.079 1015.15 780 1023.59 780C1032.03 780 1039.59 788.079 1039.59 799Z"
                                fill="#414141" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 35" x="997.471" y="599.63" width="10" height="182"
                                transform="rotate(-6 997.471 599.63)" fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 39" x="987.587" y="530" width="26" height="76" rx="5" fill="white"
                                stroke="black" stroke-width="6" />
                        </g>
                        <g id="Bass Left Leg">
                            <path id="Ellipse 5"
                                d="M514 799C514 809.921 506.439 818 498 818C489.561 818 482 809.921 482 799C482 788.079 489.561 780 498 780C506.439 780 514 788.079 514 799Z"
                                fill="#414141" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 40" x="513.908" y="598.585" width="10" height="182"
                                transform="rotate(6 513.908 598.585)" fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 38" x="500.587" y="530" width="26" height="76" rx="5" fill="white"
                                stroke="black" stroke-width="6" />
                        </g>
                    </g>
                    <g id="Anim-Bass">
                        <g id="Bass Body">
                            <circle id="Ellipse 5_2" cx="757.587" cy="566" r="237" fill="#3595FF" stroke="black"
                                stroke-width="6" />
                            <circle id="Ellipse 4_2" cx="757.587" cy="566" r="217" fill="white" stroke="black"
                                stroke-width="6" />
                            <g id="Floor Tom Clip">
                                <g id="Rectangle 35_2">
                                    <mask id="path-113-inside-1" fill="white">
                                        <rect x="997.587" y="535" width="61" height="26" rx="4"
                                            transform="rotate(90 997.587 535)" />
                                    </mask>
                                    <rect x="997.587" y="535" width="61" height="26" rx="4" transform="rotate(90 997.587 535)"
                                        fill="white" stroke="black" stroke-width="12" mask="url(#path-113-inside-1)" />
                                </g>
                                <circle id="Ellipse 6" cx="993.587" cy="565" r="13" transform="rotate(90 993.587 565)"
                                    fill="white" stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36" x="991.587" y="541" width="50" height="14"
                                    transform="rotate(90 991.587 541)" fill="white" />
                                <circle id="Ellipse 7" cx="994.587" cy="565" r="3" transform="rotate(90 994.587 565)"
                                    fill="black" />
                                <rect id="Rectangle 37" x="982.587" y="541" width="50" height="5"
                                    transform="rotate(90 982.587 541)" fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Floor Tom Clip_2">
                                <g id="Rectangle 35_3">
                                    <mask id="path-118-inside-2" fill="white">
                                        <rect width="61" height="26" rx="4" transform="matrix(0 1 1 0 516.587 535)" />
                                    </mask>
                                    <rect width="61" height="26" rx="4" transform="matrix(0 1 1 0 516.587 535)" fill="white"
                                        stroke="black" stroke-width="12" mask="url(#path-118-inside-2)" />
                                </g>
                                <circle id="Ellipse 6_2" r="13" transform="matrix(0 1 1 0 520.587 565)" fill="white"
                                    stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36_2" width="50" height="14" transform="matrix(0 1 1 0 522.587 541)"
                                    fill="white" />
                                <circle id="Ellipse 7_2" r="3" transform="matrix(0 1 1 0 519.587 565)" fill="black" />
                                <rect id="Rectangle 37_2" width="50" height="5" transform="matrix(0 1 1 0 531.587 541)"
                                    fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Floor Tom Clip_3">
                                <g id="Rectangle 35_4">
                                    <mask id="path-123-inside-3" fill="white">
                                        <rect x="849.587" y="343.392" width="61" height="26" rx="4"
                                            transform="rotate(30 849.587 343.392)" />
                                    </mask>
                                    <rect x="849.587" y="343.392" width="61" height="26" rx="4"
                                        transform="rotate(30 849.587 343.392)" fill="white" stroke="black" stroke-width="12"
                                        mask="url(#path-123-inside-3)" />
                                </g>
                                <circle id="Ellipse 6_3" cx="873.568" cy="361.856" r="13" transform="rotate(30 873.568 361.856)"
                                    fill="white" stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36_3" x="851.783" y="351.588" width="50" height="14"
                                    transform="rotate(30 851.783 351.588)" fill="white" />
                                <circle id="Ellipse 7_3" cx="874.068" cy="360.99" r="3" transform="rotate(30 874.068 360.99)"
                                    fill="black" />
                                <rect id="Rectangle 37_3" x="847.283" y="359.383" width="50" height="5"
                                    transform="rotate(30 847.283 359.383)" fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Floor Tom Clip_4">
                                <g id="Rectangle 35_5">
                                    <mask id="path-128-inside-4" fill="white">
                                        <rect x="612.587" y="372.892" width="61" height="26" rx="4"
                                            transform="rotate(-30 612.587 372.892)" />
                                    </mask>
                                    <rect x="612.587" y="372.892" width="61" height="26" rx="4"
                                        transform="rotate(-30 612.587 372.892)" fill="white" stroke="black" stroke-width="12"
                                        mask="url(#path-128-inside-4)" />
                                </g>
                                <circle id="Ellipse 6_4" cx="640.568" cy="361.356" r="13"
                                    transform="rotate(-30 640.568 361.356)" fill="white" stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36_4" x="620.783" y="375.088" width="50" height="14"
                                    transform="rotate(-30 620.783 375.088)" fill="white" />
                                <circle id="Ellipse 7_4" cx="640.068" cy="360.49" r="3" transform="rotate(-30 640.068 360.49)"
                                    fill="black" />
                                <rect id="Rectangle 37_4" x="625.283" y="382.883" width="50" height="5"
                                    transform="rotate(-30 625.283 382.883)" fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Floor Tom Clip_5">
                                <g id="Rectangle 35_6">
                                    <mask id="path-133-inside-5" fill="white">
                                        <rect x="907.415" y="755.517" width="61" height="26" rx="4"
                                            transform="rotate(150 907.415 755.517)" />
                                    </mask>
                                    <rect x="907.415" y="755.517" width="61" height="26" rx="4"
                                        transform="rotate(150 907.415 755.517)" fill="white" stroke="black" stroke-width="12"
                                        mask="url(#path-133-inside-5)" />
                                </g>
                                <circle id="Ellipse 6_5" cx="879.434" cy="767.053" r="13"
                                    transform="rotate(150 879.434 767.053)" fill="white" stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36_5" x="899.218" y="753.32" width="50" height="14"
                                    transform="rotate(150 899.218 753.32)" fill="white" />
                                <circle id="Ellipse 7_5" cx="879.934" cy="767.919" r="3" transform="rotate(150 879.934 767.919)"
                                    fill="black" />
                                <rect id="Rectangle 37_5" x="894.718" y="745.526" width="50" height="5"
                                    transform="rotate(150 894.718 745.526)" fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Floor Tom Clip_6">
                                <g id="Rectangle 35_7">
                                    <mask id="path-138-inside-6" fill="white">
                                        <rect x="662.415" y="789.017" width="61" height="26" rx="4"
                                            transform="rotate(-150 662.415 789.017)" />
                                    </mask>
                                    <rect x="662.415" y="789.017" width="61" height="26" rx="4"
                                        transform="rotate(-150 662.415 789.017)" fill="white" stroke="black" stroke-width="12"
                                        mask="url(#path-138-inside-6)" />
                                </g>
                                <circle id="Ellipse 6_6" cx="638.434" cy="770.553" r="13"
                                    transform="rotate(-150 638.434 770.553)" fill="white" stroke="black" stroke-width="6" />
                                <rect id="Rectangle 36_6" x="660.218" y="780.82" width="50" height="14"
                                    transform="rotate(-150 660.218 780.82)" fill="white" />
                                <circle id="Ellipse 7_6" cx="637.934" cy="771.419" r="3"
                                    transform="rotate(-150 637.934 771.419)" fill="black" />
                                <rect id="Rectangle 37_6" x="664.718" y="773.026" width="50" height="5"
                                    transform="rotate(-150 664.718 773.026)" fill="#87FFFF" fill-opacity="0.5" />
                            </g>
                            <g id="Pearl">
                                <path
                                    d="M699.927 462.04C704.167 462.04 707.427 462.96 709.707 464.8C712.027 466.64 713.187 469.08 713.187 472.12C713.187 473.32 713.007 474.58 712.647 475.9C711.527 479.9 709.307 482.86 705.987 484.78C702.707 486.7 698.547 487.66 693.507 487.66H687.327L685.287 494.92C685.207 495.16 685.167 495.48 685.167 495.88C685.167 496.44 685.287 496.9 685.527 497.26C685.807 497.62 686.207 498.04 686.727 498.52C687.167 498.92 687.467 499.22 687.627 499.42C687.787 499.62 687.867 499.86 687.867 500.14C687.867 500.82 687.547 501.3 686.907 501.58C686.267 501.86 685.327 502 684.087 502H669.027C667.987 502 667.207 501.82 666.687 501.46C666.167 501.06 665.987 500.52 666.147 499.84C666.227 499.48 666.387 499.2 666.627 499C666.827 498.76 667.147 498.5 667.587 498.22C668.267 497.82 668.807 497.4 669.207 496.96C669.607 496.52 669.927 495.84 670.167 494.92L677.487 469.06C677.647 468.54 677.727 468.04 677.727 467.56C677.727 467.12 677.647 466.76 677.487 466.48C677.367 466.16 677.187 465.8 676.947 465.4C676.587 464.88 676.407 464.46 676.407 464.14C676.407 464.02 676.447 463.8 676.527 463.48C676.687 462.96 677.027 462.6 677.547 462.4C678.107 462.16 678.947 462.04 680.067 462.04H699.927ZM698.367 474.82C698.807 473.34 699.027 472.04 699.027 470.92C699.027 468.6 697.947 467.44 695.787 467.44H693.087L688.827 482.26H691.467C693.147 482.26 694.507 481.74 695.547 480.7C696.627 479.62 697.567 477.66 698.367 474.82ZM728.884 469.96C733.964 469.96 737.644 470.78 739.924 472.42C742.204 474.02 743.344 476.08 743.344 478.6C743.344 479.36 743.264 480.06 743.104 480.7C742.504 483.34 740.824 485.24 738.064 486.4C735.344 487.52 732.124 488.08 728.404 488.08C726.524 488.08 724.764 487.96 723.124 487.72C723.084 489.8 723.644 491.26 724.804 492.1C725.964 492.94 727.584 493.36 729.664 493.36C730.624 493.36 731.544 493.26 732.424 493.06C733.304 492.82 734.424 492.48 735.784 492.04C736.904 491.64 737.664 491.44 738.064 491.44C738.504 491.44 738.724 491.7 738.724 492.22C738.764 493.62 738.244 495.1 737.164 496.66C736.084 498.18 734.484 499.48 732.364 500.56C730.244 501.64 727.684 502.18 724.684 502.18C720.244 502.18 716.604 501.06 713.764 498.82C710.924 496.58 709.504 493.32 709.504 489.04C709.504 487.84 709.664 486.44 709.984 484.84C710.984 479.92 713.164 476.22 716.524 473.74C719.924 471.22 724.044 469.96 728.884 469.96ZM723.544 484.12C723.704 484.16 723.924 484.18 724.204 484.18C725.884 484.18 727.164 483.4 728.044 481.84C728.924 480.28 729.344 478.54 729.304 476.62C729.264 475.5 728.944 474.94 728.344 474.94C727.904 474.94 727.384 475.3 726.784 476.02C726.184 476.7 725.584 477.74 724.984 479.14C724.424 480.54 723.944 482.2 723.544 484.12ZM763.538 470.26C768.138 470.26 771.818 471.12 774.578 472.84C777.338 474.52 778.718 477.1 778.718 480.58C778.718 481.9 778.478 483.4 777.998 485.08L775.538 493.36C775.498 493.52 775.478 493.72 775.478 493.96C775.478 494.6 775.738 494.92 776.258 494.92C776.738 494.92 777.138 494.72 777.458 494.32C777.818 493.88 778.058 493.66 778.178 493.66C778.378 493.66 778.538 493.8 778.658 494.08C778.818 494.36 778.898 494.68 778.898 495.04C778.938 496.12 778.518 497.22 777.638 498.34C776.798 499.46 775.658 500.38 774.218 501.1C772.778 501.82 771.198 502.18 769.478 502.18C767.398 502.18 765.618 501.8 764.138 501.04C762.658 500.28 761.638 499.16 761.078 497.68C759.878 499.12 758.458 500.24 756.818 501.04C755.178 501.8 753.418 502.18 751.538 502.18C749.418 502.18 747.638 501.78 746.198 500.98C744.758 500.14 743.678 499.08 742.958 497.8C742.278 496.48 741.938 495.1 741.938 493.66C741.938 493.02 741.998 492.4 742.118 491.8C742.758 489.04 744.138 486.96 746.258 485.56C748.418 484.16 750.978 483.46 753.938 483.46C757.258 483.46 760.518 483.98 763.718 485.02L765.218 481.06C765.738 479.38 765.998 478.08 765.998 477.16C765.958 476.2 765.638 475.48 765.038 475C764.438 474.52 763.518 474.28 762.278 474.28C762.518 474.92 762.638 475.58 762.638 476.26C762.638 477.74 762.078 479.02 760.958 480.1C759.838 481.18 758.238 481.72 756.158 481.72C754.198 481.72 752.658 481.3 751.538 480.46C750.458 479.58 749.918 478.5 749.918 477.22C749.918 475.22 751.038 473.56 753.278 472.24C755.518 470.92 758.938 470.26 763.538 470.26ZM760.178 488.44C759.058 488.44 758.138 488.88 757.418 489.76C756.738 490.6 756.398 491.52 756.398 492.52C756.398 493.16 756.538 493.68 756.818 494.08C757.138 494.48 757.578 494.68 758.138 494.68C758.658 494.68 759.218 494.48 759.818 494.08C760.458 493.64 760.918 493 761.198 492.16L762.458 488.62C761.778 488.5 761.018 488.44 760.178 488.44ZM810.836 470.26C813.076 470.26 814.856 470.94 816.176 472.3C817.536 473.66 818.216 475.34 818.216 477.34C818.216 478.1 818.136 478.8 817.976 479.44C817.576 481.08 816.816 482.34 815.696 483.22C814.576 484.1 813.236 484.54 811.676 484.54C810.156 484.54 808.996 484.18 808.196 483.46C807.436 482.74 806.756 481.78 806.156 480.58C805.836 479.9 805.536 479.4 805.256 479.08C804.976 478.76 804.656 478.6 804.296 478.6C803.896 478.6 803.536 478.76 803.216 479.08C802.936 479.4 802.676 479.96 802.436 480.76L797.816 495.76C797.736 495.96 797.696 496.26 797.696 496.66C797.696 497.18 797.836 497.62 798.116 497.98C798.436 498.3 798.856 498.62 799.376 498.94C799.856 499.26 800.176 499.52 800.336 499.72C800.496 499.92 800.556 500.18 800.516 500.5C800.436 501.02 800.136 501.4 799.616 501.64C799.136 501.88 798.296 502 797.096 502H781.736C780.696 502 779.956 501.84 779.516 501.52C779.036 501.16 778.856 500.7 778.976 500.14C779.136 499.66 779.556 499.24 780.236 498.88C780.836 498.56 781.336 498.18 781.736 497.74C782.136 497.3 782.476 496.6 782.756 495.64L788.096 478.3C788.176 478.1 788.216 477.82 788.216 477.46C788.216 477.02 788.116 476.68 787.916 476.44C787.756 476.2 787.476 475.9 787.076 475.54C786.676 475.22 786.396 474.94 786.236 474.7C786.076 474.46 786.056 474.14 786.176 473.74C786.416 472.82 787.676 472.02 789.956 471.34C792.236 470.62 794.616 470.26 797.096 470.26C798.736 470.26 800.096 470.64 801.176 471.4C802.256 472.12 802.956 473.16 803.276 474.52C805.196 471.68 807.716 470.26 810.836 470.26ZM834.676 457.66C836.996 457.66 838.696 458.1 839.776 458.98C840.896 459.86 841.456 461.06 841.456 462.58C841.456 463.46 841.316 464.32 841.036 465.16L831.616 495.76C831.496 496.24 831.436 496.66 831.436 497.02C831.436 497.54 831.536 497.96 831.736 498.28C831.936 498.56 832.216 498.84 832.576 499.12C832.856 499.4 833.056 499.64 833.176 499.84C833.296 500 833.316 500.22 833.236 500.5C833.036 501.02 832.636 501.4 832.036 501.64C831.436 501.88 830.516 502 829.276 502H815.596C814.556 502 813.796 501.84 813.316 501.52C812.836 501.16 812.676 500.7 812.836 500.14C812.996 499.66 813.416 499.24 814.096 498.88C814.696 498.56 815.196 498.18 815.596 497.74C815.996 497.3 816.336 496.6 816.616 495.64L825.736 465.7C825.856 465.34 825.916 465.04 825.916 464.8C825.916 464.36 825.796 464 825.556 463.72C825.356 463.44 825.076 463.16 824.716 462.88C824.316 462.56 824.016 462.28 823.816 462.04C823.656 461.8 823.636 461.48 823.756 461.08C823.996 460.16 825.256 459.36 827.536 458.68C829.816 458 832.196 457.66 834.676 457.66Z"
                                    fill="black" />
                                <path d="M667.587 508H837.496V511H667.587V508Z" fill="black" />
                            </g>
                        </g>
                    </g>
                </g>
                <g id="Ride">
                    <g id="Static-Ride">
                        <g id="Stem_2">
                            <rect id="Rectangle 49" x="271.115" y="270.758" width="10.8275" height="459.454" rx="5.41374"
                                fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 67" x="283.927" y="453.548" width="21.1987" height="13.7368" rx="6.8684"
                                fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 66" x="263.528" y="445.436" width="30.2649" height="29.183" rx="14.5915"
                                fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 68" x="1.1604" y="2.76387" width="11.1642" height="244.518" rx="5.58208"
                                transform="matrix(0.900598 0.434652 -0.320397 0.947283 346.915 44.3113)" fill="white"
                                stroke="black" stroke-width="4" />
                            <path id="Ellipse 12"
                                d="M287.993 274.799C287.993 282.999 282.484 289.022 276.394 289.022C270.304 289.022 264.795 282.999 264.795 274.799C264.795 266.599 270.304 260.576 276.394 260.576C282.484 260.576 287.993 266.599 287.993 274.799Z"
                                fill="white" stroke="black" stroke-width="4" />
                        </g>
                        <g id="Bottom">
                            <g id="Left Foot_2">
                                <path id="Rectangle 45_3"
                                    d="M156 791.461C156 781.52 164.059 773.461 174 773.461H208.245C209.35 773.461 210.245 774.356 210.245 775.461V814.267C210.245 815.372 209.35 816.267 208.245 816.267H158C156.895 816.267 156 815.372 156 814.267V791.461Z"
                                    fill="#414141" stroke="black" stroke-width="4" />
                                <rect id="Rectangle 33_4" x="-0.787791" y="3.02833" width="21.8518" height="86.5983"
                                    transform="matrix(0.405913 0.913911 -0.799809 0.600255 272.825 721.184)" fill="white"
                                    stroke="black" stroke-width="4" />
                            </g>
                            <g id="Right Foot_2">
                                <path id="Rectangle 45_4"
                                    d="M402.8 791.461C402.8 781.52 394.741 773.461 384.8 773.461H350.555C349.45 773.461 348.555 774.356 348.555 775.461V814.267C348.555 815.372 349.45 816.267 350.555 816.267H400.8C401.905 816.267 402.8 815.372 402.8 814.267V791.461Z"
                                    fill="#414141" stroke="black" stroke-width="4" />
                                <rect id="Rectangle 33_5" x="0.787791" y="3.02833" width="21.8518" height="86.5983"
                                    transform="matrix(-0.405913 0.913911 0.799809 0.600255 286.615 719.744)" fill="white"
                                    stroke="black" stroke-width="4" />
                            </g>
                            <g id="Bottom Joint_2">
                                <path id="Ellipse 10_2"
                                    d="M289.292 733.656C289.292 742.016 284.146 747.858 278.811 747.858C273.477 747.858 268.33 742.016 268.33 733.656C268.33 725.296 273.477 719.454 278.811 719.454C284.146 719.454 289.292 725.296 289.292 733.656Z"
                                    fill="white" stroke="black" stroke-width="4" />
                                <ellipse id="Ellipse 11_2" cx="278.811" cy="733.656" rx="1.38679" ry="1.80024" fill="black" />
                            </g>
                        </g>
                    </g>
                    <g id="Anim-Ride">
                        <rect id="Rectangle 52" x="1.16008" y="2.76265" width="86.2072" height="25.5262" rx="12.7631"
                            transform="matrix(0.900829 0.434173 -0.320788 0.947151 298.742 62.4069)" fill="#D7D70A"
                            stroke="black" stroke-width="4" />
                        <path id="Rectangle 51"
                            d="M171.184 41.5246C170.554 43.3859 171.478 45.5865 173.248 46.4398L486.867 197.595C488.638 198.448 490.584 197.631 491.214 195.77C494.799 185.186 489.544 172.673 479.478 167.821L195.901 31.1453C185.835 26.2936 174.769 30.9406 171.184 41.5246Z"
                            fill="#D7D70A" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 54" width="28.8672" height="7.38177"
                            transform="matrix(0.900829 0.434173 -0.320788 0.947151 329.76 70.6605)" fill="black" />
                        <rect id="Rectangle 59_2" width="28.8672" height="7.38177"
                            transform="matrix(0.900829 0.434173 -0.320788 0.947151 315.027 115.274)" fill="black" />
                        <rect id="Rectangle 58" width="67.8358" height="1.84539" rx="0.922695"
                            transform="matrix(0.900829 0.434173 -0.320788 0.947151 302.286 76.1378)" fill="#B99100"
                            fill-opacity="0.5" />
                        <rect id="Rectangle 57" width="251.137" height="1.84539" rx="0.922695"
                            transform="matrix(0.900829 0.434173 -0.320788 0.947151 216.579 61.261)" fill="#B99100"
                            fill-opacity="0.5" />
                    </g>
                </g>
                <g id="Hihat">
                    <g id="Static-Hihat">
                        <g id="Stem_3">
                            <rect id="Rectangle 49_2" x="1262.69" y="204" width="8.84848" height="548.085" rx="4.42424"
                                fill="white" stroke="black" stroke-width="6" />
                            <rect id="Rectangle 67_2" x="1272" y="494.113" width="18" height="17.495" rx="8.74752" fill="white"
                                stroke="black" stroke-width="6" />
                            <rect id="Rectangle 66_2" x="1254" y="483.897" width="26" height="35.8825" rx="13" fill="white"
                                stroke="black" stroke-width="6" />
                            <path id="Ellipse 12_2"
                                d="M1274.8 283.608C1274.8 287.339 1273.78 290.627 1272.24 292.924C1270.69 295.234 1268.76 296.359 1266.9 296.359C1265.04 296.359 1263.11 295.234 1261.56 292.924C1260.02 290.627 1259 287.339 1259 283.608C1259 279.877 1260.02 276.589 1261.56 274.292C1263.11 271.982 1265.04 270.857 1266.9 270.857C1268.76 270.857 1270.69 271.982 1272.24 274.292C1273.78 276.589 1274.8 279.877 1274.8 283.608Z"
                                fill="white" stroke="black" stroke-width="4" />
                        </g>
                        <g id="Bottom_2">
                            <g id="Left Foot_3">
                                <path id="Rectangle 45_5"
                                    d="M1161 803.378C1161 793.437 1169.06 785.378 1179 785.378H1206.4C1207.5 785.378 1208.4 786.273 1208.4 787.378V814C1208.4 815.105 1207.5 816 1206.4 816H1163C1161.9 816 1161 815.105 1161 814V803.378Z"
                                    fill="#414141" stroke="black" stroke-width="4" />
                                <rect id="Rectangle 33_6" x="-0.756148" y="2.83072" width="15.7785" height="71.5446"
                                    transform="matrix(0.468677 0.88337 -0.846751 0.53199 1264.12 746.753)" fill="white"
                                    stroke="black" stroke-width="4" />
                            </g>
                            <g id="Right Foot_3">
                                <path id="Rectangle 45_6"
                                    d="M1378.3 803.378C1378.3 793.437 1370.25 785.378 1360.3 785.378H1332.91C1331.81 785.378 1330.91 786.273 1330.91 787.378V814C1330.91 815.105 1331.81 816 1332.91 816H1376.3C1377.41 816 1378.3 815.105 1378.3 814V803.378Z"
                                    fill="#414141" stroke="black" stroke-width="4" />
                                <rect id="Rectangle 33_7" x="0.756148" y="2.83072" width="15.7785" height="71.5446"
                                    transform="matrix(-0.468677 0.88337 0.846751 0.53199 1275.89 745.417)" fill="white"
                                    stroke="black" stroke-width="4" />
                            </g>
                            <g id="Bottom Joint_3">
                                <path id="Ellipse 10_3"
                                    d="M1278.15 755.413C1278.15 761.09 1273.96 765.398 1269.13 765.398C1264.31 765.398 1260.12 761.09 1260.12 755.413C1260.12 749.737 1264.31 745.429 1269.13 745.429C1273.96 745.429 1278.15 749.737 1278.15 755.413Z"
                                    fill="white" stroke="black" stroke-width="4" />
                                <ellipse id="Ellipse 11_3" cx="1269.13" cy="755.413" rx="1.2237" ry="1.33163" fill="black" />
                            </g>
                        </g>
                    </g>
                    <g id="Anim-Hihat">
                        <rect id="Rectangle 53" x="1229.52" y="325.697" width="73.3359" height="20.4023" rx="10.2012"
                            fill="#D7D70A" stroke="black" stroke-width="4" />
                        <path id="Rectangle 50"
                            d="M1146 324.394C1146 323.188 1146.98 322.211 1148.18 322.211H1384.82C1386.02 322.211 1387 323.188 1387 324.394C1387 332.531 1380.4 339.127 1372.27 339.127H1160.73C1152.6 339.127 1146 332.531 1146 324.394Z"
                            fill="#D7D70A" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 52_2" x="1230.14" y="291.534" width="73.3359" height="18.3107" rx="9.15536"
                            fill="#D7D70A" stroke="black" stroke-width="4" />
                        <path id="Rectangle 51_2"
                            d="M1146 315.33C1146 316.536 1146.98 317.514 1148.18 317.514H1384.82C1386.02 317.514 1387 316.536 1387 315.33C1387 307.194 1380.4 300.597 1372.27 300.597H1160.73C1152.6 300.597 1146 307.194 1146 315.33Z"
                            fill="#D7D70A" stroke="black" stroke-width="4" />
                        <rect id="Rectangle 54_2" x="1254.74" y="284.653" width="24.7475" height="5.57768" fill="black" />
                        <rect id="Rectangle 55" x="1235.57" y="343.219" width="58.1566" height="1.39442" rx="0.69721"
                            fill="#B99100" fill-opacity="0.5" />
                        <rect id="Rectangle 58_2" x="1235.57" y="297.203" width="58.1566" height="1.39442" rx="0.69721"
                            fill="#B99100" fill-opacity="0.5" />
                        <rect id="Rectangle 56" x="1161.32" y="336.247" width="215.303" height="1.39442" rx="0.69721"
                            fill="#B99100" fill-opacity="0.5" />
                        <rect id="Rectangle 57_2" x="1161.32" y="315.33" width="215.303" height="1.39442" rx="0.69721"
                            fill="#B99100" fill-opacity="0.5" />
                    </g>
                </g>
            </g>
        </svg>
    )
}

export default DrumKit
