import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import './Style.css' // Import your custom CSS file

const Navbar = () => {
   return (
      <Box
         sx={{
            width: '100%',
            height: '100px',
            borderBottom: 1,
            display: 'flex',
         }}
      >
         <Box
            sx={{
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               width: '30%',
            }}
         >
            <Typography
               className='masked-text'
               sx={{
                  fontWeight: 700,
                  fontSize: 50,
                  fontFamily: 'Dancing Script, sans-serif',
               }}
            >
               FlimOrma
            </Typography>
         </Box>
         <Box
            sx={{
               width: '70%',
               display: 'flex',
               justifyContent: 'flex-end',
               alignItems: 'center',
               mr: 4,
            }}
         >
            <Button variant='outlined' sx={{px:5}}>SignOut</Button>
         </Box>
      </Box>
   )
}

export default Navbar
