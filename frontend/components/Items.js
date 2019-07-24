import React, { Component } from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import styled from "styled-components";
import Item from "./Item";
import Pagination from "./Pagination";
import LoadingSpinner from "./LoadingSpinner";
import { perPage } from "../config";

const ALL_ITEMS_QUERY = gql`
  query ALL_ITEMS_QUERY($skip:Int = 0, $first:Int=${perPage}) {
    items(first:$first, skip:$skip, orderBy:price_ASC) {
      id
      title
      description
      price
      image
      largeImage
    }
  }
`;

const Center = styled.div`
  text-align: center;
`;

const ItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  justify-self: center;
  align-self: center;
  grid-gap: 2% 4%;
  max-width: ${props => props.theme.maxWidth};
  width: 100%;
  margin: auto auto;
`;

class Items extends Component {
  render() {
    return (
      <Center>
        <Pagination page={this.props.page} />
        <p>Items</p>
        <Query
          query={ALL_ITEMS_QUERY}
          variables={{
            skip: this.props.page * perPage - perPage
          }}
        >
          {({ data, error, loading }) => {
            console.log(data);
            if (loading) return <LoadingSpinner />;
            if (error) return <p>Error: {Error.message}</p>;

            return (
              <ItemsList>
                {data.items.map(item => (
                  <Item item={item} key={item.id} />
                ))}
              </ItemsList>
            );
          }}
        </Query>
        <br />

        <Pagination page={this.props.page} />
      </Center>
    );
  }
}

export default Items;

export { ALL_ITEMS_QUERY };
