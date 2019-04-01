import React from "react";
import { Container } from "reactstrap";

import JoboxTableRow from "./JoboxTableRow";

class JoboxTableBody extends React.Component {
  render() {
    const { rows, onUpdateRow, requiredFields } = this.props;

    return (
      <Container fluid>
        {rows.map((row, index) => (
          <JoboxTableRow
            key={index}
            row={row}
            rowIndex={index}
            onUpdateRow={onUpdateRow}
            requiredFields={requiredFields}
          />
        ))}
      </Container>
    );
  }
}

export default JoboxTableBody;
