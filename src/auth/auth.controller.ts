import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiCreatedResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @ApiOperation({ summary: 'Register user' })
  @ApiCreatedResponse({
    description: 'New user info and access token',
  })
  @Post('register')
  register(@Body() regidterDto: RegisterDto) {
    return this.authService.register(regidterDto);
  }

  @ApiOperation({ summary: 'Login user' })
  @ApiCreatedResponse({
    description: 'User info and access token',
  })
  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }
}
