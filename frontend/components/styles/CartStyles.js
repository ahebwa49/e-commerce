import styled from "styled-components";

const CartStyles = styled.div`
  padding: 20px;
  position: relative;
  background: white;
  position: fixed;
  height: 100%;
  top: 0;
  right: 0;
  width: 40vw;
  min-width: 300px;
  bottom: 0;
  transform: translateX(100%);
  transition: all 0.3s;
  box-shadow: 0 0 10px 3px rgba(0, 0, 0, 0.2);
  z-index: 5;
  display: grid;
  grid-template-rows: auto 1fr auto;
  ${props => props.open && `transform: translateX(0);`};
  header {
    border-bottom: 5px solid ${props => props.theme.black};
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
  footer {
    border-top: 10px double ${props => props.theme.black};
    margin-top: 2rem;
    padding-top: 2rem;
    display: grid;
    grid-template-columns: auto auto;
    align-items: center;
    font-size: 3rem;
    font-weight: 900;
    p {
      margin: 0;
    }
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: scroll;
  }
  @media (max-width: 700px) {
    font-size: 16px;
    width: 90%;
    height: 70%;
    padding: 5px;
    margin-bottom: 5px;
    padding-bottom: 5px;
    footer {
      border-top: 3px double ${props => props.theme.black};
      margin-top: 5px;
      padding-top: 5px;
      display: grid;
      grid-template-columns: auto auto;
      align-items: center;
      font-size: 16px;
      font-weight: 600;
    }
  }
`;

export default CartStyles;
