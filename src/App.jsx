import './App.css'
import { useRoutes } from 'react-router-dom'
import { routes } from './routes/navigation.jsx'

function App() {
  const navElements = useRoutes(routes)
  return (
    <>
      <header>Task Manager</header>
      {navElements}
    </>
  )
}

export default App
