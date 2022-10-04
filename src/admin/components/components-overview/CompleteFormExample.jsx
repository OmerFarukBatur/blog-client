import React from "react";
import {
  List,
  Row,
  Col,
  Form,
  Input,
  Checkbox,
  Select,
  Button
} from "antd";

const CompleteFormExample = () => (
  <List flush>
    <List.Item className="p-3">
      <Row>
        <Col>
          <Form>
            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feEmailAddress">Email</label>
                <Input
                  id="feEmailAddress"
                  type="email"
                  placeholder="Email"
                />
              </Col>
              <Col md="6">
                <label htmlFor="fePassword">Password</label>
                <Input
                  id="fePassword"
                  type="password"
                  placeholder="Password"
                />
              </Col>
            </Row>

            <Form.Item>
              <label htmlFor="feInputAddress">Address</label>
              <Input id="feInputAddress" placeholder="1234 Main St" />
            </Form.Item>

            <Form.Item>
              <label htmlFor="feInputAddress2">Address 2</label>
              <Input
                id="feInputAddress2"
                placeholder="Apartment, Studio or Floor"
              />
            </Form.Item>

            <Row form>
              <Col md="6" className="form-group">
                <label htmlFor="feInputCity">City</label>
                <Input id="feInputCity" />
              </Col>
              <Col md="4" className="form-group">
                <label htmlFor="feInputState">State</label>
                <Select id="feInputState">
                  <option>Choose...</option>
                  <option>...</option>
                </Select>
              </Col>
              <Col md="2" className="form-group">
                <label htmlFor="feInputZip">Zip</label>
                <FormInput id="feInputZip" />
              </Col>
              <Col md="12" className="form-group">
                <Checkbox>
                  {/* eslint-disable-next-line */}I agree with your{" "}
                  <a href="#">Privacy Policy</a>.
                </Checkbox>
              </Col>
            </Row>
            <Button type="submit">Create New Account</Button>
          </Form>
        </Col>
      </Row>
    </List.Item>
  </List>
);

export default CompleteFormExample;
