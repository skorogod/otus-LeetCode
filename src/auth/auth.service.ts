import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2'
import { IUser } from 'src/user/interfaces/user.interface';

@Injectable()
export class AuthService {
    constructor (
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        const passwordIsMatch = await argon2.verify(user.password, password)
        if (user && passwordIsMatch) {
          return user;
        }
        throw new UnauthorizedException('User or password are incorrect')
    }

    async login(user: Pick<IUser, 'id' | 'email' | 'username'>) {
        const {id, email, username} = user;
        return {
            id, email, username,
            token: this.jwtService.sign({id: user.id, username: user.username})
        }
    }
}
