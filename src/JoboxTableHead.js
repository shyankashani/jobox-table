import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import { keys, reduce } from "lodash";

class JoboxTableHead extends Component {
  _generateEmptyRow() {
    const { rows } = this.props;
    return reduce(
      rows[0],
      (acc, cur, key) => Object.assign(acc, { [key]: emptyValues[typeof cur] }),
      {}
    );
  }

  addRow() {
    const { onAddRow } = this.props;
    const newRow = this._generateEmptyRow();
    onAddRow(newRow);
  }

  render() {
    const { rows } = this.props;
    return (
      <Container fluid>
        <Row className="py-2 border-top font-weight-bold">
          {keys(rows[0]).map((value, key) => <Col key={key}>{value}</Col>)}
          <Col>actions</Col>
        </Row>
        <Row className="py-2 border-top font-weight-bold">
          <Col className="align-self-center">
            <Button
              color="link"
              onClick={this.addRow.bind(this)}
              className="px-0"
            >
              &#9166; Add new row
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

const emptyValues = {
  string: "",
  boolean: false,
  number: 0
};

export default JoboxTableHead;
