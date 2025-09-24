import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Profile from './components/profile'
import Login from './components/login'

function App() {
  return (
    <UserContextProvider>
      <h1>This Is Shariq Alam With React</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
