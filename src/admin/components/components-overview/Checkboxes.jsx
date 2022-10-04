import React from "react";
import { Col, Checkbox } from "antd";

const Checkboxes = () => (
  <Col sm="12" md="4" className="mb-3">
    <strong className="text-muted d-block mb-2">Checkboxes</strong>
    <fieldset>
      <Checkbox>Default</Checkbox>
      <Checkbox defaultChecked>Checked</Checkbox>
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled defaultChecked>
        Disabled Checked
      </Checkbox>
    </fieldset>
  </Col>
);

export default Checkboxes;
