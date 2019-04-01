import React from "react";
import { Col, Input } from "reactstrap";
import { Field } from "formik";

class EditableCol extends React.Component {
  render() {
    const { value, name, validate } = this.props;

    return (
      <Col>
        <Field
          type={fieldTypes[typeof value]}
          name={name}
          id={name}
          component={inputComponentTypes[typeof value]}
          validate={validate}
        />
      </Col>
    );
  }
}

const fieldTypes = {
  string: "text",
  number: "number",
  boolean: "checkbox"
};

const inputComponentTypes = {
  string: TextInput,
  number: NumberInput,
  boolean: CheckboxInput
};

const TextInput = ({ field, ...props }) => (
  <Input type="text" bsSize="sm" {...field} {...props} />
);

const NumberInput = ({ field, ...props }) => (
  <Input type="number" bsSize="sm" {...field} {...props} />
);

const CheckboxInput = ({ field, ...props }) => (
  <Input type="checkbox" {...field} {...props} />
);

export default EditableCol;
