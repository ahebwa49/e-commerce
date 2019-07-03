import React from "react";
import SmallSignout from "./SmallSignout";
import User from "./User";
import { Mutation } from "react-apollo";
import { TOGGLE_CART_MUTATION } from "./Cart";
import CartCount from "./CartCount";

const Menu = props => {
  const styles = {
    container: {
      display: props.menuOpen ? "flex" : "none",
      justifyContent: "center",
      position: "absolute",
      top: "15%",
      right: 0,
      height: props.menuOpen ? "auto" : 0,
      width: "30%",
      flexDirection: "column",
      background: "white",
      opacity: props.menuOpen ? 1 : 0,
      color: "#fafafa",
      transition: "height 0.3s ease",
      zIndex: 3,
      border: "1px solid gray",
      borderRadius: "3px"
    },
    menuItem: {
      display: "flex",
      justifyContent: "center",
      fontFamily: `'Open Sans', sans-serif`,
      fontSize: "1.5rem",
      padding: "3 0%",
      margin: "5%",
      cursor: "pointer",
      color: "black"
      //border: "1px solid red"
    },
    line: {
      width: "90%",
      height: "1px",
      background: "gray",
      margin: "auto"
    },
    cart: {
      display: "flex"
    },
    menuList: {
      paddingBottom: "1rem"
    }
  };
  return (
    <User>
      {({ data: { profile } }) => (
        <div style={styles.container}>
          <div style={styles.menuList}>{props.children}</div>
          {profile && (
            <div>
              <div style={styles.menuItem}>
                <Mutation mutation={TOGGLE_CART_MUTATION}>
                  {toggleCart => (
                    <div onClick={toggleCart} style={styles.cart}>
                      Cart
                      <CartCount
                        count={profile.cart.reduce(
                          (tally, cartItem) => tally + cartItem.quantity,
                          0
                        )}
                      />
                    </div>
                  )}
                </Mutation>
              </div>
              <div style={styles.line} />
              <div style={styles.menuItem}>
                <SmallSignout />
              </div>
            </div>
          )}
        </div>
      )}
    </User>
  );
};
export default Menu;
