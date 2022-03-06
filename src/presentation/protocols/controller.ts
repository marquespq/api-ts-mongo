import { httpRequest, httpResponse } from "./http";
export interface Controler {
  handle(httpRequest: httpRequest): Promise<httpResponse>;
}
