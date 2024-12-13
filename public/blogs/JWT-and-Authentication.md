### Simple JWT Authentication System Design
![alt text](/blogs/Images/image-1.png)

**Intuition**

- User sends login or registration details to the API that generates a token and sends token to send back to the user.

    How is a token generated? 
\
&nbsp;

    &emsp; In the case of authentication, when users send   their username and password to a server through a secure TLS or SSL channel, the information is then encrypted using the server's secret key to create an "access token" which is the JWT token needed for users to access any resources that require authorisation. 

    What are these secret keys, where to store them?  
\
&nbsp;

    There are plenty key generating libraries out there to generate keys that work well with JWT standards, storing them can be done using a project's environment variables. 

    Where is it stored? 
\
&nbsp;

    In general, when it comes to storage of data, there are three main locations. 
    1. Memory (this is memory cache of the browser that is not cleared unless the page is refreshed).
    2. Local storage, this is the user's local browser storage where data can persist until the browser is closed.
    3. Cookies are part of the browser's storage, but, it is a small text file that is automatically sent from the browser to a connected endpoint for each HTTP request.
    4. The database.

    - Based off of surface level research, the best practice seems to store the access tokens with short expiry time within memory. Meanwhile, the refresh tokens can be stored as cookies on the client side, and in the database in the server side. 

    Wait theres a refresh token now?
    - Yes, asides from the access token used to grant user access to certain clientside and API routes, the refresh token is used to re-issue an access token. 
    - The refresh token also can expire. But during its lifetime, it allows clientside to re-issue access tokens without having to fill in a login form again.
 
    What does an access token look like?
    ![alt text](/blogs/Images/image.png)

    From the image, there are three components to a json web-token. The header, payload, and verification signature, all of which utilise some sort of encryption to encrypt the very data stored within these tokens.

    How should the client be sending the JWTs over to the API for validation?
\
&nbsp;

    The tokens should be sent within a HTTP header in the authorization header.
    ![alt text](/blogs/Images/image-2.png) 


- Everytime a token is sent to the server, the server extracts the information from the sent token using the user's private keys, then validates the information in the tokens before allowing access.

#### What are JWTs
Two types of tokens, 
1. Signed
2. Encrypted

This project is mainly concerned with signed tokens since they can verify the integrity of information contained within it. For this reason it is used in user authorisation.