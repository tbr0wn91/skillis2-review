import React, {Component } from 'react';

 export default class Form extends Component {
    constructor(props){
        super(props);

        this.state = {
            imgUrl: '',
            productName: '',
            price: ''

        }
    }

    handleInputs = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    resetInputs(){
        this.setState({
            imgUrl: '',
            productName: '',
            price: ''

        })
    }


    render(){
        const { imgUrl, price, productName} = this.state
        return (
            <div>
                Image Url:<input name="imgUrl" onChange={(e) => this.handleInputs(e)} value={imgUrl} />

                Product Name:<input name="productName" onChange={(e) => this.handleInputs(e)} value={productName} />

                Price:<input name="price" onChange={(e) => this.handleInputs(e)} value={price} />

                <button onClick={() => this.resetInputs()}>Cancel</button>
                <button>Add Inventory</button>
            </div>
        )
    }
}
