import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './Home'
import Task from './Task'

function RouterComponent() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}>
            <Route path='task' element={<Task/>}/>

        </Route>
      </Routes>
    </div>
  )
}

export default RouterComponent
