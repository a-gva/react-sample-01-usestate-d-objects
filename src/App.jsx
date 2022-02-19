import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ClassCounter from './components/ClassCounter'
import HookCounter from './components/HookCounter'
import HookCountTwo from './components/HookCountTwo'
import HookCounterThree from './components/HookCounterThree'

function App() {
    return (
        <div className='App'>
            {/* <ClassCounter /> */}
            {/* <HookCounter /> */}
            {/* <HookCountTwo /> */}
            <HookCounterThree />
        </div>
    )
}

export default App
