import { Router, Request, Response } from 'express'
import { request } from 'http'

const routes = Router()

routes.get('/', (request: Request, response: Response) => {
    return response.json({ message: 'Hello World 2' })
})

export default routes