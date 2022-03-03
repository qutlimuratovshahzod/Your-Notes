import React, { useState } from 'react'
import Form from './componets/Form'
import {List} from './componets/List'

function App() {
  const [list, setList] = useState([]);

  return (
    <div className='App bg-cyan-400 min-h-screen flex justify-center items-center flex-col '>
      <Form list={list} setList={setList}/>
      <List list={list} />
    </div>
  )
}

export default App