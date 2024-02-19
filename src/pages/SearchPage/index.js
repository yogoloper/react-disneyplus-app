import axios from '../../api/axios';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate } from 'react-router-dom'
import './SearchPage.css'
import { useDebounce } from '../../hooks/useDebounce';

function SearchPage() {
  const [searchResults, setSearchResults] = useState([])

  const useQuery = () => {
    return new URLSearchParams(useLocation().search);
  }

  let query = useQuery();
  const searchTerm = query.get('q');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const navigate = useNavigate();

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchSearchMovie(debouncedSearchTerm)
    }
  }, [debouncedSearchTerm])
  
  const fetchSearchMovie = async (searchTerm) => {
    try {
      const response = await axios.get(`/search/multi?include_adult=false&query=${searchTerm}`);
      setSearchResults(response.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  if (searchResults.length > 0) {
    return (
      <section className='search-container'>
        {searchResults.map((movie) => {
          if (movie.backdrop_path !== null && movie.media_type !== 'person') {
            const movieImageUrl = 'https://image.tmdb.org/t/p/w500' + movie.backdrop_path
            return (
              <div className='movie' key={movie.id}>
                <div className='movie__column-poster'>
                  <img
                    src={movieImageUrl} alt='movie' className='movie__poster'
                    onClick={() => {
                      navigate(`/${movie.id}`)
                    }}
                  />
                </div>
              </div>
            )
          }
        })}
      </section>
    )
  } else {
    return (
      <section className='no-results'>
        <div className='no-results-text'>
          <p>
            찾고자하는 검새어 `${searchTerm}` 에 맞는 영화가 없습니다.
          </p>
        </div>
      </section>
    )
  }
}

export default SearchPage
