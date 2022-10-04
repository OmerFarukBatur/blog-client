import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  List,
  Button,
  Input,
  Checkbox
} from "antd";

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3">
    <div className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>
    <div className="p-0">
      <List flush>
        <List.Item className="px-3 pb-2">
          <Checkbox className="mb-1" value="uncategorized" defaultChecked>
            Uncategorized
          </Checkbox>
          <Checkbox className="mb-1" value="design" defaultChecked>
            Design
          </Checkbox>
          <Checkbox className="mb-1" value="development">
            Development
          </Checkbox>
          <Checkbox className="mb-1" value="writing">
            Writing
          </Checkbox>
          <Checkbox className="mb-1" value="books">
            Books
          </Checkbox>
        </List.Item>

        <List.Item className="d-flex px-3">
          <Input className="ml-auto">
            {/* <FormInput placeholder="New category" />
            <InputGroupAddon type="append"> */}
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            {/* </InputGroupAddon> */}
          </Input>
        </List.Item>
      </List>
    </div>
  </Card>
);

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

export default SidebarCategories;
