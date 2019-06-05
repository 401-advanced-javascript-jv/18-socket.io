# LAB - 18

## Socket.IO-based Application

### Author: Jesse Van Volkinburg

### Links and Resources
* [submission PR]()
* [travis](https://www.travis-ci.com/401-advanced-javascript-jv/18-socket.io)


### Setup
#### `.env` requirements
* `PORT` - Port Number
* `HOST` - Host name where the server is running
* `MONGODB_URI` - URL to the running mongo instance/db

#### Running the app
1. `npm run server` - to start the server
2. `npm run logger` - to start the logger
3. `npm run client <filename>` - to run the client and modify the provided file
  
#### Tests
* `npm test` to run tests
* What assertions were made?
  * Can it read a file?
  * Can it deal with a bad file?
  * Can it convert a buffer to uppercase string?
  * Can it write a file?
* What assertions need to be / should be made?
  * Does the server listen?
  * Does the client connect?

