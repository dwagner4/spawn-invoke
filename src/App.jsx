import { useState } from 'react'
import './App.css'
import * as React from 'react';
// import {AppActor} from './appMachine'
import {createActor} from 'xstate'
import {appMachine} from './appMachine' 

export const AppActor = createActor(appMachine);

AppActor.start()


function App() {
  const [count, setCount] = useState(0)
  const [appState, setAppState] = React.useState()

  React.useEffect(() => {
    AppActor.subscribe((snapshot) => {
      setAppState(snapshot.value)
    })
  }, [])

  const nextHandler = () => {
    AppActor.send({type: 'next'})
  }

  return (
    <>
      <div>
        
        <p>yo {appState}</p>
       
      </div>
      <button onClick={nextHandler}>next</button>
      
    </>
  )
}

export {App}