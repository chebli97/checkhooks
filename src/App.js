import './App.css';
import  {useState} from 'react'
import MovieList from './components/MovieList'
import {Card} from './components/Card'
import Filter from './components/Filter'

const App = (props) => {

  
 
  return (
    <div className="App ">
          <Filter  />
          <MovieList  Card={Card} />

    </div>
  );
}

export default App;
