import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    readMessage(id: Int!): MutationResponse!
  }
`;
