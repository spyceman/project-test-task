import { ApiProperty } from "@nestjs/swagger";

export class RegisterDto {
  @ApiProperty({ example: 'alex', description: 'user name' })
  username: string;

  @ApiProperty({ example: 'example@mail.com', description: 'user email' })
  email: string;

  @ApiProperty({ example: '123', description: 'user password' })
  password: string;
}
