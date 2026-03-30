// TODO 1: Import Express

/*In server.js, import Express.

Hint:
- use the import keyword
- import from 'express'

Syntax hint:*/
   import Express from 'express';

// TODO 2: Create the Express app and store it in a variable named app

/*In server.js, create the app and store it in a variable named app.

Hint:
- call the imported express function

Syntax hint:*/
   const app = Express();

// TODO 3: Allow React to access the server

/*In server.js,

- import cors
- call the cors method inside the express app.

// Syntax hint:*/
    import cors from 'cors';

// and:*/

    app.use(cors);

// TODO 5: Create the home route "/"
/*In server.js, create the route for:
   http://localhost:3000/

The server should respond with:
   Hello from the back-end server

Hint:
- use app.get(...)
- use '/' as the route path
- use res.send(...)

Syntax hint:*/
   app.get('http://localhost:3000/', (req, res) => {
     res.send('Hello from the back-end server');
   });


// TODO 6: Create the "/about" route
/*In server.js, create the route for:
   http://localhost:3000/about

The server should respond with:
   This is the about route

Hint:
- use app.get(...)
- use res.send(...)

Syntax hint:*/
   app.get('http://localhost:3000/about', (req, res) => {
     res.send('This is the about route');
   });


// TODO 7: Create the "/student" route
/*In server.js, create the route for:
   http://localhost:3000/student

The server should respond with JSON like this:
   {
     name: 'Aisha',
     major: 'Computer Science'
   }

Hint:
- use res.json(...)
- send an object

Syntax hint:
   app.get('_________', (req, res) => {
     res.____({
       name: '_____',
       major: '________________'
     });
   });*/


// TODO 4: Start the server on port 3000
/*In server.js, start the server on port 3000.

When the server starts, print a message in the terminal.

Hint:
- use app.listen(...)
- first value is the port number
- second value is a function

Syntax hint:
   app.listen(____, () => {
     console.log('________________________________');
   });
*/