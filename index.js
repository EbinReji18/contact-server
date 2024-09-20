const jsonServer=require('json-server')

const contactServer=jsonServer.create()

const middleware=jsonServer.defaults()
const router=jsonServer.router('db.json')

contactServer.use(middleware)
contactServer.use(router)

const PORT=3000 || process.env.PORT

contactServer.listen(PORT,()=>{
    console.log("Server Running at:"+PORT)
})