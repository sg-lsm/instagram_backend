import { gql } from "apollo-server-core";

export default gql`
    type Query{
        seeRooms:[Room]
    }
`