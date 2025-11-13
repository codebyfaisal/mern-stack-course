# EXPRESS JS
Express js is a node js framework which is used to build web applications.
Express js is also a npm package which can be installed using 
```powershell
npm install express
```
Express js is responsible for receiving requests from the client and sending responses to the client.
Express js that creates routes and handles HTTP requests and responses.

## Framework
A framework is a pre structured set of rules and tools that tells you how to build your application. 
It gives you a fixed flow — you must follow its structure to make things work, though you can still customize parts within that flow.

# Routing
Routes: In below link we have routes after .com that is `en` and `guide` and `routing.html`

https://expressjs.com/en/guide/routing.html

by default if the link is only upto .com e.g `https://expressjs.com` then it will be `/`

# Middleware
Middleware is a function that has access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle.

mostly middlewares are in the middle of the request and to the route.

```powershell
# SERVER Accept Request
|request| --- route --- requestHandler
# OR

request --- middleware --- route --- requestHandler

# OR

request --- middleware --- route --- middleware --- requestHandler

# Response send to client
```

```powershell
# SERVER Accept Request
📡  Incoming Request
        │
        ▼
 ┌─────────────────────────────┐
 │          Request            │
 └─────────────────────────────┘
        │
        ▼
 ┌─────────────────────────────┐
 │         Middleware          │  (optional)
 └─────────────────────────────┘
        │
        ▼
 ┌─────────────────────────────┐
 │           Route             │
 └─────────────────────────────┘
        │
        ▼
 ┌─────────────────────────────┐
 │   Route Middleware (opt.)   │  (optional)
 └─────────────────────────────┘
        │
        ▼
 ┌─────────────────────────────┐
 │       Request Handler       │
 └─────────────────────────────┘
        │
        ▼
 ┌─────────────────────────────┐
 │       Response Sent         │
 │          to Client          │
 └─────────────────────────────┘

# Response send to client
```

# Error Handling
Error handling is also known as error middleware. It is a middleware function that is used to handle errors that occur during the execution of a request or during managing the request.