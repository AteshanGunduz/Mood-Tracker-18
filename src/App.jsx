import { useState } from 'react'
import diaryData from './diaryData'
import DiaryCard from './components/DiaryCard'
import Menu from './components/Menu'
import './styles.css'
export default function App() {

  return (
    <div>
      <Menu skip={false} />
      <main className='main-container'>
        <div className='sub-header'>
          <h3>Nisan Raporu</h3>
        </div>
        {diaryData.map((data)=>{
          return <DiaryCard key={data.id} data={data}/>
        })}
      </main>
    </div>
  )
}
