import React, { useState } from "react";
import Base from "../../Base/Base";
import { toast } from "react-toastify";
import {
  Container,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { onLogin, userLogin } from "../../../Services/user-services";
// import { onLogin } from "../../../Services/user-services";
const Login = () => {
  //data store
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  //data destracturing
  const { username, password } = data;
  // data enter to the data store
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  // submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    // validation
    if (data.username.trim() === "" || data.password.trim() === "") {
      toast.error("User name and password is required!!");
    }
    userLogin(data)
      .then((response) => {
        console.log(response);
        toast.success("User Login successfully!!");
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          toast.error(error.message);
        }
      });
  };
  const dataReset = () => {
    setData({
      username: "",
      password: "",
    });
  };
  return (
    <div>
      <Base>
        <Container>
          {JSON.stringify(data)}
          <Row>
            <Col md={{ size: 6, offset: 3 }} className="my-3">
              <Card color="dark" inverse>
                <CardHeader>
                  <h3 className="text-center">Fill Up Login Form</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={onSubmit}>
                    <FormGroup>
                      <Label htmlFor="username">Enter Email</Label>
                      <Input
                        type="username"
                        id="username"
                        name="username"
                        placeholder="Enter here..."
                        onChange={(e) => handleChange(e)}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Label htmlFor="password">Enter Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter here..."
                        onChange={(e) => handleChange(e)}
                      />
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="light" outline>
                        Login
                      </Button>
                      <Button
                        color="light"
                        outline
                        className="ms-2"
                        type="reset"
                        onClick={dataReset}
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </Base>
    </div>
  );
};

export default Login;
