import { badRequest, serverError, ok } from '../../helpers/http-helpers'
import {
  Controler,
  httpRequest,
  httpResponse,
  EmailValidator,
  AddAccount
} from './signup-protocols'
import { InvalidParamError, MissignParamError } from '../../errors'

export class SignUpController implements Controler {
  private readonly emailValidator: EmailValidator
  private readonly addAccount: AddAccount

  constructor (emailValidator: EmailValidator, addAccount: AddAccount) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle (httpRequest: httpRequest): Promise<httpResponse> {
    try {
      const { name, email, password, passwordConfirmation } = httpRequest.body

      const requiredFields = [
        'name',
        'email',
        'password',
        'passwordConfirmation'
      ]
      for (const field of requiredFields) {
        if (!httpRequest.body[field]) {
          return badRequest(new MissignParamError(field))
        }
      }

      if (password !== passwordConfirmation) {
        return badRequest(new InvalidParamError('passwordConfirmation'))
      }

      const isValid = this.emailValidator.isValid(email)
      if (!isValid) {
        return badRequest(new InvalidParamError('email'))
      }
      const account = await this.addAccount.add({
        name,
        email,
        password
      })

      return ok(account)
    } catch (error) {
      return serverError()
    }
  }
}
