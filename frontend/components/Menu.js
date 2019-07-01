import React from "react";

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
    menuList: {
      paddingBottom: "1rem"
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.menuList}>{props.children}</div>
    </div>
  );
};
export default Menu;
