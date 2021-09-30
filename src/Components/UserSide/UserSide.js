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

                </div>
                <div className='user-war-card-2'>
                    
                </div>
                <div className='user-war-card-3'>
                    
                </div>
                <div className='user-war-card-4'>
                    
                </div>
            </div>
        </div>
    )
}

export default UserSide