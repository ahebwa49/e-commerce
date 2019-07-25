import React, { Component } from "react";
import MenuApp from "./MenuApp";

class MenuButton extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      menuOpen: false
    };
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    //this.closeMenu = this.closeMenu.bind(this);*/
  }
  /*  handleMenuButtonClick() {
    console.log("Been clicked");
    this.setState({ menuOpen: !this.state.menuOpen });
  }*/
  render() {
    const styles = {
      container: {
        display: "relative",
        cursor: "pointer",
        top: "10px"
      },
      bar1: {
        width: "35px",
        height: "5px",
        backgroundColor: "#333",
        margin: "6px 0px",
        transition: "0.25s",
        transform: this.props.menuOpen ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      bar2: {
        width: "35px",
        height: "5px",
        backgroundColor: "#333",
        margin: "6px 0px",
        transition: "0.25s",
        opacity: this.props.menuOpen ? 0 : 1,
        transform: this.props.menuOpen ? "translateX(-16px)" : "none"
      },
      bar3: {
        width: "35px",
        height: "5px",
        backgroundColor: "#333",
        margin: "6px 0px",
        transition: "0.25s",
        transform: this.props.menuOpen
          ? "translateX(-1px) rotate(-45deg)"
          : "none",
        transformOrigin: "top left",
        marginTop: "5px"
      }
    };
    return (
      <div>
        <div
          style={styles.container}
          onClick={this.props.handleMenuButtonClick}
          id="menuButton"
        >
          <div style={styles.bar1} />
          <div style={styles.bar2} />
          <div style={styles.bar3} />
        </div>
        {/** <MenuApp menuOpen={this.state.menuOpen} />*/}
      </div>
    );
  }
}
export default MenuButton;
