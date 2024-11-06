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
  export class DuplicateEmailError extends ApiError {
    constructor(message: string = 'Email already exists. Please use a unique email.') {
      super(409, message);
      this.name = 'DuplicateEmailError';
    }
  }
  