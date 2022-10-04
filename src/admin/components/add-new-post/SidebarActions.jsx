/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  List,
  Button
} from "antd";

const SidebarActions = ({ title }) => (
  <Card small className="mb-3">
    <div className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>

    <div className="p-0">
      <List flush>
        <List.Item className="p-3">
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Status:</strong> Draft{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">Public</strong>{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Schedule:</strong> Now{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Readability:</strong>{" "}
            <strong className="text-warning">Ok</strong>
          </span>
        </List.Item>
        <List.Item className="d-flex px-3 border-0">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i> Save Draft
          </Button>
          <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button>
        </List.Item>
      </List>
    </div>
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Actions"
};

export default SidebarActions;
