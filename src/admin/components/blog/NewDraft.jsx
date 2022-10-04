import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  Form,
  Input,
  FormTextarea,
  Button
} from "shards-react";

const { TextArea } = Input;

const NewDraft = ({ title }) => (
  <Card small className="h-100">
    {/* Card Header */}
    <div className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </div>

    <div className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <Form.Item>
          <Input placeholder="Brave New World" />
        </Form.Item>

        {/* Body */}
        <Form.Item>
          <TextArea placeholder="Words can be like X-rays if you use them properly..." />
        </Form.Item>

        {/* Create Draft */}
        <Form.Item className="mb-0">
          <Button theme="accent" type="submit">
            Create Draft
          </Button>
        </Form.Item>
      </Form>
    </div>
  </Card>
);

NewDraft.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewDraft.defaultProps = {
  title: "New Draft"
};

export default NewDraft;
