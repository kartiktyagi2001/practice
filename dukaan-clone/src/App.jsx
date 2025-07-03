import { useState } from 'react'
import {RevenueCard} from './components/RevenueCard'
import './App.css'

function App() {


  return (
    <>

    <div className='grid grid-cols-3'>
      <RevenueCard title={"Amount Pending"} amount={2312.23} orderCount={23} />
    </div>
      
    </>
  )
}

export default App
