import { useState,useCallback, useEffect } from 'react'
function App() {
  const [length,setLength] = useState(10)
  const [Numbers,setNumbers] = useState(false)
  const [characters,setCharacters] = useState(false)
  const [password,setPassword] = useState("")
  const passwordGenerator =  useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(Numbers) str+="1234567890"
    if(characters) str+="!@#$%^&*(){][}?~`"
    for (let i = 0; i <length; i++) {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
      setPassword(pass)
      
    }
  },[length,Numbers,characters])
  useEffect(()=>{passwordGenerator()},[length,Numbers,characters])
  return (
    <>
      <div className='bg-slate-700 md:w-150 p-4'>
       <h2 className='font-bold text-2xl m-4 ml-20'>Welcome to password generator</h2>
        <div className='flex bg-slate-500 rounded-2xl w-80 h-10'>
            <input
             type="text"
             value={password}
             className='w-full outline-none pl-2'
             placeholder='password'
             readOnly />
             <button className='bg-blue-600 h-full rounded-2xl w-20'>Copy</button>
        </div>
        <div className='flex gap-2 pt-4'>
          <div>
              <input 
              type="range"
              className='mt-2'
              min={6}
              max={100}
              value={length}
              onChange={(e)=>{setLength(e.target.value)}}
              />
          </div>
          <label className='text-orange-800 font-bold'>Length: {length}</label>
          <div>
            <label htmlFor="chars">Charactres</label>
            <input 
            className='m-1 '
            type="checkbox" 
            id='chars'
            defaultChecked={characters}
            onChange={(prev)=>{setCharacters(!prev)}}
            />
          </div>
          <div>
            <label htmlFor="nums">Numbers</label>
            <input 
            type="checkbox" 
             className='m-1 '
            defaultChecked={Numbers}
            id='nums'
            onChange={(prev)=>{setNumbers(!prev)}}
            />
          </div>
        </div>
       </div>
    </>
  )
}

export default App
