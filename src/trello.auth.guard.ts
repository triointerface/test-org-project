import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { Strategy } from 'passport-trello';

@Injectable()
export class TrelloAuth extends PassportStrategy(Strategy) {
    constructor() {

        super({
            consumerKey: 'e3afe3736d4ee8bce958dfa18d66d730',
            consumerSecret: '90c47c18d1f2646eaaffb75abf6409a9950f5a7027196992edcefdfca7e0a17a',
            callbackURL: `http://localhost:3000/trello-auth/login`,
            passReqToCallback: true,
            trelloParams: {
                scope: "read,write",
                name: "MyApp",
                expiration: "never",
            }
        });

    }
    async validate(
        req: Request, token: string, tokenSecret: string, profile: any, done: Function
    ): Promise<any> {
        const user = {
            token,
            tokenSecret
        };
        done(null, user);
    }
}