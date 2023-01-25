const app = require("./app");
const { connectDatabase } = require("./config/database");
connectDatabase();
app.listen(process.env.Port, ()=>{
    console.log(`Process is Running on Port ${process.env.Port}`);  
})