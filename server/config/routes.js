const Authors=require('./../controllers/authors')
const path=require('path')
module.exports=(app)=>{
    app.get('/authors',Authors.index)
    app.post('/authors',Authors.create)
    app.get('/authors/:id',Authors.findOne)
    app.put('/authors/:id',Authors.update)
    app.delete('/authors/:id',Authors.delete)

    app.all("*",(req,res,next)=>{
        res.sendFile(path.resolve('public/dist/public/index.html'))
    })
}