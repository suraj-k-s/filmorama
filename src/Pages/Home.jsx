import React, { useContext, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import MovieComponent from '../Component/MovieComponent';
import axios from 'axios'
import { changeGenre } from '../UseContext/Context'
import Genres from './Genres';


const Home = () => {
   const { check  } = useContext(changeGenre)

   const [movies, setMovies] = useState(null)

   const apiKey = 'fb3f4b2ea6a19573459266d8c5836ed1'

   const fetchData = async () => {
      try {
         const allMovies = []

         // Fetch data for pages 1 to 10
         for (let page = 1; page <= 40; page++) {
            const response = await axios.get(
               'https://api.themoviedb.org/3/discover/movie',
               {
                  params: {
                     api_key: apiKey,
                     language: 'en-US',
                     page: page,
                  },
               }
            )

            // Add the movies from the current page to the array
            allMovies.push(...response.data.results)
         }

         const genreResponse = await axios.get(
            'https://api.themoviedb.org/3/genre/movie/list',
            {
               params: {
                  api_key: apiKey,
                  language: 'en-US',
               },
            }
         )

         const genreData = genreResponse.data.genres

         // Create a flattened array with two keys: genreName and data
         const flattenedArray = genreData.flatMap((genreDoc) => {
            const genreMovies = allMovies.filter((movieDoc) =>
               movieDoc.genre_ids.includes(genreDoc.id)
            )
            return [
               {
                  genreName: genreDoc.name,
                  genreId: genreDoc.id,
                  data: genreMovies,
               },
            ]
         })


         setMovies(flattenedArray)
      } catch (error) {
         // Handle errors
         console.error('Error fetching data:', error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])

   return (
      <Box>
        
         {
          movies && !check &&  <MovieComponent props={movies} />

         }
         {
            check && <Genres/>
         }
        
      </Box>
   )
}

export default Home
