/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prefer-const */
import { Context, Next } from 'koa';
import axios from 'axios';


// Replace this function with what is necessary to complete the mission! 🚀
export default async function topFatCharacters(
  ctx: Context,
  next: Next
): Promise<void> {
let data = [];
let nextParam:string;
  ctx.status=200;
  let response = await axios.get('https://swapi.dev/api/people')
     
     data.push(response.data.results)
     nextParam = response.data.next
     while(nextParam!== null){
      response = await axios
     .get(nextParam)
     data.push(response.data.results)
     nextParam = response.data.next
    
     }
     
  ctx.body = data;

  
  
  /*ctx.status = 501;
  ctx.body = JSON.stringify(
    'This method is not implemented yet, but when it is, it will be awesome 😎'
  );*/


  // Lets not forget to call the next middleware
  await next();
}
