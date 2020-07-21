import React, {Component} from 'react';
import { Breadcrumb, BreadcrumbItem, Button, Label, Col, Row, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, Form, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);



class Contact extends Component {
	constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            modalTitle: '',
            modalBody: ''
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.setModalInfo = this.setModalInfo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    setModalInfo(title, body) {
        this.setState({
            modalTitle: title,
            modalBody: body
        });
    }

    handleSubmit(values) {
        const contact = {
            firstname: values.firstname,
            lastname: values.lastname,
            telnum: values.telnum,
            email: values.email,
            agree: values.agree,
            contactType: values.contactType,
            message: values.message
        }
        this.props.postContact(contact)
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        }, error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(response => {
            this.setModalInfo('Información', 'Información enviada con éxito');
            this.toggleModal();
        })
        .catch(error => {
            console.log('Post feedback', error.message);
            this.setModalInfo('Error', 'Error al enviar los datos');
            this.toggleModal();
        });
        this.props.resetContactForm();
    }

    render() {
        return(
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to='/home'>Inicio</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Contáctenos</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contáctenos</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content justify-content-center">
                    <div className="col-12 mb-3">
                        <h3 align="center">Contáctanos hoy</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form model="contact" onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className="form-group">
                                <Label htmlFor="firstname" md={2}>Nombres</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id="firstname" name="firstname"
                                        placeholder="First Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".firstname"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido ',
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe tener 20 caracteres o menos'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="lastname" md={2}>Apellidos</Label>
                                <Col md={10}>
                                    <Control.text model=".lastname" id="lastname" name="lastname"
                                        placeholder="Last Name"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(3), maxLength: maxLength(20)
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".lastname"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido ',
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe tener 20 caracteres o menos'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="telnum" md={2}>Número Tel.</Label>
                                <Col md={10}>
                                    <Control.text model=".telnum" id="telnum" name="telnum"
                                        placeholder="Tel. Number"
                                        className="form-control"
                                        validators={{
                                            required, minLength: minLength(7), maxLength: maxLength(10), isNumber
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".telnum"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido ',
                                            minLength: 'Debe ser mayor a 2 caracteres',
                                            maxLength: 'Debe tener 20 caracteres o menos',
                                            isNumber: 'Debe ser un número'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Control.text model=".email" id="email" name="email"
                                        placeholder="Email"
                                        className="form-control"
                                        validators={{
                                            required, validEmail
                                        }} />
                                    <Errors
                                        className="text-danger"
                                        model=".email"
                                        show="touched"
                                        messages={{
                                            required: 'Requerido ',
                                            validEmail: 'Dirección de email inválida'
                                        }} />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 6, offset: 2}}>
                                    <div className="form-check">
                                        <Label check>
                                            <Control.checkbox model=".agree" name="agree"
                                                className="form-check-input"
                                                />{' '}
                                                <strong>Podemos contactarte?</strong>
                                        </Label>
                                    </div>
                                </Col>
                                <Col md={{size: 3, offset: 1}}>
                                    <Control.select model=".contactType" name="contactType"
                                        className="form-control">
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Label htmlFor="message" md={2}>Deja aquí tu comentario</Label>
                                <Col md={10}>
                                    <Control.textarea model=".message" id="message" name="message"
                                        rows="6"
                                        className="form-control" />
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={{size: 10, offset: 2}}>
                                    <Button type="submit" color="dark">
                                        Enviar
                                    </Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>{this.state.modalTitle}</ModalHeader>
                    <ModalBody>
                        <p align="center">{this.state.modalBody}</p>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="dark" onClick={this.toggleModal}>Aceptar</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
    
}

export default Contact;