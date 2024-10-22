export class ApiError extends Error {
    constructor(readonly status: number, readonly message: string) {
      super(message);
    }
  }
  
  export class NotFoundError extends ApiError {
    constructor(readonly message: string = "Not found") {
      super(404, message);
    }
  }
  