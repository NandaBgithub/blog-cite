import './About.css'
import Author from '../author/Author.jsx'

function About(){
    console.log('rendered')
    return (
        <div>
            <nav className="article-nav">
                <a href="/">Home</a>
            </nav>
            <div className="about-container">
                
                <div className="about-description">
                    <Author/>
                    <p id="about-p">A blog where I just rant and yapp.</p>
                </div>


            </div>
        </div>
            

    )
}

export default About;