import Controller from './Controller.js'
import Joi from 'joi'
class ScheduleController extends Controller {
  constructor () {
    super('Schedule')
  }

  async create (request, response) {
    const schema = Joi.object({
      name: Joi.string().min(2).max(255).required(),
      birthDate: Joi.date().raw().required(),
      schedule: Joi.date().greater('now').raw().required()
    })
    const schemaValidation = schema.validate(request.body)
    if (schemaValidation.error) {
      return response.status(400).json({
        error: schemaValidation.error.details.map(({ message }) => message),
        message: 'invalid data'
      })
    }
    const checkDayAvailability = await this.checkDayAvailability(request, response)
    const checkDayTimeAvailability = await this.checkDayTimeAvailability(request, response)

    if (!checkDayAvailability) {
      return response.status(400).json({ message: 'Unavailable vacancies for this day' })
    } else if (!checkDayTimeAvailability) {
      return response.status(400).json({ message: 'Unavailable time for this day' })
    }

    super.create(request, response)
  }

  async getAll (request, response) {
    const { typeOrderBy } = request.params
    try {
      response.status(200).json(await this.client.findMany({
        orderBy: {
          schedule: typeOrderBy
        }
      }))
    } catch (error) {
      return response.status(400).json({ message: 'Unsuccessful Listing' })
    }
  }

  async checkDayAvailability (request, response) {
    const { schedule } = request.body
    const fromDate = schedule.substring(0, 10)
    const toDate = fromDate.substring(0, 8) + ((parseInt(fromDate.substring(8, 10)) + 1).toString())

    try {
      const numberSchedulesDay = await this.client.count({
        where: {
          schedule: {
            gte: new Date(fromDate),
            lt: new Date(toDate)
          }
        }
      })
      if (numberSchedulesDay < 20) {
        return true
      }
      return false
    } catch (error) {
      return response.status(400).json({ message: 'Unsuccessful Listing' })
    }
  }

  async checkDayTimeAvailability (request, response) {
    const { schedule } = request.body

    try {
      const numberOfSchedulesAtTheSameTimeOfTheDay = await this.client.count({
        where: {
          schedule: {
            equals: schedule
          }
        }
      })
      if (numberOfSchedulesAtTheSameTimeOfTheDay < 2) {
        return true
      }
      return false
    } catch (error) {
      return response.status(400).json({ message: 'Unsuccessful Listing' })
    }
  }
}

export default ScheduleController
