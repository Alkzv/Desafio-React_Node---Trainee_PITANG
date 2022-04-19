import Controller from './Controller.js'
import Joi from 'joi'
class ScheduleController extends Controller {
  constructor () {
    super('Schedule')
  }

  create (request, response) {
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
    super.create(request, response)
  }
}

export default ScheduleController
