import React from "react";
import ReactQuill from "react-quill";
import { Card, Form, FormInput } from "antd";

import "react-quill/dist/quill.snow.css";
import "../../../assets/admin/quill.css";

const Editor = () => (
  <Card small className="mb-3">
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Your Post Title" />
        <ReactQuill className="add-new-post__editor mb-1" />
      </Form>
  </Card>
);

export default Editor;
