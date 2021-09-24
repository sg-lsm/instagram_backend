import { gql } from "apollo-server-core";

export default gql`
  type Mutation {
    sendMessage(payload: String!, roomId: Int, userId: Int): MutationResponse!
  }
`;
