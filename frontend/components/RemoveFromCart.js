import React, { Component } from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import PropTypes from "prop-types";
import { CURRENT_USER_QUERY } from "./User";
import Cart from "./Cart";

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: ${props => props.theme.red};
    cursor: pointer;
  }
`;

const REMOVE_FROM_CART_MUTATION = gql`
  mutation REMOVE_FROM_CART_MUTATION($id: ID!) {
    removeFromCart(id: $id) {
      id
    }
  }
`;

class RemoveFromCart extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired
  };
  update = (cache, payload) => {
    console.log("Updating the cache");
    // manually update the cache on the client so that it matches the server.
    // 1. read the items in the cache
    const data = cache.readQuery({ query: CURRENT_USER_QUERY });

    console.log(data);
    //2. filter the deletd item out of the page
    const cartItemId = payload.data.removeFromCart.id;

    data.profile.cart = data.profile.cart.filter(
      cartItem => cartItem.id !== cartItemId
    );

    //3. put the items back
    cache.writeQuery({ query: CURRENT_USER_QUERY, data });
  };
  render() {
    return (
      <Mutation
        mutation={REMOVE_FROM_CART_MUTATION}
        variables={{
          id: this.props.id
        }}
        update={this.update}
        optimisticResponse={{
          __typename: "Mutation",
          removeFromCart: {
            __typename: Cart,
            id: this.props.id
          }
        }}
      >
        {(removeFromCart, { error, loading }) => (
          <BigButton
            disabled={loading}
            onClick={() => {
              removeFromCart().catch(err => alert(err.message));
            }}
            title="Delete Item"
          >
            &times;
          </BigButton>
        )}
      </Mutation>
    );
  }
}

export default RemoveFromCart;
