import { Router } from 'express'
import ScheduleController from '../controller/ScheduleController.js'

const scheduleController = new ScheduleController()
const router = Router()

router.get('/schedule/', scheduleController.getAll.bind(scheduleController))
router.post('/schedule', scheduleController.create.bind(scheduleController))
router.put('/schedule/:id', scheduleController.update.bind(scheduleController))
router.delete('/schedule/:id', scheduleController.remove.bind(scheduleController))

export default router
