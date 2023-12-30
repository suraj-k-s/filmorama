import { Box } from '@mui/material'
import React from 'react'

const VideoItem = ({ src }) => (
   <Box sx={{ display: 'flex', justifyContent: 'center' }}>
      <video
         style={{ height: 400, width: '100%', objectFit: 'cover' }}
         controls // Add controls for play, pause, etc.
         autoPlay
         muted 
      >
         <source
            src={src}
            type='video/mp4'
         />
         Your browser does not support the video tag.
      </video>
   </Box>
)

export default VideoItem
