import { Box, Card } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import YouTube from 'react-youtube';

const Advertisement = () => {
   const videoSources = ['AIc671o9yCI', 'bHXejJq5vr0', '32RAq6JzY-w'];

   return (
      <Box>
         <Card sx={{ width: '100%', height: 500, my: 2, borderRadius: 10 }}>
            <Carousel>
               {videoSources.map((source, index) => (
                  <YouTube
                     key={index}
                     videoId={source}
                     opts={{
                        width: '100%',
                        height: 500,
                        playerVars: {
                           autoplay: 1,
                           mute: 1,
                           origin: 'http://localhost:3000', // Update this to match your development server origin
                           controls: 2,
                           modestbranding: 1,
                           fs: 1, // Enable fullscreen
                           playsinline: 1,
                           iv_load_policy: 3,
                           rel: 0,
                           autohide: 1,
                           showinfo: 0,
                           quality: 'hd1080',
                        },
                     }}
                     
                  />
               ))}
            </Carousel>
         </Card>
      </Box>
   );
};

export default Advertisement;
