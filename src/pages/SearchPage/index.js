import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import { unstable_useViewTransitionState, useLocation } from 'react-router-dom'

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');

  useEffect(() => {
    if (searchTerm) {
      fetchSearchMovie(searchTerm)
    }
  }, [searchTerm])
  

const fetchSearchMovie = async (searchTerm) => {
  try {
    const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
    setSearchResults(response.data.results);
  } catch (err) {
    console.log(err);
  }
}



  return (
    <div>
      Search Page
    </div>
  )
}

export default SearchPage
