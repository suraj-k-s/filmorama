import { Box, Button, Card, Typography } from '@mui/material'
import React, { useContext } from 'react'
import MovieCard from './MovieCard'
import './Style.css'
import { changeGenre } from '../UseContext/Context'

const GenreComponent = ({ props }) => {
   const { movies, Id: genreKey, genreName } = props
   const { setCheck } = useContext(changeGenre)

   console.log(props)
   return (
      <Box>
         <Card>
            <Box>
               <Button
                  variant='text'
                  sx={{ ml: 5, mt: 3 }}
                  onClick={() => setCheck(false)}
               >
                  Back
               </Button>
            </Box>
            <Typography
               variant='h4'
               sx={{
                  textAlign: 'center',
                  my: 5,
                  ml: 5,
                  fontWeight: 700,
                  fontSize: 40,
                  fontFamily: 'Dancing Script, sans-serif',
               }}
            >
               {genreName}
            </Typography>

            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
               {movies.map((data, movieKey) => (
                  <MovieCard props={{ data, movieKey, genreKey }} key={movieKey}/>
               ))}
            </Box>
         </Card>
      </Box>
   )
}

export default GenreComponent
