import express, { Response ,Request, json} from 'express'
import cors from 'cors'
import route from './routes';
const app =  express();
app.use(cors())
app.use(json())
app.use(route)


const port = 3001

app.listen(port,()=> {
    console.log(`Servidor rodando na porta ${port}`)
})



