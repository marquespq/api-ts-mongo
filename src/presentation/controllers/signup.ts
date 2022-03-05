import { httpRequest, httpResponse } from "../protocols/http";
import { badRequest } from "../helpers/http-helpers";
import { MissignParamError } from "../errors/missing-param-error";

export class SignUpController {
  handle(httpRequest: httpRequest): httpResponse {
    const requiredFields = [
      "name",
      "email",
      "password",
      "passwordConfirmation",
    ];
    for (const field of requiredFields) {
      if (!httpRequest.body[field]) {
        return badRequest(new MissignParamError(field));
      }
    }
  }
}
