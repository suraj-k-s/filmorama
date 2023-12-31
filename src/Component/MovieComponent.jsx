import { Box, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import './Style.css'

import { changeGenre } from '../UseContext/Context'
import { Link } from 'react-router-dom'

const MovieComponent = ({ props }) => {
   const { setGenreId, setGenreName,setCheck } = useContext(changeGenre)

   return (
      <Box>
         {props.map((movie, genreKey) => (
            <Card
               sx={{ width: '100%', my: 5 }}
               key={genreKey}
            >
               <Box sx={{ mt: 5, ml: 5 }}>
                  <Link
                    
                     onClick={() => {
                        setGenreId(movie.genreId)
                        setGenreName(movie.genreName)
                        setCheck(true)
                     }}
                     style={{ textDecoration: 'none' }}
                  >
                     <Typography
                        sx={{
                           fontWeight: 700,
                           fontSize: 40,
                           fontFamily: 'Dancing Script, sans-serif',
                        }}
                        variant='h6'
                     >
                        {movie.genreName}
                     </Typography>
                  </Link>
               </Box>
               <Box
                  sx={{
                     display: 'flex',
                     overflowX: 'auto',
                     width: '100%',
                     maxWidth: '1500px',
                     scrollbarWidth: 'none',
                     '&::-webkit-scrollbar': {
                        display: 'none',
                     },
                  }}
               >
                  {movie.data.map((data, movieKey) => (
                     <MovieCard
                        props={{ data, movieKey, genreKey }}
                        key={movieKey}
                     />
                  ))}
               </Box>
            </Card>
         ))}
      </Box>
   )
}

export default MovieComponent
