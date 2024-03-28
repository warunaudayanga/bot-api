import { Injectable } from "@nestjs/common";
import { sign } from "jsonwebtoken";

@Injectable()
export class BotService {
    constructor() {}
    generateJwt() {
        const clientId = "cs-504839b8-3cd0-5d61-8a14-96538fee44c5";
        const clientSecret = "xuCyky56aTLFJpassUhoJaKVIjW+Kaj2//fzHtzbsOM=";
        const emailId = "waruna.u@astuteslab.com";
        const jwt = sign(
            {
                aud: "https://idproxy.kore.ai/authorize",
                iss: clientId, //or kore_iss
                sub: emailId, //or kore_sub
                isAnonymous: false,
                identityToMerge: "anonymoususer1@test.com", //to map anonymous user
            },
            clientSecret,
            { algorithm: "HS256", expiresIn: "1h" },
        );

        return { jwt };
    }
}
