import React, { useEffect, useState } from "react";
import remarkGfm from "remark-gfm";
import ReactMarkdown from "react-markdown";
import './Article.css'

function Article({ title }) {
  const [markdownContent, setMarkdownContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Fetch the markdown file
    fetch(`/blogs/${title}.md`, 
        {
            headers: {
              'Content-Type': 'text/markdown',
            }
        }
    )
      .then((response) => response.text())
      .then((text) => {
        console.log("Markdown content fetched:", text); 
        setMarkdownContent(text);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error loading markdown file:", error);
        setHasError(true);
        setIsLoading(false);
      });
  }, [title]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error loading article</div>;
  }

  return (
    <div className="article-container">
      <nav className="article-nav">
        <a href="/">Home</a>
      </nav>
      <div className="article-content-container">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdownContent}</ReactMarkdown>
      </div>
    </div>

  );
}

export default Article;
