import React, { Component } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: "",
      age: null,
    };
  }

  handleDateChange = (event) => {
    this.setState({
      birthdate: event.target.value,
    });
  };

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthdate.getFullYear();
    this.setState({
      age,
    });
  };

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          {" "}
          <Col xs={12} sm={6} md={4}>
            <div className="p-4">
              {" "}
              <h2 className="text-center">Age Calculator</h2>
              <Form style={{ textAlign: "center" }}>
                <Form.Group controlId="birthdateInput">
                  <Form.Label>
                    <h5>Enter your birthdate:</h5>
                  </Form.Label>
                  <Form.Control type="date" onChange={this.handleDateChange} />
                </Form.Group>
                <Button
                  variant="primary"
                  onClick={this.calculateAge}
                  block
                  className="mt-3"
                >
                  Calculate Age
                </Button>
              </Form>
              {this.state.age !== null && (
                <p className="text-center mt-3">
                  {" "}
                  <h3>Your age is: {this.state.age} years old.</h3>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AgeCalculator;
