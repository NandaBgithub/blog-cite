import {useRef, useEffect, useContext} from 'react'

import './Navigation.css'
import searchIcon from './searchIcon.png'
import {SearchContext} from '../../App.jsx'

function Navigation() {
    const searchRef = useRef(null)
    const searchContext = useContext(SearchContext)

    function handleSearch(text, event){
        if (event.key == "Enter"){
            searchContext.setSearch(text)
            
            // console.log("text", text)
            console.log(searchContext.searchWords)
            // console.log("setSearch type", typeof(searchContext.setSearch))
        }

        // Find the article based on the search
    }

    useEffect(()=>{
        searchRef.current.addEventListener('keyup', (event) => {
            handleSearch(searchRef.current.value, event)
        })

        return (searchRef.current.removeEventListener('keyup', ()=>{handleSearch(searchRef.current.value)}))
    }, []) 

    return (
        <nav>
            <div className="header-container">
                <div className="logo">Rant Blog</div>
                
                <div>|</div>
                
                <a className="about" href={'/About'}>About</a>
            </div>

            

            <div className="search-container">

                
                <img id="search-icon" src={searchIcon}></img>
                
                <input ref={searchRef} type="search" className="search-input" placeholder="Search an article..."></input>

                


            </div>
            
            
        </nav>
    )
}

export default Navigation