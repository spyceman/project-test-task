import { HttpException, HttpStatus } from '@nestjs/common';

class UserNotFoundException extends HttpException {
  constructor(id: string) {
    super(`User with id:${id} not found`, HttpStatus.BAD_REQUEST);
  }
}

export default UserNotFoundException;
