import mongoose from "mongoose";

export default async function conectaNaDb(){
    mongoose.connect('mongodb+srv://iugprofissional:guisena2013@cluster0.1asm2.mongodb.net/Spotify?retryWrites=true&w=majority&appName=Cluster0')

    return mongoose.connection;
}