import app from "./app.js";
import { mongoDbConnection } from "./config/dbConnection.js";

//connect mongoDb
mongoDbConnection();

app.listen(process.env.PORT, () => {
    console.log(`server is listen ${process.env.PORT}`)
})