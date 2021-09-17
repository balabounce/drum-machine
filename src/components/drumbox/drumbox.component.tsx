import React from "react";
import './drumbox.styles.scss';
import KeyboardEventHandler  from 'react-keyboard-event-handler';


const Drumbox: React.FC = () => {
    const keyHandler = (key: string) : void => {
        console.log(key);
        document.querySelector(`#${key}`).click
    }


    return (
        <section >
            <KeyboardEventHandler   
                handleKeys={['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C']}
                onKeyEvent={(key, e) => keyHandler(key)} />
            <div className="container">
                <div className='drumbox'>
                    <div className="buttons">
                        <button id='Q'>Q</button>
                        <button id='W'>W</button>
                        <button id='E'>E</button>
                        <button id='A'>A</button>
                        <button id='S'>S</button>
                        <button id='D'>D</button>
                        <button id='Z'>Z</button>
                        <button id='X'>X</button>
                        <button id='C'>C</button>
                    </div>
                    <div className="settings">
                        <p>Power</p>
                        <div className="switcher" id='power-switcher' onClick={() => console.log('&')}>
                            <div className="switch-box checked"></div>
                            <div className="switch-box"></div>
                        </div>
                        <div className="area">TEXT</div>
                        <input type="range" min="0" max="100" step="1" /> 
                        <p>Bank</p>
                        <div className="switcher" id='bank-switcher'>
                            <div className="switch-box checked"></div>
                            <div className="switch-box"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Drumbox;