import React from 'react'

function CpuSide(props) {
    return (
        <div className='cpu-side'>
            <div className='cpu'>
                <p>C</p>
                <p>P</p>
                <p>U</p>
            </div>
            <div className='cpu-score'>
                {props.cpuScore}
            </div>
            <div className='cpu-main-card'>
                {props.cpusMainCard ?
                    <img
                        src={props.cpusMainCard.image}
                        alt='playing card'
                        className='main-card'
                    />
                    : null
                }
            </div>
            <div className='cpu-war-cards'>
                <div className='cpu-war-card-1'>

                </div>
                <div className='cpu-war-card-2'>
                    
                </div>
                <div className='cpu-war-card-3'>
                    
                </div>
                <div className='cpu-war-card-4'>
                    
                </div>
            </div>
        </div>
    )
}

export default CpuSide