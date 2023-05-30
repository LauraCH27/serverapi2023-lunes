import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Reserva = new Schema({
    idHabitacion:{
        type: String,
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
    }
})
export const modeloReserva=mongoose.model('reservas',Reserva);