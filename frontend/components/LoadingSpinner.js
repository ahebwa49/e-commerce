import React from "react";

const LoadingSpinner = () => {
  const styles = {
    container: {
      display: "grid",
      justifyItems: "center",
      justifySelf: "center",
      alignItems: "center",
      alignSelf: "center",
      textAlign: "center"
    }
  };
  return <div className="spinner" style={styles.container} />;
};
export default LoadingSpinner;
