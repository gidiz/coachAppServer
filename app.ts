import { Application } from 'https://deno.land/x/oak@v6.3.1/mod.ts';

import { connect } from './helpers/db.ts';
import router from './routes/main-router.ts';



connect();

const app = new Application();

app.use(router.routes());
app.use(router.allowedMethods());

app.listen({ port: 3000 });