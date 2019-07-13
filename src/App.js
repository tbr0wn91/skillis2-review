import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import axios from 'axios';
import './App.css';

 class App extends Component {
 constructor(props){
   super(props);
   this.state = {
      inventory: []

}

 }

 componentDidMount(){
   this.getInventory();

 }

 getInventory = () => {
  axios.get('/api/inventory').then(res => {
    this.setState({
      inventory: res.data
    })
  })

 }

 render(){
   const { inventory } = this.state;
  return (
    <div className="App">
      <Header />
      <Dashboard inventory={inventory}/>
      <Form />
    </div>
  );
}



}

export default App;
