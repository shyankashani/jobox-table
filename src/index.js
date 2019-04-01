import React from "react";
import PropTypes from "prop-types";

import "bootstrap/dist/css/bootstrap.min.css";
import { keys, reduce } from "lodash";

import JoboxTableHead from "./JoboxTableHead";
import JoboxTableBody from "./JoboxTableBody";

class JoboxTable extends React.Component {
  static propTypes = {
    rows: PropTypes.arrayOf(PropTypes.object),
    onAddRow: PropTypes.func,
    onUpdateRow: PropTypes.func,
    requiredFields: PropTypes.arrayOf(PropTypes.string)
  };

  render() {
    const { rows, onAddRow, onUpdateRow, requiredFields } = this.props;

    return (
      <div>
        <JoboxTableHead rows={rows} onAddRow={onAddRow} />

        <JoboxTableBody
          rows={rows}
          onUpdateRow={onUpdateRow}
          requiredFields={requiredFields}
        />
      </div>
    );
  }
}

export default JoboxTable;
