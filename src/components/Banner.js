import React from 'react'
import { useState,useEffect } from 'react'
import instance from '../baseURL'
import './Banner.css'

function Banner({fetchUrl}) {
    const [movie,setMovies]=useState([])

    async function fetchData(){
        const result=await instance.get(fetchUrl)
        console.log(result);
        setMovies(result.data.results[Math.floor(Math.random()*result.data.results.length-1)])
        // console.log(movies);

    }

    useEffect(()=>{
        fetchData();
    },[])

    const base_url = "https://image.tmdb.org/t/p/original/";


    function truncate(str,n){
      return str?.length>n?str.substr(0,n-1)+'...':str
    }

  return (
    <div
    className='banner'
    style={{
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:"cover",
        // backgroundPosition:"center"
    }}
    >
      <div className='banner-content'>
        <h1 className='banner-title'>{movie.name}</h1>
        <h3 className='banner-overview'>{truncate(movie.overview,290)}</h3>
      </div>
        
    </div>
  )
}

export default Banner