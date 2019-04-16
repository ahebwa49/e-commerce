import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { Mutation } from "react-apollo";
import Router from "next/router";
import NProgress from "nprogress";
import PropTypes from "prop-types";
import gql from "graphql-tag";
import calcTotalPrice from "../lib/calcTotalPrice";
import Error from "./ErrorMessage";
import User, { CURRENT_USER_QUERY } from "./User";

const CREATE_ORDER_MUTATION = gql`
  mutation CREATE_ORDER_MUTATION($token: String!) {
    createOrder(token: $token) {
      id
      charge
      total
      items {
        id
        title
      }
    }
  }
`;

function totalItems(cart) {
  return cart.reduce((tally, cartItem) => tally + cartItem.quantity, 0);
}

class TakeMyMoney extends Component {
  onToken = async (res, createOrder) => {
    NProgress.start();
    console.log(res.id);
    // manually call the mutation once we have the stripe token
    const order = await createOrder({
      variables: {
        token: res.id
      }
    }).catch(err => {
      alert(err.message);
    });
    console.log(order);
    Router.push({
      pathname: "/order",
      query: { id: order.data.createOrder.id }
    });
  };
  render() {
    return (
      <User>
        {({ data: { profile } }) => (
          <Mutation
            mutation={CREATE_ORDER_MUTATION}
            refetchQueries={[{ query: CURRENT_USER_QUERY }]}
          >
            {createOrder => (
              <StripeCheckout
                amount={calcTotalPrice(profile.cart)}
                name="Sick Fits"
                description={`order of ${totalItems(profile.cart)} items`}
                image={
                  profile.cart.length &&
                  profile.cart[0].item &&
                  profile.cart[0].item.image
                }
                stripeKey="pk_test_cB5I6YYzJoKoiBaTGvghAkAc003RAVKrzV"
                currency="USD"
                email={profile.email}
                token={res => this.onToken(res, createOrder)}
              >
                {this.props.children}
              </StripeCheckout>
            )}
          </Mutation>
        )}
      </User>
    );
  }
}

export default TakeMyMoney;
