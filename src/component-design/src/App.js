import { useState } from 'react'
import './App.css'
import SubTask from './components/issue/sub-task'

function App () {
  const [isReloadList, setIsReloadList] = useState(false)
  return (
    <div className='App'>
      <div className="section">
        <SubTask
          isReloadList={isReloadList}
          setIsReloadList={setIsReloadList}
        />
      </div>
    </div>
  )
}

export default App
