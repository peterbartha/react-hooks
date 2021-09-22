// useEffect: HTTP requests
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'
// 🐨 you'll want the following additional things from '../pokemon':
// fetchPokemon: the function we call to get the pokemon info
// PokemonInfoFallback: the thing we show while we're loading the pokemon info
// PokemonDataView: the stuff we use to display the pokemon info
import {
  PokemonForm,
  fetchPokemon,
  PokemonInfoFallback,
  PokemonDataView,
} from '../pokemon'

import {ErrorBoundary} from 'react-error-boundary'

//
// Exercise
//
// function PokemonInfo({pokemonName}) {
//   // 🐨 Have state for the pokemon (null)
//   const [pokemon, setPokemon] = React.useState(null)

//   // 🐨 use React.useEffect where the callback should be called whenever the
//   // pokemon name changes.
//   // 💰 DON'T FORGET THE DEPENDENCIES ARRAY!
//   // 💰 if the pokemonName is falsy (an empty string) then don't bother making the request (exit early).
//   // 🐨 before calling `fetchPokemon`, clear the current pokemon state by setting it to null
//   // 💰 Use the `fetchPokemon` function to fetch a pokemon by its name:
//   //   fetchPokemon('Pikachu').then(
//   //     pokemonData => { /* update all the state here */},
//   //   )
//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setPokemon(null)

//     fetchPokemon(pokemonName).then(pokemonData => {
//       setPokemon(pokemonData)
//     })
//   }, [pokemonName])

//   // 🐨 return the following things based on the `pokemon` state and `pokemonName` prop:
//   //   1. no pokemonName: 'Submit a pokemon'
//   //   2. pokemonName but no pokemon: <PokemonInfoFallback name={pokemonName} />
//   //   3. pokemon: <PokemonDataView pokemon={pokemon} />

//   // 💣 remove this
//   // return 'TODO'
//   if (!pokemonName) {
//     return 'Submit a pokemon'
//   }
//   if (!pokemon) {
//     return <PokemonInfoFallback name={pokemonName} />
//   }
//   return <PokemonDataView pokemon={pokemon} />
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

//
// Extra 1.
//
// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setPokemon(null)

//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setPokemon(pokemonData)
//       })
//       .catch(e => {
//         setError(e)
//       })
//   }, [pokemonName])

//   if (error) {
//     return (
//       <div role="alert">
//         There was an error:{' '}
//         <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//       </div>
//     )
//   }
//   if (!pokemonName) {
//     return 'Submit a pokemon'
//   }
//   if (!pokemon) {
//     return <PokemonInfoFallback name={pokemonName} />
//   }
//   return <PokemonDataView pokemon={pokemon} />
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

//
// Extra 2.
//
// function PokemonInfo({pokemonName}) {
//   const [pokemon, setPokemon] = React.useState(null)
//   const [state, setState] = React.useState('idle')
//   const [error, setError] = React.useState(null)

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState('pending')
//     setPokemon(null)

//     fetchPokemon(pokemonName)
//       .then(pokemonData => {
//         setPokemon(pokemonData)
//         setState('resolved')
//       })
//       .catch(e => {
//         setError(e)
//         setState('rejected')
//       })
//   }, [pokemonName])

//   switch (state) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//         </div>
//       )

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

//
// Extra 3.
//
// function PokemonInfo({pokemonName}) {
//   const [{status, pokemon, error}, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState({
//       status: 'pending',
//     })

//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({
//           status: 'resolved',
//           pokemon,
//         })
//       })
//       .catch(e => {
//         setState({
//           status: 'rejected',
//           error: e,
//         })
//       })
//   }, [pokemonName])

//   switch (status) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       return (
//         <div role="alert">
//           There was an error:{' '}
//           <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//         </div>
//       )

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <PokemonInfo pokemonName={pokemonName} />
//       </div>
//     </div>
//   )
// }

//
// Extra 4.
//
// class ErrorBoundary extends React.Component {
//   state = {error: null}

//   static getDerivedStateFromError(error) {
//     return {error}
//   }

//   render() {
//     const {error} = this.state
//     if (error) {
//       return <this.props.FallbackComponent error={error} />
//     }

//     return this.props.children
//   }
// }

// function PokemonInfo({pokemonName}) {
//   const [{status, pokemon, error}, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState({
//       status: 'pending',
//     })

//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({
//           status: 'resolved',
//           pokemon,
//         })
//       })
//       .catch(e => {
//         setState({
//           status: 'rejected',
//           error: e,
//         })
//       })
//   }, [pokemonName])

//   switch (status) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       throw error

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function ErrorFallback({error}) {
//   return (
//     <div role="alert">
//       There was an error:{' '}
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     </div>
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary FallbackComponent={ErrorFallback}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

//
// Extra 5.
//
// class ErrorBoundary extends React.Component {
//   state = {error: null}

//   static getDerivedStateFromError(error) {
//     return {error}
//   }

//   render() {
//     const {error} = this.state
//     if (error) {
//       return <this.props.FallbackComponent error={error} />
//     }

//     return this.props.children
//   }
// }

// function PokemonInfo({pokemonName}) {
//   const [{status, pokemon, error}, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState({
//       status: 'pending',
//     })

//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({
//           status: 'resolved',
//           pokemon,
//         })
//       })
//       .catch(e => {
//         setState({
//           status: 'rejected',
//           error: e,
//         })
//       })
//   }, [pokemonName])

//   switch (status) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       throw error

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function ErrorFallback({error}) {
//   return (
//     <div role="alert">
//       There was an error:{' '}
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     </div>
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary FallbackComponent={ErrorFallback} key={pokemonName}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

//
// Extra 6.
//
// function PokemonInfo({pokemonName}) {
//   const [{status, pokemon, error}, setState] = React.useState({
//     status: 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState({
//       status: 'pending',
//     })

//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({
//           status: 'resolved',
//           pokemon,
//         })
//       })
//       .catch(e => {
//         setState({
//           status: 'rejected',
//           error: e,
//         })
//       })
//   }, [pokemonName])

//   switch (status) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       throw error

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function ErrorFallback({error}) {
//   return (
//     <div role="alert">
//       There was an error:{' '}
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//     </div>
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary FallbackComponent={ErrorFallback} key={pokemonName}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

//
// Extra 7.
//
// function PokemonInfo({pokemonName}) {
//   const [{status, pokemon, error}, setState] = React.useState({
//     status: pokemonName ? 'pending' : 'idle',
//     pokemon: null,
//     error: null,
//   })

//   React.useEffect(() => {
//     if (!pokemonName) {
//       return
//     }

//     setState({
//       status: 'pending',
//     })

//     fetchPokemon(pokemonName)
//       .then(pokemon => {
//         setState({
//           status: 'resolved',
//           pokemon,
//         })
//       })
//       .catch(e => {
//         setState({
//           status: 'rejected',
//           error: e,
//         })
//       })
//   }, [pokemonName])

//   switch (status) {
//     case 'idle':
//       return 'Submit a pokemon'

//     case 'pending':
//       return <PokemonInfoFallback name={pokemonName} />

//     case 'resolved':
//       return <PokemonDataView pokemon={pokemon} />

//     case 'rejected':
//       throw error

//     default:
//       throw new Error('This should be impossible!')
//   }
// }

// function ErrorFallback({error, resetErrorBoundary}) {
//   return (
//     <div role="alert">
//       There was an error:{' '}
//       <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
//       <button onClick={resetErrorBoundary}>Try again</button>
//     </div>
//   )
// }

// function App() {
//   const [pokemonName, setPokemonName] = React.useState('')

//   function handleSubmit(newPokemonName) {
//     setPokemonName(newPokemonName)
//   }

//   function handleReset() {
//     setPokemonName('')
//   }

//   return (
//     <div className="pokemon-info-app">
//       <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
//       <hr />
//       <div className="pokemon-info">
//         <ErrorBoundary FallbackComponent={ErrorFallback} onReset={handleReset}>
//           <PokemonInfo pokemonName={pokemonName} />
//         </ErrorBoundary>
//       </div>
//     </div>
//   )
// }

//
// Extra 8.
//
function PokemonInfo({pokemonName}) {
  const [{status, pokemon, error}, setState] = React.useState({
    status: pokemonName ? 'pending' : 'idle',
    pokemon: null,
    error: null,
  })

  React.useEffect(() => {
    if (!pokemonName) {
      return
    }

    setState({
      status: 'pending',
    })

    fetchPokemon(pokemonName)
      .then(pokemon => {
        setState({
          status: 'resolved',
          pokemon,
        })
      })
      .catch(e => {
        setState({
          status: 'rejected',
          error: e,
        })
      })
  }, [pokemonName])

  switch (status) {
    case 'idle':
      return 'Submit a pokemon'

    case 'pending':
      return <PokemonInfoFallback name={pokemonName} />

    case 'resolved':
      return <PokemonDataView pokemon={pokemon} />

    case 'rejected':
      throw error

    default:
      throw new Error('This should be impossible!')
  }
}

function ErrorFallback({error, resetErrorBoundary}) {
  return (
    <div role="alert">
      There was an error:{' '}
      <pre style={{whiteSpace: 'normal'}}>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

function App() {
  const [pokemonName, setPokemonName] = React.useState('')

  function handleSubmit(newPokemonName) {
    setPokemonName(newPokemonName)
  }

  function handleReset() {
    setPokemonName('')
  }

  return (
    <div className="pokemon-info-app">
      <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
      <hr />
      <div className="pokemon-info">
        <ErrorBoundary
          FallbackComponent={ErrorFallback}
          resetKeys={[pokemonName]}
          onReset={handleReset}
        >
          <PokemonInfo pokemonName={pokemonName} />
        </ErrorBoundary>
      </div>
    </div>
  )
}

export default App
