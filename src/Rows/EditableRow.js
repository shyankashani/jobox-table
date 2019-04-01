import React from "react";
import { map, includes } from "lodash";
import { Row } from "reactstrap";
import { Formik, Form } from "formik";

import EditableCol from "../Cols/EditableCol";
import ActionsCol from "../Cols/ActionsCol";

class EditableRow extends React.Component {
  onSubmit(values) {
    const { rowIndex, onUpdateRow, toggleIsEditing } = this.props;

    onUpdateRow(rowIndex, values);
    toggleIsEditing();
  }

  validate(value) {
    let error;

    if (typeof value === "string" && !value) {
      error = "Text field required";
    }

    return error;
  }

  render() {
    const { onSubmit, validate } = this;

    const { row, toggleIsEditing, requiredFields } = this.props;

    return (
      <Formik
        initialValues={row}
        onSubmit={onSubmit.bind(this)}
        render={({ values, errors, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <Row className="py-2 border-top">
              {map(row, (value, key) => (
                <EditableCol
                  key={key}
                  name={key}
                  value={value}
                  errors={errors}
                  isRequired={includes(requiredFields, key)}
                  validate={validate.bind(this)}
                  />
              ))}

              <ActionsCol
                isEditing={true}
                toggleIsEditing={toggleIsEditing} />
            </Row>
          </Form>
        )}
        />
    );
  }
}

export default EditableRow;
