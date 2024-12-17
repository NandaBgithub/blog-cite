# The Three Layer Framework
\
&nbsp;
My personal method of filtering through information and avoiding rabbit holes.
\
&nbsp;

When working on a project, it is extremely easy to tunnel vision into implementation, especially in the field of web-dev where pre-existing tools and abstraction are often taken at face value, it is necessary for there to be some sort of filtering and categorisation process for me to utilise in order to truly extract a deeper and more transferable understanding of concepts that can be applied not only to web-development but possible to other programming disciplines. 
\
&nbsp;

I introduce, the idea of the three layer framework, the three categories that information that we learn from miscellaneous documentation, or other mediums into categories sorted by how fundamental they are or how I would like to call it, their "fundamentality".

1. Shallow category 
\
&nbsp;

This category encompases API functions, syntax and other forms of knowledge that may be tool specific.  I categorise shallow knowledge as vast, often high level abstractions, API functions, library functions, syntactical sugars and so on. You can forget these things the moment you write them because you can always search the documentation. 
\
&nbsp;

How important?
They're good to remember temporarily, but I tend to only remember parts of it, at least enough to be able to search for it fast within the documentations and by fast I mean eg. within 2-3 minutes of searching or less.
\
&nbsp;

...Examples
- Nodejs module object and using it to export modules eg. module.export or using export shortcut syntax
- Routing in javascript API window.location or even fetch() 
\
&nbsp;

2. Mid category
\
&nbsp;

This category includes design choices, technology choices that may be project-specific. For example, the way we setup project architecture to better work with frameworks and tools. This includes specific database choices, cloud providers, service functionalities, the actual framework choices, testing procedures and pipelines and so on.
\
&nbsp;

How important?
These are very important to remember for the sake of project setup, and architecture, the implications of these choices are substantial, so even at this level, as a developer, I feel like knowing the alternatives, tradeoffs of various decisions is highly beneficial.
\
&nbsp;

...Examples
- The ability to connect once in a database, and be able to query the database
from different files
- Template engines (ejs)
- The use of cloud db providers
- Amazon s3 bucketing, CDN
- Bundler choices (web-pack, vite)
- MVC pattern
- Project deployment options eg. vercel, or docker + cloud provider's vms
