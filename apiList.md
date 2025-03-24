# DevTinder API

## Router : authRouter
- POST /signup
- POST /login 
- POST /logout

 ## Router : profileRouter
- GET /profile/view
- PATCH /profile/edit
- PATCH /profile/password

 ## Router : connectionRequestRouter
    // Sending connection request 
- POST /request/send/interested/:userId
- POST /request/send/ignored/:userId
    // received connection request 
- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId

 ## Router : userRouter
- GET /user/connections    // view all my connections
- GET /user/requests/received/:requestId
- GET /user/feed          // Gets you the profile of others users on platform  


Status : ignored, Intrested, accepted, rejected
