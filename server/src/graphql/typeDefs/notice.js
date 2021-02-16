import {gql} from "apollo-server-express";

export default gql`
    extend type Query {
        notices: [Notice]!
    }

    type Notice {
        id: ID!
        title: String!
        content: String!
        writeDate: String!
    }
`;