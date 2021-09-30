import React, {useState} from 'react'
import './gameBoard.css'
import UserSide from '../UserSide/UserSide'
import CpuSide from '../CpuSide/CpuSide'
import ControlTray from '../ControlTray/ControlTray'

function GameBoard() {
    const [usersCards, setUsersCards] = useState([])
    const [cpusCards, setCpusCards] = useState([])
    const [war, setWar] = useState(false)
    const [userMainCard, setUserMainCard] = useState(null)
    const [cpusMainCard, setCpusMainCard] = useState(null)
    const [gameStarted, setGameStarted] = useState(false)

    async function newGame() {
        try {
            let response = await fetch('https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/')
            let data = await response.json()
            const deckID = data.deck_id
            let secondRes = await fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckID}/draw/?count=52`)
            let cardData = await secondRes.json()
            const userCards = cardData.cards.slice(0, 26)
            setUsersCards(userCards)
            const cpuCards = cardData.cards.slice(26)
            setCpusCards(cpuCards)
            setGameStarted(true)
        } catch(e) {
            alert(e)
        }
    }

    function draw() {
        setUserMainCard(usersCards[0])
        setCpusMainCard(cpusCards[0])
        setTimeout(() => {
            console.log(userMainCard)
        }, 300)
    }

    function goToWar() {

    }

    return (
        <div className='game-board-cont'>
            <div className='game-board'>
                <UserSide
                    userScore={usersCards.length}
                    userMainCard={userMainCard}    
                />
                <CpuSide
                    cpuScore={cpusCards.length}
                    cpusMainCard={cpusMainCard}
                />
            </div>
            <ControlTray
                newGame={newGame}
                goToWar={goToWar}
                draw={draw}
                war={war}
                gameStarted={gameStarted}
            />
        </div>
    )
}

export default GameBoard