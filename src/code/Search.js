import React from 'react'
import '../Search.css'
import './scripts'
import { Searchbar } from '../component/Searchbar'

function Search() {
  return (
        <div className='search-body'>
                <Searchbar/>
                <div> Drop Down</div>
        </div>
        
  )
}

export default Search