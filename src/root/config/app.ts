import { setupRoutes  } from './route'

import express from "express"

const app = express()
setupRoutes(app)
export default app