import "dotenv/config";
import * as env from "env-var";

const envs = {
    //% PRINTS:
 PORT: env.get("PORT").required().asPortNumber(),
};


export default envs;