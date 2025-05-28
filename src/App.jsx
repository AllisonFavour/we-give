import './App.css'
import NavBar from './components/NavBar.jsx'
import Main from './components/Main.jsx'
import About from './components/About.jsx'

function App() {
  

  return (
    <>
      <div className='min-h-screen'>
        <NavBar />
        <Main />
        <About />
      </div>
    </>
  )
}

export default App
