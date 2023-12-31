import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './Component/Navbar'
import Advertisement from './Component/Advertisement'
import { changeGenre } from './UseContext/Context'

const App = () => {
   const [genreId, setGenreId] = useState(null)
   const [genreName, setGenreName] = useState(null)
   const [check, setCheck] = useState(false)
   return (
      <>
         <Navbar />
         <Advertisement />
         <changeGenre.Provider
            value={{
               genreId,
               genreName,
               check,
               setCheck,
               setGenreId,
               setGenreName,
            }}
         >
            <Routes>
               <Route
                  path=''
                  element={<Home />}
               />
            </Routes>
         </changeGenre.Provider>
      </>
   )
}

export default App
