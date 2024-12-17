import './Blog.css'
function BlogCard({id, metadata}) {
    function handleArticleClick(title){
        let formattedTitle = title.replace(/%20/g, "-")
        let oldhref = window.location.href
        let newhref = (oldhref + `blog/${formattedTitle}`).replace(/ /g, "-")
        window.location.href = newhref
    }

    // console.log(metadata.IMAGE)
    return (

        <div id={id} className="card-container">
            <img className="article-img" src={metadata.IMAGE}></img>
            <div className="text-container">
                <div><p className="text-title">{metadata.TITLE}</p></div>
                <div><p className="text-description">{metadata.DESCRIPTION}</p></div>
            </div>
            <button className="article-button" onClick={() => handleArticleClick(metadata.TITLE)}></button>
        </div>
    )
}

export default BlogCard