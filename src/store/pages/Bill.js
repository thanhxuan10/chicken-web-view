import React, {Component} from 'react';
import {Alert, Button, Modal} from 'reactstrap'
import BillCard from '../components/BillCard';
import { ProductContext } from '../../context/ProductContext'

class Bill extends Component{
  render(){
    return(
      <div>
      <h1 className="d-flex justify-content-center">Bill Management</h1>
    
     <Alert color="primary">
        Đơn hàng 1
        <ProductContext.Consumer>
          
            {({ togglebill }) => 
            (<div className="mt-auto ml-auto">
            <Button   className="m-1"  onClick = {togglebill}>Xem chi tiết</Button>
            </div>)}
          </ProductContext.Consumer>
          <ProductContext.Consumer>
            {({ modalbill, togglebill }) => <Modal isOpen={modalbill}>
              <BillCard exit={togglebill} />
            </Modal>}
          </ProductContext.Consumer>
      </Alert>

        
      </div>
    )
  }
}

export default Bill;