import { HttpException, HttpStatus } from '@nestjs/common';

class UserAlreadyExistsException extends HttpException {
  constructor(email: string) {
    super(`User with email:${email} already exists`, HttpStatus.BAD_REQUEST);
  }
}

export default UserAlreadyExistsException;
