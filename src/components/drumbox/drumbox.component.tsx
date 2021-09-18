import React, {useState} from "react";
import './drumbox.styles.scss';
import KeyboardEventHandler  from 'react-keyboard-event-handler';


const Drumbox: React.FC = () => {
    const [power, powerBtn] = useState(true);

    const powerBtnHandler = () => {
        powerBtn(!power);
        console.log(power);
    }   

    const keyHandler = (key: string) : void => {
        const elem: HTMLElement =  document.querySelector(`#${key}`)!;
        elem.click();
    }

    const clickHandler = (elem: HTMLElement) => {
        elem.classList.add('clicked');
        elem.blur();
        setTimeout(() => {
            elem.classList.remove('clicked');
        }, 100);
    }


    return (
        <section >
            <KeyboardEventHandler   
                handleKeys={['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']}
                onKeyEvent={(key, e) => {keyHandler(key)}} />
            <div className="container">
                <div className='drumbox'>
                    <div className="buttons">
                        <button id='Q' onClick={() => {clickHandler(document.querySelector('#Q')!)}}>Q</button>
                        <button id='W' onClick={() => clickHandler(document.querySelector('#W')!)}>W</button>
                        <button id='E' onClick={() => clickHandler(document.querySelector('#E')!)}>E</button>
                        <button id='A' onClick={() => clickHandler(document.querySelector('#A')!)}>A</button>
                        <button id='S' onClick={() => clickHandler(document.querySelector('#S')!)}>S</button>
                        <button id='D' onClick={() => clickHandler(document.querySelector('#D')!)}>D</button>
                        <button id='Z' onClick={() => clickHandler(document.querySelector('#Z')!)}>Z</button>
                        <button id='X' onClick={() => clickHandler(document.querySelector('#X')!)}>X</button>
                        <button id='C' onClick={() => clickHandler(document.querySelector('#C')!)}>C</button>
                    </div>
                    <div className="settings">
                        <div className="switcher" id='power-switcher' onClick={() => powerBtnHandler()}>
                            <p>Power</p>
                            <div className="switch-container" >
                                <div className="switch-box checked"></div>
                                <div className="switch-box"></div>
                            </div>
                        </div>
                        <div className="area"><p>TEXT</p></div>
                        <input type="range" min="0" max="100" step="1" /> 
                        <div className="switcher" id='bank-switcher'>
                            <p>Bank</p>
                            <div className="switch-container">
                                <div className="switch-box checked"></div>
                                <div className="switch-box"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drumbox;