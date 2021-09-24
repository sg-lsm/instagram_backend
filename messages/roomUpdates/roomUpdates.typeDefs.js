import { gql } from "apollo-server-core";

export default gql`
  type Subscription {
    roomUpdates(id:Int!): Message
  }
`;
