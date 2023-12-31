import React, { useEffect, useState, useCallback, useContext } from 'react'
import axios from 'axios'
import GenreComponent from '../Component/GenreComponent'
import { changeGenre } from '../UseContext/Context'

const Genres = () => {
   const { genreId, genreName } = useContext(changeGenre)
   const [movies, setMovies] = useState([])
   const apiKey = 'fb3f4b2ea6a19573459266d8c5836ed1'

   const fetchData = useCallback(async () => {
      try {
         const allMovies = []

         // Fetch data for pages 1 to 10
         for (let page = 1; page <= 50; page++) {
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

         // Create a flattened array with two keys: genreName and data
         const genreMovies = allMovies.filter((movieDoc) =>
            movieDoc.genre_ids.includes(parseInt(genreId))
         )
         console.log(genreMovies)

         setMovies(genreMovies)
      } catch (error) {
         // Handle errors
         console.error('Error fetching data:', error)
      }
   }, [genreId])

   useEffect(() => {
      fetchData()
   }, [fetchData])

   return <GenreComponent props={{ movies, genreId, genreName }} />
}

export default Genres
