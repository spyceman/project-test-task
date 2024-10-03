import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
import { compareSync, hash } from 'bcrypt';
import UserAlreadyExistsException from '../exceptions/user-exists.exception';
import WrongCredentialsException from '../exceptions/wrong-credentials.exception';
import { User } from '../user/user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UserService) {}

  async register(registerDto: RegisterDto) {
    const { email, password, username } = registerDto;
    const existingUser = await this.userService.findByEmail(email);
    if (existingUser) {
      throw new UserAlreadyExistsException(registerDto.email);
    }
    const hashedPassword = await hash(password, 10);
    const newUser = await this.userService.create({username, email, password: hashedPassword});
    return await this.getUserViaJWT(newUser);
  }

  async login(loginDto: LoginDto) {
    const { email, password } = loginDto;
    const existingUser = await this.userService.findByEmail(email);
    if (!compareSync(password, existingUser.password) || !existingUser) {
      throw new WrongCredentialsException();
    }
    return await this.getUserViaJWT(existingUser);
  }

  async getUserViaJWT(user: User) {    
    const accessToken = jwt.sign({ id: user.id }, process.env.JWTSECRET, {
      expiresIn: `${process.env.EXPIRAIONTIMEACCESS}`,
    });
    return {
      id: user.id,
      email: user.email,
      user: user.username,
      accessToken,
    }
  }
}
