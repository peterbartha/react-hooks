// useState: tic tac toe
// http://localhost:3000/isolated/exercise/04.js

import * as React from 'react'
import {useLocalStorageState} from '../utils'

//
// Exercise
//
// function Board() {
//   // 🐨 squares is the state for this component. Add useState for squares
//   // const squares = Array(9).fill(null)
//   const [squares, setSquares] = React.useState(Array(9).fill(null))

//   // 🐨 We'll need the following bits of derived state:
//   // - nextValue ('X' or 'O')
//   // - winner ('X', 'O', or null)
//   // - status (`Winner: ${winner}`, `Scratch: Cat's game`, or `Next player: ${nextValue}`)
//   // 💰 I've written the calculations for you! So you can use my utilities
//   // below to create these variables
//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   // This is the function your square click handler will call. `square` should
//   // be an index. So if they click the center square, this will be `4`.
//   function selectSquare(square) {
//     // 🐨 first, if there's already winner or there's already a value at the
//     // given square index (like someone clicked a square that's already been
//     // clicked), then return early so we don't make any state changes
//     if (winner || squares[square]) {
//       return
//     }

//     // 🦉 It's typically a bad idea to mutate or directly change state in React.
//     // Doing so can lead to subtle bugs that can easily slip into production.
//     //
//     // 🐨 make a copy of the squares array
//     // 💰 `[...squares]` will do it!)
//     const squaresCopy = [...squares]

//     // 🐨 set the value of the square that was selected
//     // 💰 `squaresCopy[square] = nextValue`
//     squaresCopy[square] = nextValue

//     // 🐨 set the squares to your copy
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     // 🐨 reset the squares
//     // 💰 `Array(9).fill(null)` will do it!
//     setSquares(Array(9).fill(null))
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       {/* 🐨 put the status in the div below */}
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

//
// Extra 1.
//
// const initialBoard = Array(9).fill(null)
// const storageKey = 'board'
// function Board() {
//   const [squares, setSquares] = React.useState(() => {
//     const s = localStorage.getItem(storageKey)
//     return s ? JSON.parse(s) : initialBoard
//   })

//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   React.useEffect(() => {
//     localStorage.setItem(storageKey, JSON.stringify(squares))
//   }, [squares])

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       return
//     }

//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     setSquares(initialBoard)
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

//
// Extra 2.
//
// const initialBoard = Array(9).fill(null)
// const storageKey = 'board'
// function Board() {
//   const [squares, setSquares] = useLocalStorageState(storageKey, initialBoard)

//   const nextValue = calculateNextValue(squares)
//   const winner = calculateWinner(squares)
//   const status = calculateStatus(winner, squares, nextValue)

//   function selectSquare(square) {
//     if (winner || squares[square]) {
//       return
//     }

//     const squaresCopy = [...squares]
//     squaresCopy[square] = nextValue
//     setSquares(squaresCopy)
//   }

//   function restart() {
//     setSquares(initialBoard)
//   }

//   function renderSquare(i) {
//     return (
//       <button className="square" onClick={() => selectSquare(i)}>
//         {squares[i]}
//       </button>
//     )
//   }

//   return (
//     <div>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {renderSquare(0)}
//         {renderSquare(1)}
//         {renderSquare(2)}
//       </div>
//       <div className="board-row">
//         {renderSquare(3)}
//         {renderSquare(4)}
//         {renderSquare(5)}
//       </div>
//       <div className="board-row">
//         {renderSquare(6)}
//         {renderSquare(7)}
//         {renderSquare(8)}
//       </div>
//       <button className="restart" onClick={restart}>
//         restart
//       </button>
//     </div>
//   )
// }

// function Game() {
//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board />
//       </div>
//     </div>
//   )
// }

//
// Extra 3.
//
const initialBoard = Array(9).fill(null)
function Board({squares, onClick}) {
  function renderSquare(i) {
    return (
      <button className="square" onClick={() => onClick(i)}>
        {squares[i]}
      </button>
    )
  }

  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}

function Game() {
  const [moves, setMoves] = useLocalStorageState('moves', [initialBoard])
  const [step, setStep] = useLocalStorageState('step', 0)

  const currentSquares = moves[step]
  const nextValue = calculateNextValue(currentSquares)
  const winner = calculateWinner(currentSquares)
  const status = calculateStatus(winner, currentSquares, nextValue)

  function selectSquare(square) {
    if (winner || currentSquares[square]) {
      return
    }

    const movesCopy = moves.slice(0, step + 1)
    const squaresCopy = [...currentSquares]
    squaresCopy[square] = nextValue
    setMoves([...movesCopy, squaresCopy])
    setStep(movesCopy.length)
  }

  function restart() {
    setMoves([initialBoard])
    setStep(0)
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board onClick={selectSquare} squares={currentSquares} />
        <button className="restart" onClick={restart}>
          restart
        </button>
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>
          {moves.map((_move, index) => (
            <li key={index}>
              <button disabled={index === step} onClick={() => setStep(index)}>
                Go to {index === 0 ? 'game start' : `move #${index}`}
                {index === step ? ' (current)' : null}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  return winner
    ? `Winner: ${winner}`
    : squares.every(Boolean)
    ? `Scratch: Cat's game`
    : `Next player: ${nextValue}`
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O'
}

// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

function App() {
  return <Game />
}

export default App
