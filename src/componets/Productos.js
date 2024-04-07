import React, {Component} from "react";
import Producto from "./Producto";

const styles ={
    productos : {
        display : 'flex',
        flexDirection : 'row',
        justifyContent : 'space-between'
    }
}

class Productos extends Component{
    render(){
       const {productos,agregarAlCarro} = this.props ;
       return (<div style={styles.productos}>
            {productos.map(
                (producto,index )=> <Producto 
                    agregarAlCarro = {agregarAlCarro}
                    key={index}
                    producto = {producto}
                />
            )}
       </div>)
    }
} 

export default Productos;