import React from 'react'
import  {useState,useEffect} from 'react'
import MovieCard from './MovieCard'
import {Card} from './Card'



const Filter = () => {
/*
    const [search, setSearch] = useState("");
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [movies, setMovies] = useState([]);
  
    
    
      useEffect(() => {
        setFilteredMovies(
          movies.filter((film) =>
            film.title.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, movies]);

            {
             filteredMovies.map((movies, i) =>(
                <MovieCard key={i} {...Card.title} />
              ))
             }

    */
    return (
        <div className='pa3'>
            <input className='ba b--black-20 pa2 mb2 db center mt5 ' type='search' placeholder='Search Here'
             onChange={(e) => setSearch(e.target.value)}
             
              />
            
            <input className='pa2 mb2 pointer athelas tracked' type ="submit" value="Search" />
        </div>
    )
}

export default Filter
