// import {connect, connection} from 'mongoose';
// import { Asul } from 'next/font/google';

// const conn={
//     isConnected:false
// }

// export async function connectDB(){
//     if(conn.isConnected) return;
//                            //mongodb+srv://wadewil101:v2j61CfeI5COrt9h@cluster0.znaqews.mongodb.net/
//                 //           mongodb+srv://wadewil101:v2j61CfeI5COrt9h@cluster0.znaqews.mongodb.net/
//     const db= await connect('mongodb+srv://wadewil101:v2j61CfeI5COrt9h@cluster0.znaqews.mongodb.net/instituto');
//     console.log(db.connection.db.databaseName)
//     conn.isConnected=db.connections[0].readyState
// }

// connection.on('connected',()=>{
//     console.log('mongo is Connected')
// })

// connection.on('error',(err)=>{
//     console.log('mongo connection error',err)
// })
import mongoose from "mongoose";
const {Mongo_DB} = process.env;

if(!Mongo_DB){
    throw new Error("La cadena de conexion es requerida")
}

export const connectDB=async()=>{
    try{
        const{connection}= await mongoose.connect(Mongo_DB);
        if(connection.readyState==1){
            console.log("Mongo DB conectado");
            return Promise.resolve(true);
        }
    }catch(error){
        console.log(error);
        return Promise.reject(false);
    }
}