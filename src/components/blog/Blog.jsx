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
        <div className="blog-container">
            {result != null ? 
                (result.map((element, index) =>{
                    return (
                        <BlogCard key={index} metadata={element}/>
                    )})):<></>}
        </div>

    )
}

export default Blog