import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Redirect,
} from "react-router-dom";
import NavBar from '../components/NavBar'
import { Container } from 'reactstrap';
import CardForm from '../components/CardForm';
import { UserContext } from '../context/UserContext'

export default class extends React.Component {
    render() {
        return (
            <Container>
                <div>
                    <CardForm />
                </div>
            </Container>
        )
    }
}