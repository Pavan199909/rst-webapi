const express = require('express')
const app = express()
const questionss = [
    {
        question:"How to install pyhton",
        slug:"how-to-install-python",
        votes:3,
        views:10,
        tags:"python,pip,query"
    },
    {
        question:"How to install vscode",
        slug:"how-to-install-vscode",
        votes:4,
        views:11,
        tags:"python,pip,query"
    },
    {
        question:"How to install database",
        slug:"how-to-install-DB",
        votes:6,
        views:15,
        tags:"python,pip,query"
    },
]

const users=[
    {
        user:"pavan",
        follower:100,
        location:"hyd"
    },
    {
        user:"kummar",
        follower:50,
        location:"vij"
    },
    {
        
        user:"sridhar",
        follower:150,
        location:"rjh"
    }
]
 const tags=[
    {
        askques:2491163,
        subject:"javascript",
        queries:1500
    },
    {
        askques:2491163,
        subject:"Python",
        queries:1000
    },
    {
        askques:2491163,
        subject:"DSA",
        queries:1100
    }
 ]
 const companies=[
    {
        cname:"SLC",
        loc:"hyd",
        job:"FSd"
    },
    {
        cname:"pvc",
        loc:"beng",
        job:"FSd"
    },
     {
        cname:"bajaj",
        loc:"vij",
        job:"FSd"
    }
 ]

app.get('/',(req,res)=>{
    res.send("home")
})
app.get('/questions',(req,res)=>{
    res.send(questionss)
})
app.get('/questions/:slug',(req,res)=>{
    const slug=req.params.slug
    questionss.map(obj=>{
        if(obj.slug===slug){
            res.send(obj)
        }
       
    })
    res.send("question not found")
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.get('/tags',(req,res)=>{
    res.send(tags)
})
app.get('/jobs/companies',(req,res)=>{
    res.send(companies)
})
app.listen(3000,()=>{
    console.log("server was listening....")
})