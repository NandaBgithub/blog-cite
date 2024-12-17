import {useEffect, useState, useContext} from 'react'

import BlogCard from './BlogCard.jsx'
import {SearchContext} from '../../App.jsx'

function Blog(){
    let [result, setResult] = useState(null);
    const searchContext = useContext(SearchContext)

    async function getBlog(){
        const data = await fetch('/blogs/test.json', 
                                        {
                                            headers: {
                                                'Content-Type': 'application/json',
                                                'Accept': 'application/json'
                                            }
                                        })
        
        const res = await data.json()
        return res.blogs
    }

    const scrollToSection = (section) => {
        const element = document.getElementById(section);
        console.log(section)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    useEffect(() => {
        (async () =>{
            let res = await getBlog()
            let filteredRes = []

            if (searchContext.searchWords.length > 0){
                res.forEach((article) =>{
                    if (article.TITLE.includes(searchContext.searchWords)){
                        filteredRes.push(article)
                    }
                })
                setResult(filteredRes)
            } else {
                setResult(res)
            }

        })();
    }
    , [searchContext])
    
    return (
        <div className="blog-body-wrapper">


            <div className="blog-container">
                {result != null ? 
                    (result.map((element, index) =>{
                        
                        return (
                            <BlogCard id={element.TITLE} key={index} metadata={element}/>
                        )})):<></>}
                <div className="github-perma-container">
                    <img className="github-icon" src="/blogs/github-mark-white.png">
                    
                    </img>

                    <a id="github-link" href="https://github.com/NandaBgithub">
                        GitHub
                    </a>
                </div>
            </div>



            <div className="blog-content-container">
                <h3>Blog List</h3>
                <ul>
                    { result != null ?
                        (
                            result.map((element, index) => {
                                return (
                                    <li className="content-link" key={index} >
                                        <a onClick={() => scrollToSection(element.TITLE)}>{element.TITLE}</a>
                                    </li>
                                )
                            })
                        ) : <></>

                    }
                </ul>
            </div>
        </div>

    )
}

export default Blog