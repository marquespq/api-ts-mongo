import { SignUpController } from "./signup";
describe("signup Controller", () => {
  it("should return 400 if no name is provided", () => {
    //se ele não enviar o name no body, retorna um 400
    const sut = new SignUpController();
    const httpRequest = {
      body: {
        email: "any_email@mail.com",
        password: "any_password",
        passwordConfirmation: "any_password",
      },
    };
    const httpResponse = sut.handle(httpRequest);
    expect(httpResponse.statusCode).toBe(400);
  });
});
