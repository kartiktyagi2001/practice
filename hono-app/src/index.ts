import { Hono } from 'hono'

const app = new Hono()

//middleware(similar to express)
async function authMiddleware(c:any, next: any) {

  if(c.req.param=65){
    await next(); //idk why await next
  } else{
    return c.text("not authorized")
  }
}

app.use(authMiddleware)

//routing
app.get('/', authMiddleware, async(c) => {
  
  const body = await c.req.json(); //dont know why json conversion requires await

  console.log(body);
  console.log(c.req.query)
  console.log(c.req.query("param"))
  console.log(c.req.header)

  return c.json({
    message: "Hono Routing Working"
  })


});

export default app
