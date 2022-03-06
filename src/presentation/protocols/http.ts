interface httpResponse {
  statusCode: number
  body: any
}

interface httpRequest {
  body?: any
}

export { httpRequest, httpResponse }
