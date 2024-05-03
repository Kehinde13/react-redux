import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, rootState } from './store'
import { decrement, increment, incrementAsync, incrementBy } from './store/counter/counterSlice'

function App() {
  // get the counters state from the store using the useSelector hook.
 const count = useSelector((state: rootState) => state.counter.value);

 // get the dispatch function from the useDispatch hook.
 const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>
        {count}
      </h2>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          increment
        </button>
        { " "}
        <button onClick={() => dispatch(decrement())}>
          decrement
        </button>
        <br />
        <button onClick={() => dispatch(incrementBy(10))}>
          increment by 10
        </button>
        { " "}
        <button onClick={() => dispatch(incrementAsync(2))}>
          Async increment
        </button>

        
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
