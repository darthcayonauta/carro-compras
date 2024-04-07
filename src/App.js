import { Component } from 'react';
import Productos from './componets/Productos';
import Layout from './componets/Layout';

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
  ]
 }
 
 
  render(){
    return(
     <div> 
      <Layout>
      <Productos 
        agregarAlCarro = {()=> console.log('soon')}
        productos = {this.state.productos}
      />
      </Layout>
    </div>
    )

  }
}


export default App;
