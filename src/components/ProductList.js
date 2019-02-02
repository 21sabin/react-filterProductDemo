import React, { Component } from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow'

export default class ProductList extends Component {
  render() {
    console.log(this.props.filterText,"filterText")
      let lastCategory = null ;
      let rows =[]
        this.props.products.map( product =>{
          if (this.props.inStockOnly && !product.stocked) {
            return;
          }
          if( product.name.indexOf(this.props.filterText) === -1){
            return ;
          }
            if( product.category == lastCategory){
              rows.push( <ProductRow product={ product }/>) 
            }else{
              rows.push( <ProductCategoryRow category={product.category}/>) ;
              rows.push( <ProductRow product={product}/>)
              lastCategory = product.category; 
            }
        })
        console.log( rows ,"rows")
    return (
        <table style={{justifyContent:'center',alignItems:'center'}}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    )
  }
}
