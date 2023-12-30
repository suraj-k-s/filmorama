import React, { useEffect, useState } from 'react'
import { Box } from '@mui/material'
import Navbar from '../Component/Navbar'
import Advertisement from '../Component/Advertisement'
import MovieComponent from '../Component/MovieComponent'
import axios from 'axios'

const Home = () => {
    const [popular, setPopular] = useState([])


   useEffect(() => {
      const apiKey = 'fb3f4b2ea6a19573459266d8c5836ed1'
      axios
         .get('https://api.themoviedb.org/3/movie/popular', {
            params: {
               api_key: apiKey,
               language: 'en-US',
               page: 1,
            },
         })
         .then((response) => {
            console.log(response.data.results)
            const data = response.data.results
            setPopular(data)
         })
         .catch((error) => {
            // Handle errors
         })

      // const fetchData = async () => {
      //   try {
      //     const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
      //       params: {
      //         api_key: apiKey,
      //         language: 'en-US',
      //       },
      //     });
      //     console.log(response.data.genres);
      //   } catch (error) {
      //     console.error('Error fetching genres:', error);
      //   }
      // };
      // fetchData();
   }, [])
   return (
      <Box>
         <Navbar />
         <Advertisement />
         <MovieComponent popular={popular}/>
      </Box>
   )
}

export default Home
