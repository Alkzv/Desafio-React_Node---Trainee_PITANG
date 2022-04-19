import prismaClient from '../prisma.js'
class Controller {
  constructor (model) {
    this.model = model
    this.client = prismaClient[model]
  }

  async getAll (request, response) {
    try {
      response.status(200).json(await this.client.findMany())
    } catch (error) {
      return response.status(400).json({ message: 'Unsuccessful Listing' })
    }
  }

  async create (request, response) {
    try {
      await this.client.create({ data: request.body })
      response.status(200).json({ message: 'Registration successfully Completed!' })
    } catch (error) {
      return response.status(400).json({ message: 'Unsuccessful Registration' })
    }
  }

  async remove (request, response) { // Opcional
    const { id } = request.params
    try {
      await this.client.delete({ where: { id } })
      return response.status(200).json({ message: 'Successfully deleted!!' })
    } catch (error) {
      return response.status(400).json({ error, message: 'Error deleting' })
    }
  }

  async update (request, response) {
    const { id } = request.params
    try {
      await this.client.update({ data: request.body, where: { id } })
      return response.status(200).json({ message: 'Successfully updated!!' })
    } catch (error) {
      return response.status(400).json({ error, message: 'Error updating' })
    }
  }
}

export default Controller
