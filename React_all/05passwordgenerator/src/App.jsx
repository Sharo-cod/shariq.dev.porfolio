import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length ,setlength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState("")



  // Use ref Hook
   
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789" 
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|:;"
    
    for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
      
    }

    setpassword(pass)


  }, [length , numberAllowed , charAllowed , setpassword])

  const compyPasswordToClipBoard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
    .then(() => {
      alert("Copied")
    })
  } , [password])

  useEffect(() => {
    passwordGenerator()
  }, [ length , numberAllowed , charAllowed , passwordGenerator])


  return (
    <>
        <div className='w-200 mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600'>
              <h2 className='text-center text-2xl p-5'>Password Generator</h2>
          <div className="flex shadow rounded-lg overflow-hidden mb-4 p-10">
      
            <input 
            type="text"
            value={password}
            className='outline-none w-full py-2 px-3 bg-white rounded-lg'
            placeholder='Password'
            readOnly
            ref={passwordRef}
            />
            <button onClick={compyPasswordToClipBoard} className='outline-none bg-blue-700 text-white mx-3'>Copy</button>

          </div>
          <div className="flex text-sm gap-x-2 p-3">
            <div className="flex items-center gap-x-4">
              <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
               />
               <label> Length: {length}</label>
            </div>
            <div className="flex items-center gap-x-4">
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() =>  {
                setNumberAllowed((prev) => !prev)
              }}
              />
              <label htmlFor="numberInput">Numbers</label>

            </div>

              <div className="flex items-center gap-x-4 ">
                <input 
                  type="checkbox"
                  checked={charAllowed}
                  id="characterInput"
                  onChange={() => setcharAllowed((prev) => !prev)}
                />
                <label htmlFor="characterInput">Special Characters</label>
              </div>


          </div>
        </div>
    </>
  )
}

export default App
