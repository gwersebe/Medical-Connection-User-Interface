import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup, Navbar, Nav, Button, Form } from 'react-bootstrap';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [viewMode, setViewMode] = useState('list'); // 'list', 'add', 'edit'

  useEffect(() => {
    // Fetch doctors data from the API
    axios.get('/doctors')
      .then(response => {
        setDoctors(response.data);
      })
      .catch(error => {
        console.error('Error fetching doctors:', error);
      });
  }, []);

  const renderContent = () => {
    switch (viewMode) {
      case 'list':
        return (
          <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">Medical Connection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link onClick={() => setViewMode('list')}>Doctors List</Nav.Link>
                    <Nav.Link onClick={() => setViewMode('add')}>Add Doctor</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1>Doctors</h1>
            <ListGroup>
              {doctors.map(doctor => (
                <ListGroup.Item key={doctor.id}>
                  {doctor.name} - {doctor.specialization}
                  <Button variant="link" onClick={() => setViewMode('edit')}>Edit</Button>
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Container>
        );
      case 'add':
        return (
          <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">Medical Connection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link onClick={() => setViewMode('list')}>Back to List</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1>Add Doctor</h1>
            {/* Render Add Doctor form component */}
          </Container>
        );
      case 'edit':
        return (
          <Container>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Container>
                <Navbar.Brand href="/">Medical Connection</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="ml-auto">
                    <Nav.Link onClick={() => setViewMode('list')}>Back to List</Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
            <h1>Edit Doctor</h1>
            {/* Render Edit Doctor form component */}
          </Container>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderContent()}
    </div>
  );
};

export default Doctors;
