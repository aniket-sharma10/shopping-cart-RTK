import { useState } from 'react'
import './App.css'
import AddItem from './components/AddItem'
import Cart from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-black text-3xl p-4 w-full mb-18 absolute top-0 left-0 text-white '>Shopping Cart</h1>
      <AddItem />
      <Cart />
    </>
  )
}

export default App
