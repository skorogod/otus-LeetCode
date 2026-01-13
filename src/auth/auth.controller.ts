import { Controller, Get } from '@nestjs/common';
import { UseGuards } from '@nestjs/common';
import { Post, Request } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../../src/decorators';

@Controller('auth')
export class AuthController {
    constructor(
        private readonly authService: AuthService
    ){}

    @Public()
    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Request() req) {
      return this.authService.login(req.user)
    }

    @Get('profile')
    async getProfile(@Request() req) {
      console.log("USER ", req.user)
      return req.user;
    }
}
