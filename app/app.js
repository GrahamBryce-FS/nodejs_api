const express = require('express');
const todosRouter = require("../router/todosRouter");
const app = express();
// this is to use the http://localhost:3000
app.get("/", (req, res, next)=>{
    res.status(200).json({message: 'service is up'});
});

// router middleware 
app.use("/todos", todosRouter);

// adding middleware handle errors or bad url paths
app.use((req,res,next)=>{
    const error = new Error("NOT FOUND!!");
    error.status = 404;
    next(error)
});


app.use((error, req, res, next)=>{
    res.status(error.status || 500).json({
        error:{
            message: error.message,
            status: error.status,
            method: error.method,
        },
    });
});

module.exports = app;

