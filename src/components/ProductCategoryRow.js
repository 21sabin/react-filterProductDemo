import React, { Component } from 'react'

export default class ProductCategoryRow extends Component {
  render() {
      const category = this.props.category
    return (
        <tr>
            <th>
                { category }
            </th>
        </tr>
    )
  }
}
