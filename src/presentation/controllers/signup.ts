import {
  MSG_ERROR_MISSING_NAME,
  MSG_ERROR_MISSING_EMAIL,
} from "../../utils/variableGlobal.utils";

export class SignUpController {
  handle(httpRequest: any): any {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error(MSG_ERROR_MISSING_NAME),
      };
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error(MSG_ERROR_MISSING_EMAIL),
      };
    }
  }
}
