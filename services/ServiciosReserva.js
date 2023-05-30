import { modeloReserva } from "../models/modeloReserva.js";

export class ServicioReserva{

    constructor(){}

    async crearReserva(datosReserva){
        let reservaNueva=new modeloReserva(datosReserva);
        return await reservaNueva.save();
    }
    async buscarTodas(){
        let reservasConsultadas=await modeloReserva.find()
        return reservasConsultadas;
    }
    async buscarPorId(idReserva){
        let reservaConsultada=await modeloReserva.findById(idReserva)
        return reservaConsultada
    }
    async editarReserva(idReserva,datosReserva){
        return await modeloReserva.findByIdAndUpdate(idReserva,datosReserva)
    }
}