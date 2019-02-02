import React, { Component } from 'react'

export default class SearchBar extends Component {
     onHandleChange=( e )=>{
        this.props.onFilterTextChange( e.target.value );
      }
      handleFilterStock=(e)=>{
        console.log(e.target.checked)
        this.props.onStockChange( e.target.checked )
      }
  render() {
     
    return (
      <div style={{marginTop:20}}>
          <input type="checkbox" checked={this.props.onStock} onChange={(event)=>this.handleFilterStock(event)}/>
          check to see the stock products&nbsp;
          <input type="text" placeholder="search product" onChange= {this.onHandleChange}/>
      </div>
    )
  }
}
