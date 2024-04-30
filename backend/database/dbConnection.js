import mongoose from "mongoose";

//const url = 'mongodb+srv://pandeynaveencsjmu2020:2C8WrsyU0qg0d03k@cluster0.bwnsaw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const url='mongodb+srv://pandeynaveencsjmu2020:2C8WrsyU0qg0d03k@cluster0.bwnsaw2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
export const dbConnection = () => {
  mongoose.connect(url, {
      dbName: "MERN_STACK_HOSPITAL_MANAGEMENT",
    })
    .then(() => {
      console.log("Connected to database!");
    })
    .catch((err) => {
      console.log("Some error occurred while connecting to the database:", err);
    });
};
