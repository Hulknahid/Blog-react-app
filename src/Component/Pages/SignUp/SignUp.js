import React, { useState } from "react";
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
  FormFeedback,
} from "reactstrap";
import { registration } from "../../../Services/user-services";
import Base from "../../Base/Base";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUP = () => {
  // page reconnect
  const navigate = useNavigate();
  //data store
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });
  //data destracturing
  const { name, email, password, about } = data;
  //catch error state
  const [error, setError] = useState({
    errors: {},
    isError: false,
  });
  // console.log("error message", error.errors.response.data.name);
  //onChange data binding
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
    // console.log(data);
  };
  //submit data binding
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    registration(data)
      .then((response) => {
        console.log(response);
        toast.success("User Registration Successfully!!");
        navigate("/login");
      })
      .catch((error) => {
        setError({
          errors: error,
          isError: true,
        });
        console.log(error);
        toast.error("Registration Failed");
      });
  };
  // reset field
  const resetData = () => {
    // console.log("clicked");
    setData({
      name: "",
      email: "",
      password: "",
      about: "",
    });
  };
  return (
    <div>
      <Base>
        <Container>
          {/* {JSON.stringify(data)} */}
          <Row>
            <Col md={{ size: 6, offset: 3 }} className="my-3">
              <Card color="dark" inverse>
                <CardHeader>
                  <h3 className="text-center">Fill Up Registration Form</h3>
                </CardHeader>
                <CardBody>
                  <Form onSubmit={onSubmit}>
                    {/* Name Field  */}
                    <FormGroup>
                      <Label htmlFor="name">Enter Name</Label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Enter here..."
                        onChange={(e) => handleChange(e)}
                        invalid={
                          error?.errors?.response?.data?.name ? true : false
                        }
                      />
                      <FormFeedback>
                        {error?.errors?.response?.data?.name}
                      </FormFeedback>
                    </FormGroup>
                    {/* Email Field  */}
                    <FormGroup>
                      <Label htmlFor="email">Enter Email</Label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Enter here..."
                        onChange={(e) => handleChange(e)}
                        invalid={
                          error?.errors?.response?.data?.email ? true : false
                        }
                      />
                      <FormFeedback>
                        {error?.errors?.response?.data?.email}
                      </FormFeedback>
                    </FormGroup>
                    {/* Password Field  */}
                    <FormGroup>
                      <Label htmlFor="password">Enter Password</Label>
                      <Input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Enter here..."
                        onChange={(e) => handleChange(e)}
                        invalid={
                          error?.errors?.response?.data?.password ? true : false
                        }
                      />
                      <FormFeedback>
                        {error?.errors?.response?.data?.password}
                      </FormFeedback>
                    </FormGroup>
                    {/* About Field  */}
                    <FormGroup>
                      <Label htmlFor="about">Enter About</Label>
                      <Input
                        type="textarea"
                        id="about"
                        name="about"
                        placeholder="Enter here..."
                        style={{ height: "200px" }}
                        onChange={(e) => handleChange(e)}
                        invalid={
                          error?.errors?.response?.data?.about ? true : false
                        }
                      />
                      <FormFeedback>
                        {error?.errors?.response?.data?.about}
                      </FormFeedback>
                    </FormGroup>
                    <Container className="text-center">
                      <Button color="light" outline>
                        Registration
                      </Button>
                      <Button
                        color="light"
                        outline
                        className="ms-2"
                        onClick={resetData}
                        type="reset"
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

export default SignUP;
