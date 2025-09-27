import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Theme'
import Card from './components/Card'

function App() {
const[thememode ,setthememode] = useState("light")

const lighttheme = () =>{
  setthememode("light")
}
const darktheme = () =>{
  setthememode('dark')
}

// actual change in theme

useEffect(() => {
  document.querySelector('html').classList.remove('light' , 'dark')
  document.querySelector('html').classList.remove(thememode)
}, [thememode])



  return (
<ThemeProvider value={{thememode , lighttheme, darktheme}}>
<div className="flex flex-wrap min-h-screen items-center">
  <div className="w-full">
    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
        {/* Theme Button */}
        <ThemeBtn/>
    </div>

    <div className="w-full max-w-sm mx-auto">
        {/* Card */}
        <Card/>
    </div>
  </div>
  </div>
</ThemeProvider>
  )
}

export default App
