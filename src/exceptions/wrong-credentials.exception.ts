import { HttpException, HttpStatus } from '@nestjs/common';

class WrongCredentialsException extends HttpException {
  constructor() {
    super(`Wrong credentials provided`, HttpStatus.BAD_REQUEST);
  }
}

export default WrongCredentialsException;
