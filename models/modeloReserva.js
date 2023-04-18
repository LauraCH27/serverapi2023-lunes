import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Reserva = new Schema({
    idHabitacion:{
        type: Number,
        required:true
    },
    nombre:{
        type: String,
        required:true
    },
    apellido:{
        type: String,
        required:true
    },
    telefono:{
        type: String,
        required:true
    },
    fechainicio:{
        type:Date,
        required:true
    },
    fechafinal:{
        type:Date,
        required:true
    },
    numeropersonas:{
        type:Number,
        required:true
    },
    estado:{
        type:Boolean
    }

})
export const modeloReserva=mongoose.model('reservas',Reserva)