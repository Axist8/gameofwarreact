import React from 'react'

function UserSide(props) {
    return (
        <div className='user-side'>
            <div className='user'>
                <p>U</p>
                <p>S</p>
                <p>E</p>
                <p>R</p>
            </div>
            <div className='user-score'>
                {props.userScore}
            </div>
            <div className='user-main-card'>
                <p className='text userText'>{props.userText}</p>
                {props.userMainCard ?
                    <img
                        src={props.userMainCard.image}
                        alt='playing card'
                        className='main-card'
                    />
                    : null
                }
            </div>
            <div className='user-war-cards'>
                <div className='user-war-card-1'>
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
                <div className='user-war-card-2'>
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
                <div className='user-war-card-3'>
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
                <div className='user-war-card-4'>
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

export default UserSide