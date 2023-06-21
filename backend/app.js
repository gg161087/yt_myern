import express from 'express';
import cors from 'cors';

import { PORT, HOST } from './config.js'
import db from './database/db.js';
import blogRoutes from './routes/blog.routes.js';

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api', blogRoutes)

try {
    await db.authenticate()
    console.log('conex db ok')
} catch (error) {
    console.log(`error de conexion: ${error}`)
}

app.listen(PORT, () => {
    console.log(`server running in http://${HOST}:${PORT}`)
})