import { Router } from 'express'
import ScheduleRoute from '../routes/ScheduleRoute.js'

const router = Router()

router.use(ScheduleRoute)

export default router
