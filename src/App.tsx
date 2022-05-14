// import { useState } from 'react'
// import logo from './logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { Button } from './components/Button/Button'
import { decreament, increment, resetCounter, selectCount } from './redux/counter.slice'

function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector(selectCount)
  const dispatch = useDispatch()

  return (
    <div className='flex justify-center items-center w-full min-full min-h-screen m-0 p-0 absolute top-0 left-0 bg-gray-100'>
      <div className='max-w-[900px] mt-0 min-h-[400px] w-full rounded-md bg-blue-400 text-white py-4 px-5 mx-auto flex flex-col items-center gap-y-4'>
        <h1 className='mt-[120px] font-bold text-4xl mb-5'>Vite + React + Redux + TS</h1>
        <div className='flex justify-center items-center gap-x-4 h-full'>
          <Button label='Increment' className='rounded-md py-2 px-5 bg-green-600' onClick={() => dispatch(increment())}></Button>
          <Button content={String(count)} className='rounded-md py-2 px-5 bg-blue-500'></Button>
          <Button label='Reset' className='rounded-md py-2 px-5 bg-yellow-500' onClick={() => dispatch(resetCounter())}></Button>
          <Button label='Decrement' className='rounded-md py-2 px-5 bg-red-500' onClick={() => dispatch(decreament())}></Button>
        </div>
      </div>
    </div>
  )
}

export default App
