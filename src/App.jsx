import React from 'react'
import { useSelector } from 'react-redux'
import Header from './Components/Header'
import Notes from './Components/Notes/Notes'

function App() {

  return (
    <div style={{width:'100%',padding:0,display:'grid',gap:10}}>
      <Header />
      <Notes />
    </div>
  )
}

export default App