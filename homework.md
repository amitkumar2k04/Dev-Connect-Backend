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
- Create password hashed using <bcrypt.hash()> & save the user with encrypted password
- Create login API
- Compare passwords and throw errors if email or password is invalid


Episode-10 | Authentication, JWT & Cookies
- install cookie-parser
- just send dummy cookie to user 
- Create GET </profile> api and check if you get the cookie back 
- install jsonWebToken 
- In login api, After email & pass validation create a JWT token and sends back to user in cookies.
- Read the cookies inside your profile API and find the logged in user.
- Add userAuth middleware 
- Add the userAuth middleware in /profile API and a new sendConnectionRequest API 
- Set the expiry of JWT token & cookies Expiry

Episode-11 | Diving into the APIs and express Router
 - Explore Tinder APIs
 - create a list of all APIs you can think of in DevTinder
 - Group multiple routes under respective routers
 - Read documentation for express.router
 - create route folder for managing auth, profile, request routes
 - create authRouter, profileRouter, requestRouter 
 - Import these routers in app.js


Episode-13 | ref, Populate & Thought process of writing APIs
 - Read about ref & populate in Mongoose  https://mongoosejs.com/docs/populate.html
 - Create GET api /user/requests/received/ with all the checks
 - Create GET /user/collections


 Episode-14 |Building Feed API & Pagination
     - Apply logic to build feed API 
     - Explore the $nin, $and, $ne and other query comparision operators
 
          ADDING PAGINATION 
               /feed?page=1&limit=10 =>  01 - 10   =>    .skip(0)   &  .limit(10)
               /feed?page=2&limit=10 =>  11 - 20   =>    .skip(10)  &  .limit(10)
               /feed?page=3&limit=10 =>  21 - 30   =>    .skip(20)  &  .limit(10)


 ## Razorpay payment Gateway Integration 
      PART: 01
       - Created a UI for premium page 
       - Creating an API for create order in backend
       - Added my key & secrets in .env file 
       - Initialize Razorpay in utils 
       - creating order on RazorPay
       - Craeted Schema & model 
       - Saved the order in payments collection 
       PART : 02
       - ref Docs: https://razorpay.com/docs/payments/server-integration/nodejs/integration-steps/#api-sample-code
       - ref - https://github.com/razorpay/razorpay-node/blob/master/documents/webhook.md
       - ref : https://razorpay.com/docs/webhooks/validate-test/
       - ref : https://razorpay.com/docs/webhooks/payloads/payments/
       - Creating API for webhooks