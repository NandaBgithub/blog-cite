import { useState, createContext } from 'react'




import './App.css'
import Navigation from './components/navigation/Navigation.jsx'
import Blog from './components/blog/Blog.jsx'
import Article from './components/article/Article.jsx'

export const SearchContext = createContext(null)

function App() {
  const [searchWords, setSearch] = useState('')
  const pattern = /^\/blog\/[a-zA-Z0-9_-]+$/;

  if (window.location.pathname == '/'){
    return (
      <SearchContext.Provider value={{searchWords, setSearch}}> 
        <Navigation />
        <Blog />
      </SearchContext.Provider>
    )
  }
  
  if (pattern.test(window.location.pathname)){
    let articleName = (window.location.pathname.replace("/blog", "").replace('/', ''));

    return (
    <SearchContext.Provider value={{searchWords, setSearch}}> 
      <Article title={articleName}/>
    </SearchContext.Provider>
    )
  }

  if(window.location.pathname == '/About'){
    <div></div>
  }

}

export default App
