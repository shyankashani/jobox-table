import React from "react";
import { every, isEmpty } from "lodash";

import EditableRow from "./Rows/EditableRow";
import ReadableRow from "./Rows/ReadableRow";

class JoboxTableRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false
    };
  }

  componentDidMount() {
    const { row } = this.props;
    if (every(row, isEmpty)) {
      this.setState({
        isEditing: true
      });
    }
  }

  toggleIsEditing() {
    this.setState(prevState => ({
      isEditing: !prevState.isEditing
    }));
  }

  render() {
    const { toggleIsEditing } = this;
    const { isEditing } = this.state;
    const { row, rowIndex, onUpdateRow, requiredFields } = this.props;

    return isEditing ? (
      <EditableRow
        row={row}
        rowIndex={rowIndex}
        onUpdateRow={onUpdateRow}
        requiredFields={requiredFields}
        toggleIsEditing={toggleIsEditing.bind(this)}
      />
    ) : (
      <ReadableRow row={row} toggleIsEditing={toggleIsEditing.bind(this)} />
    );
  }
}

export default JoboxTableRow;
