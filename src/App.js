import React, {Component} from 'react';
import Header from "./components/Header/Header";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import './App.css';

 class App extends Component {
 constructor(props){
   super(props);
   this.state = {
      inventory: [
          {
            name: 'Hat',
            price: '100000000000',
            imgUrl: 'https://strattonhats.com/wp-content/uploads/IMG_1416.jpg'
          },
          {
            name: 'Shirt',
            price: '1',
            imgUrl: 'https://production-direct-carters.demandware.net/dw/image/v2/AAMK_PRD/on/demandware.static/-/Sites-carters_master_catalog/default/dwd7288ef5/productimages/293G455.jpg?sw=470'
          },
          {
            name: 'Shoe',
            price: '12',
            imgUrl: 'https://image.skechers.com/img/productimages/xlarge/52687_WMLT.jpg'
          }
        ]

}

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
