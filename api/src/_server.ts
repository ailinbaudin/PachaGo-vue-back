import server from "../src/common/config/server/index";
import envs from '../src/common/config/plugin/env/plugin.env-var';


const ASYNC_INITIAL = true;

//% SERVER CONFIG:
const { PORT } = envs;

//$ SERVER START:
const upServer = async () => {
  server.listen(PORT, () => { console.log(`Server listening on port ${PORT}`) })
}

upServer();
