import React, { Component } from "react";
import Router from "next/router";

class MenuItem extends Component {
  constructor(props) {
    super(props);
    this.handleLinkClick = this.handleLinkClick.bind(this);
  }
  handleLinkClick() {
    Router.push({
      pathname: `${this.props.link}`,
      query: {}
    });
  }
  render() {
    const styles = {
      container: {
        opacity: 1
        //border: "1px solid orange"
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
      }
    };
    return (
      <div style={styles.container}>
        <div style={styles.menuItem} onClick={this.handleLinkClick}>
          {this.props.children}
        </div>
        <div style={styles.line} />
      </div>
    );
  }
}

export default MenuItem;
