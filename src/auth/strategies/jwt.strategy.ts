import { ExtractJwt, Strategy } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { IUser } from "src/user/interfaces/user.interface";
import { UserService } from "src/user/user.service";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get('JWT_SECRET')
        })
    }

    async validate(user: Pick<IUser, 'id' | 'username'>) {
        console.log(user.id)
        const userInfo = await this.userService.findOne(user.id)
        console.log(userInfo)
        return {
            id: userInfo.id, 
            username: userInfo.username,
            email: userInfo.email,
            image: userInfo.image
        }
    }
}