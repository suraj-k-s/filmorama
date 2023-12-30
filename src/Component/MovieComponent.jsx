import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'

const MovieComponent = ({ popular }) => {
   const [hoveredIndex, setHoveredIndex] = useState(null)

   const handleMouseEnter = (index) => {
      setHoveredIndex(index)
   }

   const handleMouseLeave = () => {
      setHoveredIndex(null)
   }

   return (
      <Box>
         <Card sx={{ width: '100%', my: 5 }}>
            <Box sx={{ mt: 5, ml: 5 }}>
               <Typography variant='h6'>Latest Movies</Typography>
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
               {popular.map((movie, key) => (
                  <Card
                     key={key}
                     sx={{
                        minWidth: 250,
                        height: 350,
                        m: 2,
                        transition: 'transform 0.2s ease-in-out',
                        transform: `scale(${hoveredIndex === key ? 1.1 : 1})`,
                     }}
                     onMouseEnter={() => handleMouseEnter(key)}
                     onMouseLeave={handleMouseLeave}
                  >
                     <CardMedia
                        component='img'
                        height='100%'
                        image={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                        alt={movie.title}
                        style={{background: `linear-gradient(#0003, #000)`}}
                     />
                     {hoveredIndex === key && (
                        <CardContent
                           sx={{
                              position: 'absolute',
                              bottom: 0,
                              width: '100%',
                              height: '100%',
                              backgroundColor: 'rgba(255, 255, 255, 0.8)',
                           }}
                        >
                           <Typography variant='body1'>Hello</Typography>
                        </CardContent>
                     )}
                  </Card>
               ))}
            </Box>
         </Card>
         hi
      </Box>
   )
}

export default MovieComponent
