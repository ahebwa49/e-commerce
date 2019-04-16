import React from "react";
import CartStyles from "./styles/CartStyles";
import Supreme from "./styles/Supreme";
import SickButton from "./styles/SickButton";
import CloseButton from "./styles/CloseButton";
import { Query, Mutation } from "react-apollo";
import gql from "graphql-tag";
import { adopt } from "react-adopt";
import User from "./User";
import CartItem from "./CartItem";
import calcTotalPrice from "../lib/calcTotalPrice";
import formatMoney from "../lib/formatMoney";
import TakeMyMoney from "./TakeMyMoney";

const LOCAL_STATE_QUERY = gql`
  query {
    cartOpen @client
  }
`;

const TOGGLE_CART_MUTATION = gql`
  mutation {
    toggleCart @client
  }
`;

const Composed = adopt({
  user: ({ render }) => <User>{render}</User>,
  toggleCart: ({ render }) => (
    <Mutation mutation={TOGGLE_CART_MUTATION}>{render}</Mutation>
  ),
  localState: ({ render }) => <Query query={LOCAL_STATE_QUERY}>{render}</Query>
});

const Cart = props => (
  <Composed>
    {({ user, toggleCart, localState }) => {
      const profile = user.data.profile;
      if (!profile) return null;
      return (
        <CartStyles open={localState.data.cartOpen}>
          <header>
            <CloseButton onClick={toggleCart} title="close">
              &times;
            </CloseButton>
            <Supreme>{profile.name}'s Cart</Supreme>
            <p>
              You have {profile.cart.length} item
              {profile.cart.length === 1 ? "" : "s"} in your cart
            </p>
          </header>
          <ul>
            {profile.cart.map(cartItem => (
              <CartItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </ul>
          <footer>
            <p>{formatMoney(calcTotalPrice(profile.cart))}</p>
            {profile.cart.length && (
              <TakeMyMoney>
                <SickButton>Checkout</SickButton>
              </TakeMyMoney>
            )}
          </footer>
        </CartStyles>
      );
    }}
  </Composed>
);
export default Cart;
export { LOCAL_STATE_QUERY, TOGGLE_CART_MUTATION };
