import React from "react";
import { Col, Button } from "reactstrap";

class ActionsCol extends React.Component {
  render() {
    const { isEditing, toggleIsEditing } = this.props;

    if (isEditing) {
      return (
        <Col className="align-self-center">
          <Button
            type="submit"
            color="link"
            size="sm"
            className="px-0"
          >
            Save
          </Button>
          <Button
            color="link"
            size="sm"
            className="px-0 ml-3"
            onClick={toggleIsEditing}
          >
            Cancel
          </Button>
        </Col>
      );
    }

    return (
      <Col className="align-self-center">
        <Button
          color="link"
          size="sm"
          className="px-0"
          onClick={toggleIsEditing}
        >
          Edit
        </Button>
      </Col>
    );
  }
}

export default ActionsCol;
