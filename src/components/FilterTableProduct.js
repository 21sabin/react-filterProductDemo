import React, { Component } from 'react'
import products from '../Jsondata';
import ProductList from './ProductList';
import SearchBar from './SearchBar'

export default class FilterTableProduct extends Component {
  constructor(props){
    super( props );
    this.state={
        products:products,
        onStock:false,
        filterText:''
    }
}
    filterProductsByName=( product )=>{
       this.setState({filterText:product})
    }

    onStockChange=( flag )=>{
        this.setState({
          onStock:flag
        })
    }

  render() {
    return (
      <div>
          <SearchBar onFilterTextChange={this.filterProductsByName} onStockChange={this.onStockChange} onStock={this.state.onStock}/>
            <ProductList products={this.state.products} inStockOnly={this.state.onStock} filterText={this.state.filterText}/>
      </div>
    )
  }
}
