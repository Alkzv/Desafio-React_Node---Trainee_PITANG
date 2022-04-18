// import crypto from 'crypto'
// import ScheduleModel from '../model/ScheduleModel.js'
import Controller from '../controller/Controller.js'
class ScheduleController extends Controller {
  getAll (request, response) {
    // response.send(ScheduleModel)
  }

  getOne (request, response) {
    /*  const id = request.params.id
    const schedule = ScheduleModel.find((schedule) => schedule.id === id)
    if (schedule) {
      return response.send({ schedule })
    }
    response.status(404).send({ message: 'schedule not exist' }) */
  }

  create (request, response) {
    /*  const { name, birthDate, scheduleDate, scheduleTime } = request.body
    const schedule = { id: crypto.randomUUID(), name, birthDate, scheduleDate, scheduleTime }
    ScheduleModel.push(schedule)
    response.send(schedule) */
  }

  remove (request, response) {
    /* const id = request.params.id
    const indexToRemove = ScheduleModel.findIndex(schedule => schedule.id === id)
    const existSchedule = indexToRemove !== -1
    if (existSchedule) {
      ScheduleModel.splice(indexToRemove, 1)
      return response.status(200).send({ message: 'OK!' })
    }
    response.status(404).send({ message: 'schedule not exist' }) */
  }

  update (request, response) {
    /* const id = request.params.id
    const schedule = {
      id: id,
      name: request.body.name,
      birthDate: request.body.birthDate,
      scheduleDate: request.body.scheduleDate,
      scheduleTime: request.body.scheduleTime
    }
    const indexToChange = ScheduleModel.findIndex(schedule => schedule.id === id)
    const existSchedule = indexToChange !== -1
    if (existSchedule) {
      ScheduleModel[indexToChange] = schedule
      return response.status(200).send(ScheduleModel)
    }
    response.status(404).send({ message: 'schedule not exist' }) */
  }
}

export default ScheduleController
