import React from 'react'
import './controlTray.css'

function ControlTray(props) {
    return (
        <div className='control-tray'>
            <div className='new-game-btn-cont'>
                <button className='new-game-btn' onClick={props.newGame}>
                    NEW GAME
                </button>
            </div>
            <div className='draw-btn-cont'>
                <button
                    className={`draw-btn ${(props.playing && !props.war) ? '' : 'disabled'}`}
                    onClick={props.draw}
                >
                    DRAW
                </button>
            </div>
            <div className='war-btn-cont'>
                <button
                    className={`war-btn ${props.war ? '' : 'disabled'}`}
                    onClick={props.goToWar}
                >
                    WAR
                </button>
            </div>
        </div>
    )
}

export default ControlTray