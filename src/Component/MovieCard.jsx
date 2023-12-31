import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React, { useState } from 'react'

const MovieCard = ({props}) => {
    const {data, movieKey,genreKey} = props

    const [hoveredIndices, setHoveredIndices] = useState(
        Array(props.length).fill(null)
     )
  
     const handleMouseEnter = (genreIndex, movieIndex) => {
        const newHoveredIndices = [...hoveredIndices]
        newHoveredIndices[genreIndex] = movieIndex
        setHoveredIndices(newHoveredIndices)
     }
  
     const handleMouseLeave = (genreIndex) => {
        const newHoveredIndices = [...hoveredIndices]
        newHoveredIndices[genreIndex] = null
        setHoveredIndices(newHoveredIndices)
     }
  return (
    <Box
    key={movieKey}
    >
         <Card
                        sx={{
                           width: 268,
                           height: 370,
                           m: 2,
                           transition: 'transform 0.3s ease-in-out',
                           transform: `scale(${
                              hoveredIndices[genreKey] === movieKey ? 1.1 : 1
                           })`,
                        }}
                        onMouseEnter={() =>
                           handleMouseEnter(genreKey, movieKey)
                        }
                        onMouseLeave={() => handleMouseLeave(genreKey)}
                     >
                        <CardMedia
                           component='img'
                           height='100%'
                           image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
                           alt={data.title}
                           style={{
                              background: 'linear-gradient(#0003, #000)',
                           }}
                        />
                        {hoveredIndices[genreKey] === movieKey && (
                           <CardContent>
                              <Typography variant='body1'>Hello</Typography>
                           </CardContent>
                        )}
                     </Card>
    </Box>
  )
}

export default MovieCard