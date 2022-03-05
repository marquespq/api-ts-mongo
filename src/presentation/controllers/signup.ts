import { httpRequest, httpResponse } from "../protocols/http";
import { badRequest } from "../helpers/http-helpers";
import { MissignParamError } from "../errors/missing-param-error";

export class SignUpController {
  handle(httpRequest: httpRequest): httpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissignParamError("name"));
    }
    if (!httpRequest.body.email) {
      return badRequest(new MissignParamError("email"));
    }
  }
}
