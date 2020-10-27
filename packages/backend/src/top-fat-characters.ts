import { Context, Next } from 'koa';

interface Character {
  name: string;
  height: string;
  mass: string;
}

const SWAPI_URL = 'https://swapi.dev/api';

export default async function topFatCharacters(
  ctx: Context,
  next: Next
): Promise<void> {
  try {
    const response = await fetch(`${SWAPI_URL}/people`);
    const json = await response.json();

    const characters: Character[] = json.results;

    // TODO: Implement sorting of characters by BMI and return top 20

    ctx.body = JSON.stringify(characters);
    ctx.status = 200;
  } catch (error) {
    console.error(error);

    ctx.body = JSON.stringify((error as Error).message);

    ctx.status = 500;
  }

  await next();
}
