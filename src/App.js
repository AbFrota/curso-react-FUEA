import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';


class ListaAutor  extends Component {
  
  constructor(){
    super();
    this.state = {
      autores:[
        {nome: 'Marco', email:'marco@gmail.com', senha:'12345'},
      ]
    }
  }

  listagem = ()=>{

  }
  
  render(){
    return (
      <div> 
        <table class="table table-striped table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">Senha</th>
    </tr>
  </thead>
  <tbody>
    
      {
        this.state.autores.map((item)=>{
            return(
              <tr>
              <th scope="row">1</th>
              <td>{item.nome}</td>
              <td>{item.email}</td>
              <td>{item.senha}</td>
    </tr>

            )
        })
      }

  </tbody>
</table>
         </div> 
    )
  }
}

function App() {
  return (
    <div className="App">
      <ListaAutor/>
       </div>
  );
}
export default App;
