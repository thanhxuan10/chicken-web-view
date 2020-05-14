import React, { useState } from 'react';
import {
    Modal,
    Button,
    Label,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Table

} from "reactstrap";
import { BillContext } from '../../context/BillContext'
//import BillUpdate from './BillUpdate';


export default class BillForm extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (

            <div>
                <BillContext.Consumer>
                    {({ item, getProduct }) => 
                    <div>
                        <Table>
                            <tbody>
                                <tr>
                                    <th scope="row">{item.username}</th>
                                    <td>{item.products.price}</td>
                                    <td>{item.products.quantity}</td>

                                    <td>{item.total_price}</td>
                                </tr>
                            </tbody>
                        </Table>
                        </div>
                    
                    }
                </BillContext.Consumer>
            </div>
        )
    }
}



