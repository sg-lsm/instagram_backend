import { gql } from "apollo-server-express";

export default gql`
  type Query {
    seePhoto(id: Int!): Photo
  }
`;
