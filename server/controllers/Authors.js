const mongoose=require('mongoose')
const Author=mongoose.model('Author')

module.exports ={
    //routes
    index: (req,res) => {
        Author.find()
        .then(allAuthors=>{
            console.log('*'.repeat(25)+'ALL AUTHORS'+'*'.repeat(25))
            res.json({status:true,allAuthors:allAuthors})
            console.log('*'.repeat(25)+'ALL AUTHORS'+'*'.repeat(25))
        })
        .catch(err => res.json({status:false,err:err}))
    },
    create :(req,res) =>{
        Author.create(req.body)
        .then(addAuthor=>{
            res.json({status:true,addedAuthor:addedAuthor})
        })
        .catch(err=>{
            res.json({status:false,err:err})
        })
    },
    update :(req,res) =>{
        Author.updateOne({_id:req.params.id},{name:req.body.name},{runValidotars:true})
        .then(updatedAuthor=>{
            res.json({status:true,updatedAuthor})
        })
        .catch(err=>{
            res.json({status:false,err:err})
        })
    },
    delete :(req,res) =>{
        Author.deleteOne({_id:req.params.id})
        .then(res.json({status:true}))
        .catch(err=>{
            res.json({status:false,err:err})
        })
    },
    findOne :(req,res) =>{
        Author.findById({_id:req.params.id})
        .then(foundAuthor=>{res.json({status:true,foundAuthor:foundAuthor})
    })
    }
}