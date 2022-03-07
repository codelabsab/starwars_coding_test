import Koa from 'koa';
import Router from '@koa/router';
import Cors from '@koa/cors';
import topFatCharacters from './top-fat-characters';

function main() {
  // Server setup
  const port = 3000;
  const app = new Koa();
  const router = new Router();

  router.get('/top-fat-characters', topFatCharacters);

  app.use(Cors());
  app.use(router.routes()).use(router.allowedMethods());

  // This is where the magic happens ✨
  console.log(`The server is running at port ${port}`);
  app.listen(port);
}

// Lets start the main method
main();
