import { Component } from "react";

// <button {...this.props} /> cuando dices esto
// es que a button le estas heredando todas las propiedades
// en el fondo le pasas el 'onClick' de producto y su titulo

const styles = {
    button :{
        backgroundColor : '#0A283E',
        color : '#FFF',
        padding : '15px 15px',
        border : 'none',
        borderRadius : '5px',
        cursor : 'pointer',
        
    }
}


class Button extends Component{
    render(){
        return (
            <button style={styles.button} 
            {...this.props} />
        )
    }
}

export default Button  ;
