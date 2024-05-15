import React from "react";
import redes from "../imagenes/redes.png"

const CompFooter = () => {
    return (

        <div>
            <div className="card-body">
                <h5 className="card-titel"> Direccion calle 121 #64 -25 </h5>
                <p className="card-text"> correo industriasrg@gmail.com - telefonos (601)-5234241 - 3214536253</p>
                <img src={redes} className="App-logo1" alt="logo"/>      
            </div>
            <div className=" card-footer text-muted" > horario lunes - viernes 8am - 7pm </div>
        </div>
    )
}

export default CompFooter;