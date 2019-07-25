import React, { Component } from "react";
import Router from "next/router";
import MenuItem from "./MenuItem";
import Menu from "./Menu";
import User from "./User";

class MenuApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      container: {
        display: this.props.menuOpen ? "flex" : "none",
        position: "absolute",
        top: "9vh",
        right: "3%",
        zIndex: "2",
        opacity: this.props.menuOpen ? 1 : 0,
        alignItems: "center",
        width: "100%",
        height: this.props.menuOpen ? "auto" : 0,
        color: "red",
        fontFamily: "Lobster"
      }
    };
    const guestMenu = [
      { title: "Shop", link: "/" },
      { title: "Sign In", link: "/signin" }
    ];
    const userMenu = [
      { title: "Shop", link: "/" },
      { title: "Sell", link: "/sell" },
      { title: "Orders", link: "/orders" }
    ];
    const guestMenuItems = guestMenu.map((item, index) => {
      return (
        <MenuItem link={item.link} key={index}>
          {item.title}
        </MenuItem>
      );
    });
    const userMenuItems = userMenu.map((item, index) => {
      return (
        <MenuItem link={item.link} key={index}>
          {item.title}
        </MenuItem>
      );
    });
    return (
      <User>
        {({ data: { profile } }) => (
          <div style={styles.container}>
            {profile ? (
              <Menu menuOpen={this.props.menuOpen}>{userMenuItems}</Menu>
            ) : (
              <Menu menuOpen={this.props.menuOpen}>{guestMenuItems}</Menu>
            )}
          </div>
        )}
      </User>
    );
  }
}
export default MenuApp;
