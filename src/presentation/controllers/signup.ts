import { MSG_ERROR_MISSING_NAME } from "../../utils/variableGlobal.utils";

export class SignUpController {
  handle(httpRequest: any): any {
    return {
      statusCode: 400,
      body: new Error(MSG_ERROR_MISSING_NAME),
    };
  }
}
