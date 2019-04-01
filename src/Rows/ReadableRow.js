import React from "react";
import { map } from "lodash";
import { Row, Col } from "reactstrap";

import ActionsCol from "../Cols/ActionsCol";

class ReadableRow extends React.Component {
  render() {
    const { row, toggleIsEditing } = this.props;

    return (
      <Row className="border-top py-2">
        {map(row, (value, key) => (
          <Col key={key} className="align-self-center">
            {value.toString()}
          </Col>
        ))}

        <ActionsCol isEditing={false} toggleIsEditing={toggleIsEditing} />
      </Row>
    );
  }
}

export default ReadableRow;
