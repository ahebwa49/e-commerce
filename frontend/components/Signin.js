import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Link from "next/link";
import gql from "graphql-tag";
import Form from "./styles/Form";
import Error from "./ErrorMessage";
import { CURRENT_USER_QUERY } from "./User";
import RequestReset from "./RequestReset";

const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
      name
      email
    }
  }
`;

class Signin extends Component {
  state = {
    email: "",
    password: "",
    requestReset: false
  };
  saveToState = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={this.state}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signin, { data, loading, error }) => {
          return (
            <Form
              method="post"
              onSubmit={async e => {
                e.preventDefault();
                const res = await signin();
                console.log(res);
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign in to your account</h2>
                <Error error={error} />
                <label htmlFor="email">
                  email
                  <input
                    type="text"
                    name="email"
                    placeholder="email"
                    value={this.state.email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={this.state.password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign in!</button>
                <h3>
                  Create an{" "}
                  <Link href="/signup">
                    <a>account</a>
                  </Link>
                </h3>
              </fieldset>
            </Form>
          );
        }}
      </Mutation>
    );
  }
}

export default Signin;
