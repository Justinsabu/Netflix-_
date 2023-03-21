import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseURL'
import './Row.css'

function Row({title,fetchUrl,isLargeRow}) {

    const [movies,setMovies]=useState([])

    async function fetchData(){
        const result=await instance.get(fetchUrl)
        console.log(result);
        setMovies(result.data.results)
        console.log(movies);

    }

    useEffect(()=>{
        fetchData();
    },[])

    const base_url = "https://image.tmdb.org/t/p/original/";





  return (
    <div className='row'>
    <h2>{title}</h2>
    <div className='movies'>
        {
            movies.map(movie=>(
                <img className={`movie ${isLargeRow && "largemovie"}`} src={`${base_url}${isLargeRow? movie.poster_path:movie.backdrop_path}`} />
            ))
        }

    </div>

    
    </div>
  )
}

export default Row