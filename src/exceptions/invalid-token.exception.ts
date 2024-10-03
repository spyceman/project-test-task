import { HttpException, HttpStatus } from '@nestjs/common';

class InvalidTokenException extends HttpException {
  constructor() {
    super(`Invalid access token`, HttpStatus.BAD_REQUEST);
  }
}

export default InvalidTokenException;
