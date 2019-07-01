import React, { Component } from "react";
import Nav from "./Nav";
import Link from "next/link";
import styled from "styled-components";
import Router from "next/router";
import NProgress from "nprogress";
import Cart from "./Cart";
import Search from "./Search";
import MenuButton from "./MenuButton";

Router.onRouteChangeStart = () => {
  NProgress.start();
};
Router.onRouteChangeComplete = () => {
  NProgress.done();
};
Router.onRouteChangeError = () => {
  NProgress.done();
};

/*class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }
  handleMenuButtonClick() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ menuOpen: !this.state.menuOpen }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
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
        transform: this.state.menuOpen ? "rotate(45deg)" : "none",
        transformOrigin: "top left",
        marginBottom: "5px"
      },
      bar2: {
        width: "35px",
        height: "5px",
        backgroundColor: "#333",
        margin: "6px 0px",
        transition: "0.25s",
        opacity: this.state.menuOpen ? 0 : 1,
        transform: this.state.menuOpen ? "translateX(-16px)" : "none"
      },
      bar3: {
        width: "35px",
        height: "5px",
        backgroundColor: "#333",
        margin: "6px 0px",
        transition: "0.25s",
        transform: this.state.menuOpen
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
          onClick={this.handleMenuButtonClick}
          id="menuButton"
        >
          <div style={styles.bar1} />
          <div style={styles.bar2} />
          <div style={styles.bar3} />
        </div>
      </div>
    );
  }
}
export { MenuButton };*/
const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.black};
    display: grid;
    border: 1px solid red;
    grid-template-areas: "logo search nav";
    justify-content: space-between;
    align-items: stretch;
    padding: 0 7%;
    .menuButton{
        display: none;
      }
      .logo{
        display: grid;
        grid-area:logo;
        position: relative;
        justify-items: start;
      }
      .search{
        display: grid;
        grid-area:search;
        position: relative;
        justify-items: center;
      }
      .nav{
        display: grid;
        grid-area:nav;
        position: relative;
        justify-items: center;
      }
    @media (max-width: 1200px) {
      padding: 0 5%;
    }
    @media (max-width: 1150px) {
      padding: 0 3%;
    }
    @media (max-width: 1000px) {
      padding: 0 2%;
      grid-template-areas: "logo search menuButton";
      justify-items: stretch;
      .nav{
        display: none;
      }
      .menuButton{
        display: grid;
        grid-area:menuButton;
        position: relative;
        justify-items: center;
        align-items: center;
      }
      .logo{
        display: grid;
        grid-area:logo;
        position: relative;
        justify-items: center;
      }
      .search{
        display: grid;
        grid-area:search;
        position: relative;
        justify-items: center;
      }
      
    }
    @media (max-width: 800px) {
      padding: 0 2%;
    }
    @media (max-width: 700px) {
      padding: 0 3%;
      grid-template-areas:
       "logo menuButton"
       "search search";
      .menuButton{
        display: grid;
        grid-area:menuButton;
        position: relative;
        justify-items: center;
        align-items: center;
      }
      .logo{
        display: grid;
        grid-area:logo;
        position: relative;
        justify-items: center;
      }
      .search{
        display: grid;
        grid-area:search;
        position: relative;
        justify-items: center;
      }
      justify-items: stretch;
      .sub-bar{
        display: grid;
        justify-self: stretch;
        justify-items: stretch;
        grid-column: 1/3;
        grid-row: 2/3;
      }
    }
  }
.sub-bar {
    display: grid;
    position: relative;
    justify-items: stretch;
    align-items: center;
    border: 1px solid blue;
    /*grid-template-columns: 1fr auto;*/
    /*border-bottom: 1px solid ${props => props.theme.lightgrey};*/
  }
`;

const Logo = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  border: 1px solid red;
  margin: 15% 0;
  z-index: 2;
  transform: skew(-7deg);
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    text-transform: uppercase;
    color: white;
    text-decoration: none;
  }
  @media (max-width: 1300px) {
    margin: 0;
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    margin: 5% 0;
  }
`;
const Header = () => (
  <StyledHeader>
    <div className="bar">
      <Logo className="logo">
        <Link href="/">
          <a>Tunda</a>
        </Link>
      </Logo>
      <div className="sub-bar">
        <Search />
      </div>
      <div className="menuButton">
        <MenuButton />
      </div>
      <div className="nav">
        <Nav />
      </div>
    </div>
    <div>
      <Cart />
    </div>
  </StyledHeader>
);

export default Header;
