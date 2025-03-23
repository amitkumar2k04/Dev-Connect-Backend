- EPISODE 3 CREATING OUR EXPRESS SERVER
- Installed express
- create a server
- Listen to port 3000
- write request handlers for /test, /hello
- Installed nodemon and update script inside package.json 
- What are dependencies?
- what is the use of "-g" while npm install
- difference between caret and tilda (^ vs ~)


- EPISODE 4 || ROUTING AND REQUEST HANDLERS
- play with routes and route extensions (e.x - /, /hello, /hello/2)
- Order of the routes matters a lot
- Install Postman app and Make a Workspace/collections > test API call 
- Write logic to handle GET, POST, PATCH, PUT, DELETE - API calls and test them on POSTMAN 
- Explore routing and explore use of ?, +, (), * - in the routes 
- use of regex in the routes /a, /.fly$/
- How to reading the Queary params in the routes 
- Reading the dynamic routes


-- Episode-05 | Middlewares & Error Handlers
- next()
- next function and errors along with res.send()
- app.use("/route", rH, (rH2, rH3), rH4)
- What is Middleware?
- How ExpressJs handles request behind the schene. Ans- It goes to the middleware chain and if anybody matches     gives the response back.
- Difference between app.use And app.all in expressJs.
- Why do we actually need middleware.
- Error handling using -  app.use ("/", (err, req, res, next) => {});


-- Episode-06 | Database, Schema & Models | Mongoose
- create a free cluster on MongoDB
- install mongoose library 
- connect your application to <connection-url>/DevTinder
- call the connectDB function and connect to database before starting application on 3000
- create a userSchema & userModel
- create POST /signup API calls to add data into the database
- push some data-documents using API calls from postman
- Error Handling using try-catch


Episode-07 | Diving into the APIs
- What is the difference between Javascript object and JSON.
- Add the express.json middleware to your app
- Make signUp API dynamic to receive data from the end your
- get user by emailId
- get user by ID
- created a delete user api
- Add Api for Update & Delete a user
- Explore Mongoose Docs Api for models
- Explore from docs - What are the options in a Model.findOneAndUpdate Api
- Create a Api to update a user with only single emailId


Episode-08 | Data Sanitization & Schema Validations
- Explore Schema types options from docs
- Add required, unique, lowercase, min, minLength, trim, defalut
- create - custom validate function
- Improve DB schema - put all appropriate validations on each fields in Schema
- Add timestamps to the users schema 
- Add API level validations on patch request & signUp post API 
- Data Sanitizing - Add API level validations on each fields.
- Installed library - npm validator 
- Explore validator library functions & use validator functions for password, emailId, photoUrl
- never trust req.body 


Episode-09 | Encrypting Passwords
- Validate data in signup API 
- Install npm bcrypt library 
- Create password hashed using bcrypt.hash() & save the user with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid


Episode-10 | Authentication, JWT & Cookies
- install cookie-parser
- just send dummy cookie to user 
- Create GET (/profile) api and check if you get the cookie back 
- install jsonWebToken 
- In login api, After email & pass validation create a JWT token and sends back to user in cookies.
- Read the cookies inside your profile API and find the logged in user.
