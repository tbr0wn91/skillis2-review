import React, {Component } from 'react';
import Product from "../Product/Product";

 export default class Dashboard extends Component {
    constructor(props){
        super(props);

        this.state = {

        }


    }













    render(){
        const { inventory } = this.props;
        const mappedInventory = inventory.map(product => {
            return <Product product={product} />
        })
        return (
            <div>
                Dashboard
                {mappedInventory}
            </div>
        )
    }
}

