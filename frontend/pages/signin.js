import React, { Component } from "react";
import Signup from "../components/Signup";
import Signin from "../components/Signin";
//import RequestReset from "../components/RequestReset";
import styled from "styled-components";

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 20px;
`;

class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: true
    };
  }
  render() {
    const { login } = this.state;
    return <Columns>{login ? <Signin /> : <Signup />}</Columns>;
  }
}
export default SigninPage;
