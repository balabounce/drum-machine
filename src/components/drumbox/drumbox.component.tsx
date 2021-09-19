import React, {useState} from "react";
import './drumbox.styles.scss';
import KeyboardEventHandler  from 'react-keyboard-event-handler';


const Drumbox: React.FC = () => {
    const [power, powerBtn] = useState(true);
    const [bank, setBank] = useState(true);

    const changeTextArea = (text: string) => {
        const textArea: HTMLElement = document.querySelector('.area p')!;
        textArea.textContent = text;
    }

    const setVolume = (volume: number) => {
        const media = document.querySelectorAll('.clip');
        media.forEach(audioElem => {
            const audio: HTMLAudioElement = audioElem as HTMLAudioElement;
            audio.volume = volume/100;
        });
    }

    let qAudio, eAudio, wAudio, aAudio, sAudio, dAudio, zAudio, xAudio, cAudio;

    if(bank) {
        qAudio = '<audio className="clip" id="Heater-1" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"></audio>Q';
        eAudio = '<audio className="clip" id="Heater-3" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"></audio>E';
        wAudio = '<audio className="clip" id="Heater-2" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"></audio>W';
        aAudio = '<audio className="clip" id="Heater-4" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"></audio>A';
        sAudio = '<audio className="clip" id="Clap" src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"></audio>S';
        dAudio = '<audio className="clip" id="Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"></audio>D';
        zAudio = '<audio className="clip" id="Kick-n\'-Hat" src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"></audio>Z';
        xAudio = '<audio className="clip" id="Kick" src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"></audio>X';
        cAudio = '<audio className="clip" id="Closed-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"></audio>C';
    } else {
        qAudio = '<audio className="clip" id="Chord-1" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"></audio>Q';
        wAudio = '<audio className="clip" id="Chord-2" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"></audio>W';
        eAudio = '<audio className="clip" id="Chord-3" src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"></audio>E';
        aAudio = '<audio className="clip" id="Shaker" src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"></audio>A';
        sAudio = '<audio className="clip" id="Open-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"></audio>S';
        dAudio = '<audio className="clip" id="Closed-HH" src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"></audio>D';
        zAudio = '<audio className="clip" id="Punchy-Kick" src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"></audio>Z';
        xAudio = '<audio className="clip" id="Side-Stick" src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"></audio>X';
        cAudio = '<audio className="clip" id="Snare" src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"></audio>C';
    }

    const switcherBtnHandler = (id: string) => {
        if(id === '#power-switcher') {
            powerBtn(!power);
            if(power) {
                changeTextArea('');
            }
        } else if(id === '#bank-switcher') {
            setBank(!bank);
            if(!bank) {
                changeTextArea('Heater Kit');
            } else {
                changeTextArea('Smooth piano');
            }
        }
        const checkedOption: HTMLElement =  document.querySelector(id)!.querySelector('.checked')!;
        if(checkedOption.nextElementSibling && checkedOption.nextElementSibling.classList.contains('switch-box')) {
            checkedOption.nextElementSibling.classList.add('checked');
        } else if(checkedOption.previousElementSibling && checkedOption.previousElementSibling.classList.contains('switch-box')) {
            checkedOption.previousElementSibling.classList.add('checked');
        }
        checkedOption.classList.remove('checked');
    }   

    const keyHandler = (key: string) : void => {
        const elem: HTMLElement =  document.querySelector(`#${key}`)!;
        elem.click();
    }

    const clickHandler = (elem: HTMLElement) => {
        elem.classList.add('clicked');
        if(power) {
            const elemAudio:HTMLAudioElement = elem.firstElementChild! as HTMLAudioElement;
            changeTextArea(elemAudio.id);
            elemAudio.pause();
            elemAudio.currentTime = 0.0;
            elemAudio.play();
        }
        if(!power) {
            elem.classList.add('off');
        }
        setTimeout(() => {
            elem.classList.remove('clicked');
            elem.classList.remove('off');
        }, 100);
        elem.blur();
    }

    return (
        <section >
            <KeyboardEventHandler   
                handleKeys={['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']}
                onKeyEvent={(key, e) => {keyHandler(key)}} />
            <div className="container">
                <div className='drumbox'>
                    <div className="buttons">
                        <button id='Q' onClick={() => clickHandler(document.querySelector('#Q')!)} dangerouslySetInnerHTML={{__html: qAudio}}></button>
                        <button id='W' onClick={() => clickHandler(document.querySelector('#W')!)} dangerouslySetInnerHTML={{__html: wAudio}}></button>
                        <button id='E' onClick={() => clickHandler(document.querySelector('#E')!)} dangerouslySetInnerHTML={{__html: eAudio}}></button>
                        <button id='A' onClick={() => clickHandler(document.querySelector('#A')!)} dangerouslySetInnerHTML={{__html: aAudio}}></button>
                        <button id='S' onClick={() => clickHandler(document.querySelector('#S')!)} dangerouslySetInnerHTML={{__html: sAudio}}></button>
                        <button id='D' onClick={() => clickHandler(document.querySelector('#D')!)} dangerouslySetInnerHTML={{__html: dAudio}}></button>
                        <button id='Z' onClick={() => clickHandler(document.querySelector('#Z')!)} dangerouslySetInnerHTML={{__html: zAudio}}></button>
                        <button id='X' onClick={() => clickHandler(document.querySelector('#X')!)} dangerouslySetInnerHTML={{__html: xAudio}}></button>
                        <button id='C' onClick={() => clickHandler(document.querySelector('#C')!)} dangerouslySetInnerHTML={{__html: cAudio}}></button>
                    </div>
                    <div className="settings">
                        <div className="switcher" id='power-switcher' onClick={() => switcherBtnHandler('#power-switcher')}>
                            <p>Power</p>
                            <div className="switch-container" >
                                <p>On</p>
                                <div className="switch-box checked"></div>
                                <div className="switch-box"></div>
                                <p>Off</p>
                            </div>
                        </div>
                        <div className="area"><p></p></div>
                        <input type="range" min="0" max="100" step="1" id='volume-input' onChange={() => {
                            const volume: HTMLInputElement = document.querySelector('#volume-input')!;
                            volume.blur();
                            const value = volume.value;
                            setVolume(+value);
                            changeTextArea(`Volume: ${value}`);
                        }}/> 
                        <div className="switcher" id='bank-switcher' onClick={() => switcherBtnHandler('#bank-switcher')}>
                            <p>Bank</p>
                            <div className="switch-container">
                                <p>1</p>
                                <div className="switch-box checked"></div>
                                <div className="switch-box"></div>
                                <p>2</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drumbox;