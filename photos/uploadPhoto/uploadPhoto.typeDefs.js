import { gql } from "apollo-server-express";

export default gql`
  type Mutation {
    uploadPhoto(file: String!, caption: String): Photo
  }
`;
