import { Box, Card } from '@mui/material'
import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Tenet from '../assets/TENET_NEW_TRAILER_L3pk_TBkihU_136.mp4'
import Oppenheimer from '../assets/Oppenheimer_New_Trailer_uYPbbksJxIg_136.mp4'
import VideoItem from './VideoItem'

const Advertisement = () => {
   const videoSources = [Tenet, Oppenheimer, Tenet]

   return (
      <Box>
         <Card sx={{ width: '100%', height: 400, my: 2, borderRadius: 10 }}>
            <Carousel>
               {videoSources.map((source, index) => (
                  <VideoItem
                     key={index}
                     src={source}
                  />
               ))}
            </Carousel>
         </Card>
      </Box>
   )
}

export default Advertisement
