import { Router } from 'express'
import ScheduleController from '../controller/ScheduleController.js'

const scheduleController = new ScheduleController()
const router = Router()

router.get('/schedule', scheduleController.getAll)
router.get('/schedule/:id', scheduleController.getOne)
router.post('/schedule', scheduleController.create)
router.put('/schedule/:id', scheduleController.update)
router.delete('/schedule/:id', scheduleController.remove)

export default router
