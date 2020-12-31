import { useState } from 'react'
import './App.css'
import SubTask from './components/issue/sub-task'

function App () {
  const [list, setList] = useState([])
  const [isReloadList, setIsReloadList] = useState(false)
  return (
    <div className='App'>
      <SubTask
        list={list}
        setList={setList}
        isReloadList={isReloadList}
        setIsReloadList={setIsReloadList}
      />
      <button onClick={() => setIsReloadList(true)}>刷新列表</button>
    </div>
  )
}

export default App
