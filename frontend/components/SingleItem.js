import React, { Component } from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Error from "./ErrorMessage";
import styled from "styled-components";
import Head from "next/head";
import Link from "next/link";
import DeleteItem from "./DeleteItem";
import AddToCart from "./AddToCart";

const SingleItemStyles = styled.div`
  max-width: 1200px;
  margin: 2rem auto;
  box-shadow: ${props => props.theme.bs};
  display: grid;
  grid-template-areas: "image more";
  @media (max-width: 700px) {
    grid-template-areas:
      "image"
      "more";
  }
  /*grid-template-rows: 1fr;*/
  min-height: 800px;
  img {
    grid-area: image;
    width: 100%;
    height: auto;
    object-fit: contain;
    /*border: 1px solid green;*/
  }
  .details {
    grid-area: more;
    display: grid;
    justify-items: center;
    align-self: start;
    align-items: center;
    margin: 3rem;
    font-size: 2rem;
    /*border: 1px solid red;*/
  }
  .description {
    display: grid;
    justify-items: center;
    align-self: center;
    align-items: center;
    font-size: 2rem;
    /*border: 1px solid purple;*/
  }
  .addtocart {
    cursor: pointer;
    display: grid;
    justify-items: center;
    align-self: center;
    align-items: center;
    font-size: 2rem;
    border: 1px solid green;
    background-color: #09a7a1;
    color: white;
  }
  .modify {
    cursor: pointer;
    display: grid;
    justify-items: center;
    align-self: center;
    align-items: center;
    font-size: 2rem;
    /*border: 1px solid blue;*/
  }
  .edit {
    cursor: pointer;
    display: grid;
    justify-items: stretch;
    align-self: center;
    align-items: center;
    font-size: 2rem;
    /*border: 1px solid orange;*/
    background-color: #ff790e;
    color: white;
  }
  .delete {
    cursor: pointer;
    display: grid;
    justify-items: center;
    align-self: center;
    align-items: center;
    font-size: 2rem;
    /*border: 1px solid red;*/
    background-color: red;
    color: white;
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(id: $id) {
      id
      title
      description
      image
      largeImage
    }
  }
`;

class SingleItem extends Component {
  render() {
    return (
      <Query query={SINGLE_ITEM_QUERY} variables={{ id: this.props.id }}>
        {({ data, loading, error }) => {
          console.log(data);
          if (error) return <Error error={error} />;
          if (loading) return <p>loading...</p>;
          if (!data.item) return <p>No data found for {this.props.id}</p>;

          return (
            <SingleItemStyles>
              <Head>
                <title>sick-fits | {data.item.title}</title>
              </Head>

              <img src={data.item.largeImage} alt={data.item.title} />
              <div className="details">
                <div className="description">
                  <h2>{data.item.title}</h2>
                  <p>{data.item.description}</p>
                </div>
                <br />
                <div className="addtocart">
                  <AddToCart id={data.item.id} />
                </div>
                <br />
                <div className="modify">
                  <div className="edit">
                    <Link
                      href={{
                        pathname: "/update",
                        query: { id: data.item.id }
                      }}
                    >
                      <a>Edit</a>
                    </Link>
                  </div>
                  <br />
                  <div className="delete">
                    <DeleteItem id={data.item.id}>Delete</DeleteItem>
                  </div>
                </div>
              </div>
            </SingleItemStyles>
          );
        }}
      </Query>
    );
  }
}

export default SingleItem;
export { SINGLE_ITEM_QUERY };
