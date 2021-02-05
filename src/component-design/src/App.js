import s from './App.scss'
import RequirementDetail from '@/components/issue/type/requirement/detail'

function App () {
  return (
    <div className={s.App}>
      <div className={s.section}>
        <div className={s.item}>
          <h2>需求</h2>
          <RequirementDetail />
        </div>
      </div>
    </div>
  )
}

export default App
