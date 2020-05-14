import React, { Component } from 'react';
import { Alert, Button, Modal } from 'reactstrap'
import { Link } from 'react-router-dom';
import { BillContext } from '../../context/BillContext'

export default function BillComponents(props) {
    const { item } = props
    const date = new Date(item.date)
    const re = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes()
    if (item.status == 0) {
        return (
            <BillContext.Consumer>
                {({ getBill }) =>
                    <div onClick={() => getBill(item)}>

                        <Link to="/billcard">
                            <Alert color="primary">
                                Bill {item.id} Chưa xem
                        <div className="text-right" >{re}</div>
                            </Alert>
                        </Link>

                    </div>}

            </BillContext.Consumer>
        )
    } else {
        return (
            <div>
                <Alert color="primary">
                    Bill {item.id}<br />
                Đã xem
                {re}
                </Alert>

            </div>
        )
    }

}





