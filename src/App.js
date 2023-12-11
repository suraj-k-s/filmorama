import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {
  useEffect(() => {
    const apiKey='fb3f4b2ea6a19573459266d8c5836ed1';
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
        with_genres:28
      }
    }).then(response => {
      console.log(response);
    }).catch(error => {
      // Handle errors
    });

    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.themoviedb.org/3/genre/movie/list', {
          params: {
            api_key: apiKey,
            language: 'en-US',
          },
        });
        console.log(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
    fetchData();



  }, [])
  return (
    <div>Filmormaa</div>
  )
}

export default App