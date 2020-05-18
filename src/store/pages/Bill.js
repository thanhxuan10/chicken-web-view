import React, { Component } from 'react';
import { Alert, Button, Modal } from 'reactstrap'
import { BillContext } from '../../context/BillContext'
import BillComponents from '../components/BillComponents';

class Bill extends Component {
  render() {
    return (
      <div >
        <h1 className="d-flex justify-content-center">Bill Management</h1>
        <BillContext.Consumer>
          {({ items }) => {
            if (items.length > 0) {
              return items.map((item, index) => <BillComponents
                key={index}
                item={item} />)
            } else {
              return <p>Không có sản phẩm nào</p>
            }

          }}
        </BillContext.Consumer>
      </div>
    )
  }
}

export default Bill;