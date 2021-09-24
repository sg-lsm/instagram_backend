import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    deletePhoto(id: Int!): MutationResponse!
  }
`;
