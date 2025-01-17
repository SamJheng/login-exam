import * as Joi from 'joi';
import { ApiProperty } from '@nestjs/swagger';
export const loginSchema = Joi.object({
  email: Joi.string().email().required().messages({
    'string.email': 'Email must be a valid email address',
    'string.empty': 'Email is required',
  }),
  password: Joi.string().min(8).max(20).required().messages({
    'string.min': 'Password must be at least 8 characters long',
    'string.max': 'Password must be at most 20 characters long',
    'string.empty': 'Password is required',
  }),
});


export class LoginDto {
  @ApiProperty({
    description: 'User email address',
    example: 'user@example.com',
    required: true,
  })
  email: string;

  @ApiProperty({
    description:
      'Password with a minimum length of 8 and a maximum length of 20 characters',
    example: 'mypassword123',
    minLength: 8,
    maxLength: 20,
    required: true,
  })
  password: string;
}