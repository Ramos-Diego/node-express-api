const express = require('express')
const app = express()
const helmet = require('helmet')
const cors = require('cors')

// Only grab environment variables from .env if app is not running on production
if (process.env.NODE_ENV !== 'prod') require('dotenv').config()

// Environment variables
// Create a .env file for production. Github will ignore it based on .gitignore.
const { PORT } = process.env

// Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet())

// Enable CORS
app.use(cors())

// Body parser middleware, handle JSON {req.body}
app.use(express.json())
// handle form submitions middleware {req.query}
app.use(express.urlencoded({ extended: false }))

// Import and use routers
app.use('/', require('./routes/index'))

app.listen(PORT, 'localhost', console.log(`Listening on http://localhost:${PORT}`))
