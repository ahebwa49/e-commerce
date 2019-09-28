import React, { Component } from "react";
import Header from "./Header";
import Meta from "./Meta";
import styled, { ThemeProvider, injectGlobal } from "styled-components";
import MenuApp from "./MenuApp";

const theme = {
  red: "#09A7A1",
  black: "#393939",
  grey: "#3A3A3A",
  lightgrey: "#E1E1E1",
  offWhite: "#EDEDED",
  maxWidth: "1000px",
  bs: "0 12px 24px 0 rgba(0, 0, 0, 0.09)"
};

const StyledPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;
const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;
injectGlobal`
  @font-face {
    font-family: 'radnika_next';
    src: url('/static/radnikanext-medium-webfont.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
  }
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: 'radnika_next';
    position: relative;
  }
  a {
    text-decoration: none;
    color: ${theme.black};
  }
`;

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleMenuButtonClick() {
    this.setState({ menuOpen: !this.state.menuOpen }, async () => {
      /*await document.addEventListener("click", this.closeMenu);*/
      /*document.getElementById("menuButton").removeEventListener("click", "");*/
    });
  }
  closeMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, async () => {
      /*await document.removeEventListener("click", this.closeMenu);*/
    });
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Meta />
          <MenuApp menuOpen={this.state.menuOpen} />
          <Header
            menuOpen={this.state.menuOpen}
            handleMenuButtonClick={this.handleMenuButtonClick}
          />
          <Inner>{this.props.children}</Inner>
        </StyledPage>
      </ThemeProvider>
    );
  }
}

export default Page;
