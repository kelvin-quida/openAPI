import express,{Request,Response} from 'express'

const app = express()

app.get('/books',(req:Request,res:Response) => {
    res.json({
        id:1,
        title:'Harry Potter'
    })
})

app.listen(3333, ()=>{
    console.log('running')    
})
