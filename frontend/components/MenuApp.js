import React, { Component } from "react";
import Router from "next/router";
import MenuItem from "./MenuItem";
import Menu from "./Menu";

class MenuApp extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const styles = {
      container: {
        display: this.props.menuOpen ? "flex" : "none",
        position: "fixed",
        top: "15%",
        right: 0,
        zIndex: "2",
        opacity: this.props.menuOpen ? 1 : 0,
        alignItems: "center",
        width: "100%",
        height: this.props.menuOpen ? "auto" : 0,
        color: "red",
        fontFamily: "Lobster"
      }
    };
    const menu = [
      { title: "Shop", link: "/" },
      { title: "Sign In", link: "/signin" }
    ];
    const menuItems = menu.map((item, index) => {
      return (
        <MenuItem link={item.link} key={index}>
          {item.title}
        </MenuItem>
      );
    });
    return (
      <div style={styles.container}>
        <Menu menuOpen={this.props.menuOpen}>{menuItems}</Menu>
      </div>
    );
  }
}
export default MenuApp;
