import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Lotto from './lotto/Lotto'
import Festival from './festival/Festival' 
import FestivalContents from './festival/FestivalContents'
import TodoList from './todo/TodoList' 
import Login from './Login'
import TestTs from './test_ts/TestTs'

function App() {
  return (
    <BrowserRouter>
      <div className='w-full h-screen flex flex-col overflow-y-hidden'>
        <Header />
        <main className='container mx-auto flex flex-col flex-grow overflow-y-auto'>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/lotto' element={<Lotto />} />
            <Route path='/festival' element={<Festival />} />
            <Route path='/festival/contents' element={<FestivalContents />} />            
            <Route path='/todolist' element={<TodoList />} />  
            <Route path='/test' element={<TestTs />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
