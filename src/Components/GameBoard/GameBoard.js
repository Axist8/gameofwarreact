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
    const [playing, setPlaying] = useState(false)
    const [userText, setUserText] = useState('Start new game!')
    const [cpuText, setCpuText] = useState('')
    const [usersWar1, setUsersWar1] = useState(null)
    const [usersWar2, setUsersWar2] = useState(null)
    const [usersWar3, setUsersWar3] = useState(null)
    const [usersWar4, setUsersWar4] = useState(null)
    const [cpusWar1, setCpusWar1] = useState(null)
    const [cpusWar2, setCpusWar2] = useState(null)
    const [cpusWar3, setCpusWar3] = useState(null)
    const [cpusWar4, setCpusWar4] = useState(null)

    /* ---------- New Game ----------- */

    async function newGame() {
        setPlaying(false)
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
            setUserText('Draw!')
            setPlaying(true)
            setWar(false)
        } catch(e) {
            alert(e)
        }
    }

    /* ---------- Determine Round Winner ----------- */

    function determineRoundWinner(firstCard, secondCard) {
        const cardTypeArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'JACK', 'QUEEN', 'KING', 'ACE'];
        const firstCardValue = cardTypeArray.findIndex(card => card === `${firstCard.value}`);
        const secondCardValue = cardTypeArray.findIndex(card => card === `${secondCard.value}`);
        if (firstCardValue > secondCardValue) {
            
            setUserText('Win!!')
            setCpuText('Lose..')
            if (cpusCards.length === 1) {
                setUserText('VICTORY!!!')
                setCpuText('DEFEAT...')
                setPlaying(false)
                return
            }
            if (war && cpusCards.length < 6) {
                setUserText('VICTORY!!!')
                setCpuText('DEFEAT...')
                setPlaying(false)
                return
            }
            if (war) {
                const cpuCardLoot = cpusCards.slice(0, 5)
                if (usersCards.length < 6) {
                    setUsersCards([...usersCards, ...cpuCardLoot])
                } else {
                    const userTopOfDeck = usersCards.slice(6)
                    const usersShuffleCards = usersCards.slice(0, 5)
                    setUsersCards([...userTopOfDeck, ...cpuCardLoot, ...usersShuffleCards])
                }
                const cpusNewDeck = cpusCards.slice(6)
                setCpusCards(cpusNewDeck)
                setWar(false)
                setPlaying(true)
                return
            }
            const winnerCard = usersCards[0]
            const topOfUserDeck = usersCards.slice(1)
            setUsersCards([...topOfUserDeck, winnerCard, cpusCards[0]])
            const cpuNewDeck = cpusCards.slice(1)
            setCpusCards(cpuNewDeck)
            setPlaying(true)
        } else if (secondCardValue > firstCardValue) {
            setUserText('Lose..')
            setCpuText('Win!')
            if (usersCards.length === 1) {
                setUserText('DEFEAT...')
                setCpuText('VICTORY!!!')
                setPlaying(false)
                return
            }
            if (war && usersCards.length < 6) {
                setUserText('DEFEAT...')
                setCpuText('VICTORY!!!')
                setPlaying(false)
                return
            }
            if (war) {
                const userCardLoot = usersCards.slice(0, 5)
                if (cpusCards.length < 6) {
                    setCpusCards([...cpusCards, ...userCardLoot])
                } else {
                    const cpuTopOfDeck = cpusCards.slice(6)
                    const cpuShuffleCards = cpusCards.slice(0, 5)
                    setCpusCards([...cpuTopOfDeck, ...userCardLoot, ...cpuShuffleCards])
                }
                const usersNewDeck = usersCards.slice(6)
                setUsersCards(usersNewDeck)
                setWar(false)
                setPlaying(true)
                return
            }
            const winnerCard = cpusCards[0]
            const topOfCpusDeck = cpusCards.slice(1)
            setCpusCards([...topOfCpusDeck, winnerCard, usersCards[0]])
            const userCardTaken = usersCards.slice(1)
            setUsersCards(userCardTaken)
            setPlaying(true)
        } else {
            setUserText('War!!')
            setCpuText('War!!')
            setWar(true)
            setPlaying(false)
        }
    }

    /* ---------- Draw ----------- */

    function draw() {
        setPlaying(false)
        if (usersWar1) {
            setUsersWar1(false)
            setUsersWar2(false)
            setUsersWar3(false)
            setUsersWar4(false)
            setCpusWar1(false)
            setCpusWar2(false)
            setCpusWar3(false)
            setCpusWar4(false)
        }
        setUserMainCard(usersCards[0])
        setCpusMainCard(cpusCards[0])
        determineRoundWinner(usersCards[0], cpusCards[0])
    }

    /* ---------- Go TO War ----------- */

    function goToWar() {
        setPlaying(false)
        let userMain
        let cpuMain
        setUserMainCard(null)
        setCpusMainCard(null)
        if (usersCards.length >= 2) {
            setUsersWar4(usersCards[0])
        } else {
            setUsersWar4('✖️')
            userMain = usersCards[0]
        }
        if (cpusCards.length >= 2) {
            setCpusWar4(cpusCards[0])
        } else {
            setCpusWar4('✖️')
            cpuMain = cpusCards[0]
        }
        setTimeout(() => {
            if (usersCards.length >= 3) {
                setUsersWar3(usersCards[1])
            } else {
                setUsersWar3('✖️')
                userMain = usersCards[1]
            }
            if (cpusCards.length >= 3) {
                setCpusWar3(cpusCards[1])
            } else {
                setCpusWar3('✖️')
                cpuMain = cpusCards[1]
            }
            setTimeout(() => {
                if (usersCards.length >= 4) {
                    setUsersWar2(usersCards[2])
                } else {
                    setUsersWar2('✖️')
                    userMain = usersCards[2]
                }
                if (cpusCards.length >= 4) {
                    setCpusWar2(cpusCards[2])
                } else {
                    setCpusWar2('✖️')
                    cpuMain = cpusCards[2]
                }
                setTimeout(() => {
                    if (usersCards.length >= 5) {
                        setUsersWar1(usersCards[3])
                        userMain = usersCards[4]
                    } else {
                        setUsersWar1('✖️')
                        userMain = usersCards[3]
                    }
                    if (cpusCards.length >= 5) {
                        setCpusWar1(cpusCards[3])
                        cpuMain = cpusCards[4]
                    } else {
                        setCpusWar1('✖️')
                        cpuMain = cpusCards[3]
                    }
                    setTimeout(() => {
                        setUserMainCard(userMain)
                        setCpusMainCard(cpuMain)
                        determineRoundWinner(userMain, cpuMain)
                    }, 700)
                    setPlaying(true)
                    setWar(false)
                }, 500)
            }, 500)
        }, 500)
    }

    return (
        <div className='game-board-cont'>
            <div className='game-board'>
                <UserSide
                    userScore={usersCards.length}
                    userMainCard={userMainCard}
                    userText={userText}
                    war={war}
                    warCard1={usersWar1}
                    warCard2={usersWar2}
                    warCard3={usersWar3}
                    warCard4={usersWar4}
                />
                <CpuSide
                    cpuScore={cpusCards.length}
                    cpusMainCard={cpusMainCard}
                    cpuText={cpuText}
                    war={war}
                    warCard1={cpusWar1}
                    warCard2={cpusWar2}
                    warCard3={cpusWar3}
                    warCard4={cpusWar4}
                />
            </div>
            <ControlTray
                newGame={newGame}
                goToWar={goToWar}
                draw={draw}
                war={war}
                playing={playing}
            />
        </div>
    )
}

export default GameBoard