import React, { Component } from 'react'

export default class ProductRow extends Component {
  render() {
      console.log(this.props.product,"row product")
    return (
          <tr>
              <td>{ this.props.product.name } </td>
              <td>{ this.props.product.price  } </td>
          </tr>
     
    )
  }
}
