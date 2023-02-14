const axios = require('axios');
require("dotenv").config();


const todoService = async () => {
    console.log("Real Todos");
    return await axios.get(`${process.env.todosURL}`)
};

const todoServiceById = async (id) => {
    console.log("real todos by ID");
    return await axios.get(`${process.env.todosURL}${id}`);
};

module.exports = { todoService, todoServiceById };