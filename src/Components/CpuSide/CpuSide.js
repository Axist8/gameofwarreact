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
                <p className='text cpuText'>{props.cpuText}</p>
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
                    {props.warCard1 ?
                        (props.warCard1 !== '✖️' ?
                            <img
                                src={props.warCard1.image}
                                alt='playing card'
                                className='war-card'
                            />
                            : '✖️'
                        )
                        : null
                    }
                </div>
                <div className='cpu-war-card-2'>
                    {props.warCard2 ?
                        (props.warCard2 !== '✖️' ?
                            <img
                                src={props.warCard2.image}
                                alt='playing card'
                                className='war-card'
                            />
                            : '✖️'
                        )
                        : null
                    }
                </div>
                <div className='cpu-war-card-3'>
                    {props.warCard3 ?
                        (props.warCard3 !== '✖️' ?
                            <img
                                src={props.warCard3.image}
                                alt='playing card'
                                className='war-card'
                            />
                            : '✖️'
                        )
                        : null
                    }
                </div>
                <div className='cpu-war-card-4'>
                    {props.warCard4 ?
                        (props.warCard4 !== '✖️' ?
                            <img
                                src={props.warCard4.image}
                                alt='playing card'
                                className='war-card'
                            />
                            : '✖️'
                        )
                        : null
                    }
                </div>
            </div>
        </div>
    )
}

export default CpuSide