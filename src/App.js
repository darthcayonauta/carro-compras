import { Component } from 'react';
import Productos from './componets/Productos';
import Layout from './componets/Layout';
import Navbar from './componets/Navbar';

import Title from './componets/Title';

class App extends Component{
 state = {
  productos : [
    {
      name:'Tomate',
      price : 1500,
      img:'/productos/tomate.jpg'},
    {
      name:'Arbejas',
      price : 2500,
      img:'/productos/arbejas.jpg'},
    {
      name:'Lechuga',
      price : 500,
      img:'/productos/lechuga.jpg' }
  ],
  carro: [
   // {
   //   name:'Tomate',
   //   price : 1500,
   //   img:'/productos/tomate.jpg', cantidad:1},
  ]
 }
 
 agregarAlCarro = (producto)=>{
  //console.log(producto);
  return this.setState({
    //añadimos elementos al arreglo vacío definido antes
    carro: this.state.carro.concat({
      ...producto, ///una copia del produco + cantidad
      cantidad:1
    })
  })
 }
 
  render(){
    console.log(this.state.carro);
    return(
     <div> 
      <Navbar />
      <Layout>
        <Title />
        <Productos 
          agregarAlCarro = {()=> this.agregarAlCarro()}
          productos = {this.state.productos}
        />
      </Layout>
    </div>
    )

  }
}


export default App;
