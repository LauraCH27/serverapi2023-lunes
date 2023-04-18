import mongoose from 'mongoose';
export async function establecerconexion(){
    try{
       await mongoose.connect(process.env.DATABASE)
       console.log("exito conectándonos a BD")

    }catch(error){
        console.log("fallamos en la conexión a BD"+ error)
    }

}