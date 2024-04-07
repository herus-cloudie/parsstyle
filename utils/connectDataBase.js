import mongoose from "mongoose";

export default async function ConnectDataBase(){
    console.log('connecting to Data-base')
    let URI = process.env.DB_URI;
    if(mongoose.connections[0].readyState) return console.log('Data-base have alredy connected')
    await mongoose.connect(URI)
    console.log('Data-base connected')
}