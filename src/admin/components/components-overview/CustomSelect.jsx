import React from "react";
import {
  Input,
  Select
} from "antd";

const CustomSelect = () => (
  <div>
    <Input className="mb-3">
      {/* <InputGroupAddon type="prepend">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon> */}
      <Select>
        <option>Choose</option>
        <option>...</option>
      </Select>
    </Input>

    <Input className="mb-3">
      <Select>
        <option>Choose</option>
        <option>...</option>
      </Select>
      {/* <InputGroupAddon type="append">
        <InputGroupText>Options</InputGroupText>
      </InputGroupAddon> */}
    </Input>
  </div>
);

export default CustomSelect;
