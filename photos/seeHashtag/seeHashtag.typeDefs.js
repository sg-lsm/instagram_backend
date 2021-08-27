import { gql } from "apollo-server-express";

export default gql`
    type Query{
        seeHashtag(hashtag:String!):Hashtag
    }
`