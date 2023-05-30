import { modeloReserva } from "../models/modeloReserva.js"
import { ServicioReserva } from "../services/ServiciosReserva.js"
import { ServicioHabitacion } from "../services/ServiciosHabitacion.js"


export class ControladorReservas{
    constructor(){}

    async buscandoReserva(req,res){
        let idReserva=req.params.idReserva
        let servicioReserva = new ServicioReserva() 
        
        try{
            res.status(200).json({
                "mensaje":"Exito buscando la reserva..."+idReserva,
                "Reserva":await servicioReserva.buscarPorId(idReserva),
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }


    async buscandoReservas(req,res){
        let servicioReserva=new ServicioReserva();
        try{
            res.status(200).json({
                "mensaje":"Exito buscando las reservas de los clientes....",
                "reservas":await servicioReserva.buscarTodas()
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva "+error
            })
        }
    }

    async creandoReservas(req,res){
        let datosReserva= new modeloReserva();
         datosReserva=req.body
        let objetoservicioReserva = new ServicioReserva()
        let objetoHabitacion= new ServicioHabitacion()
        let habitacion= await objetoHabitacion.buscarPorId(datosReserva.idHabitacion)
        let fechainicioreserva = new Date(datosReserva.fechainicio).getTime()
        let fechafinalreserva = new Date(datosReserva.fechafinal).getTime()
        let dias = fechafinalreserva-fechainicioreserva
        dias= dias/(1000*60*60*24)
        Math.round(dias)
  
        try{
            if (fechafinalreserva<fechainicioreserva) {
                res.status(400).json({
                    "mensaje":"la fecha final no debe ser mayor de la fecha inicio"
                })
            } else{
                if (habitacion===null) {
                    res.status(400).json({
                        "mensaje":"no se encuentra la habitacion"
                    })
                } else if(datosReserva.numeropersonas>habitacion.numeropersonas){
                    res.status(400).json({
                        "mensaje":"la cantidad excede las personas de la habitacion"
                    })
                }else{
                    // await objetoservicioReserva.crearReserva(datosReserva)
                    console.log(fechafinalreserva)
                    res.status(200).json({
                        "mensaje":"Exito agreando una reserva..."
                    })}            
        }}
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion de la reserva"+error
            })
        }
    }

    async editandoReserva(req,res){
        let datosReserva=req.body;
        let idReserva=req.params.idReserva;
        console.log(datosReserva);
        console.log(idReserva);

        let servicioReserva=new ServicioReserva()

        try{
            await servicioReserva.editarReserva(idReserva,datosReserva)
            res.status(200).json({
                "mensaje":"Exito editando las Reserva..."
            })
        }
        catch(error){
            res.status(400).json({
                "mensaje":"Fallamos en la operacion " + error
            })
        }
    }

}